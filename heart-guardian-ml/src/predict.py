import numpy as np
import tensorflow as tf
from scipy.signal import find_peaks
import warnings
warnings.filterwarnings('ignore')

MODEL_ARRHYTHMIA = None
MODEL_INFARCTION = None

ARRHYTHMIA_INPUT_LENGTH = 144   # 0.4 detik @ 360 Hz
INFARCTION_INPUT_LENGTH = 400   # 0.4 detik @ 1000 Hz

def load_models():
    global MODEL_ARRHYTHMIA, MODEL_INFARCTION
    if MODEL_ARRHYTHMIA is None:
        MODEL_ARRHYTHMIA = tf.keras.models.load_model('models/ecg_model.keras')
    if MODEL_INFARCTION is None:
        MODEL_INFARCTION = tf.keras.models.load_model('models/ecg_infarction.keras')

def resample_beat(beat, target_length):
    """Resample 1D array `beat` ke `target_length` titik menggunakan interpolasi linear."""
    if len(beat) == target_length:
        return beat
    x_old = np.linspace(0, 1, len(beat))
    x_new = np.linspace(0, 1, target_length)
    return np.interp(x_new, x_old, beat)

def detect_qrs(signal, fs=360, min_distance=0.3):
    distance = int(fs * min_distance)
    threshold = 0.2 * np.max(np.abs(signal))
    peaks, _ = find_peaks(signal, height=threshold, distance=distance)
    return peaks

def extract_beats(signal, r_peaks, fs=360, window=0.4):
    half = int(window * fs / 2)
    beats = []
    valid_peaks = []
    for idx in r_peaks:
        if idx - half >= 0 and idx + half < len(signal):
            beat = signal[idx - half : idx + half]
            beats.append(beat)
            valid_peaks.append(idx)
    if len(beats) == 0:
        return np.array([]), []
    beats = np.array(beats)
    # Normalisasi z-score per beat
    beats_norm = (beats - beats.mean(axis=1, keepdims=True)) / (beats.std(axis=1, keepdims=True) + 1e-8)
    return beats_norm, valid_peaks

def classify_arrhythmia(beats, model):
    """Klasifikasi aritmia (5 kelas). Selalu resample ke 144 sampel."""
    if len(beats) == 0:
        return np.array([])
    beats_resampled = np.array([resample_beat(beat, ARRHYTHMIA_INPUT_LENGTH) for beat in beats])
    beats_input = beats_resampled[..., np.newaxis]   # (n, 144, 1)
    probs = model.predict(beats_input, verbose=0)
    return np.argmax(probs, axis=1)

def classify_infarction(beats, model, threshold=0.5):
    """Klasifikasi infark (biner). Selalu resample ke 400 sampel."""
    if len(beats) == 0:
        return np.array([])
    beats_resampled = np.array([resample_beat(beat, INFARCTION_INPUT_LENGTH) for beat in beats])
    beats_input = beats_resampled[..., np.newaxis]   # (n, 400, 1)
    probs = model.predict(beats_input, verbose=0).flatten()
    return probs

def predict_signal(signal, fs=360):
    load_models()

    r_peaks = detect_qrs(signal, fs=fs)
    if len(r_peaks) == 0:
        return [], 0, "Tidak ada detak jantung terdeteksi.", {}

    beats, valid_peaks = extract_beats(signal, r_peaks, fs=fs)
    if len(beats) == 0:
        return [], 0, "Gagal mengekstrak beat.", {}

    labels_arr = classify_arrhythmia(beats, MODEL_ARRHYTHMIA)
    probs_inf = classify_infarction(beats, MODEL_INFARCTION)

    class_names_arr = {0: 'N', 1: 'S', 2: 'V', 3: 'F', 4: 'Q'}
    beats_result = []
    for i, peak in enumerate(valid_peaks):
        beat_info = {
            'position': int(peak),
            'arrhythmia_label': int(labels_arr[i]),
            'arrhythmia_class': class_names_arr.get(labels_arr[i], '?'),
            'infarction_prob': float(probs_inf[i]) if i < len(probs_inf) else 0.0
        }
        beats_result.append(beat_info)

    veb_indices = [i for i, lbl in enumerate(labels_arr) if lbl == 2]
    veb_count = len(veb_indices)
    couplet = any(veb_indices[i+1] - veb_indices[i] == 1 for i in range(len(veb_indices)-1))
    run_vt = any(
        veb_indices[i+2] - veb_indices[i+1] == 1 and veb_indices[i+1] - veb_indices[i] == 1
        for i in range(len(veb_indices)-2)
    )
    duration_minutes = (len(labels_arr) * 0.8) / 60.0
    veb_per_min = veb_count / max(duration_minutes, 0.1)

    arr_level = 0
    if veb_per_min > 5 or run_vt:
        arr_level = 2
    elif veb_per_min > 1 or couplet:
        arr_level = 1

    infarction_detected = False
    max_prob = 0.0
    if len(probs_inf) > 0:
        max_prob = np.max(probs_inf)
        if max_prob > 0.8:
            infarction_detected = True

    if infarction_detected:
        emergency_level = 3
        message = "⚠️ DARURAT SERANGAN JANTUNG! Terdeteksi tanda infark miokard akut. Segera hubungi layanan darurat!"
    elif arr_level == 2:
        emergency_level = 2
        msg = "⚠️ DARURAT ARITMIA! "
        msg += "Ventricular Tachycardia terdeteksi!" if run_vt else "Detak ventrikel berbahaya terdeteksi!"
        message = msg + " Segera cari pertolongan medis."
    elif arr_level == 1:
        emergency_level = 1
        message = "🟡 SIAGA! Peningkatan detak ektopik ventrikel. Pantau dan konsultasikan ke dokter."
    else:
        emergency_level = 0
        message = "🟢 Normal. Tidak terdeteksi tanda bahaya."

    detail = {
        'veb_count': veb_count,
        'veb_per_minute': round(veb_per_min, 1),
        'couplet': couplet,
        'run_vt': run_vt,
        'infarction_detected': infarction_detected,
        'max_infarction_prob': round(max_prob, 4)
    }

    return beats_result, emergency_level, message, detail