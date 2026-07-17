import numpy as np
import os
from scipy.signal import find_peaks

MI_PATIENTS = [f'patient{i:03d}' for i in range(1, 31)]   # patient001..patient030
HEALTHY_PATIENTS = [f'patient{i:03d}' for i in range(43, 73)]  # patient043..patient072

def read_hea_header(hea_path):
    with open(hea_path, 'r') as f:
        lines = f.readlines()
    first = lines[0].split()
    nleads = int(first[1])
    fs = int(first[2])
    nsamp = int(first[3]) if len(first) > 3 else 0
    lead_names, fmt_list = [], []
    for i in range(1, nleads+1):
        parts = lines[i].split()
        lead_names.append(parts[0])
        fmt_list.append(parts[1])
    return nleads, fs, nsamp, lead_names, fmt_list

def read_dat_signal(dat_path, nleads, nsamp, fmt_list):
    dt = np.dtype(np.int16)
    raw = np.fromfile(dat_path, dtype=dt)
    raw = raw.reshape(-1, nleads)
    return raw[:nsamp, :]

def detect_qrs(signal, fs=1000, min_distance=0.3):
    distance = int(fs * min_distance)
    threshold = 0.2 * np.max(np.abs(signal))
    peaks, _ = find_peaks(signal, height=threshold, distance=distance)
    return peaks

def segment_beats(signal, r_peaks, fs=1000, window=0.4):
    half = int(window * fs / 2)
    beats, valid_peaks = [], []
    for idx in r_peaks:
        if idx - half >= 0 and idx + half < len(signal):
            beat = signal[idx - half : idx + half]
            beats.append(beat)
            valid_peaks.append(idx)
    return np.array(beats), valid_peaks

def process_patient(patient_dir, label, base_path='data/ptdb'):
    folder = os.path.join(base_path, patient_dir)
    if not os.path.isdir(folder):
        print(f'  [!] Folder tidak ditemukan: {folder}')
        return [], []

    # Cari semua file .hea di dalam folder
    hea_files = [f for f in os.listdir(folder) if f.endswith('.hea')]
    if not hea_files:
        print(f'  [!] Tidak ada file .hea di {folder}')
        return [], []

    # Ambil nama record dari file .hea pertama (tanpa ekstensi)
    rec_name = hea_files[0][:-4]  # misal 's0010_re'
    hea_path = os.path.join(folder, hea_files[0])
    dat_path = os.path.join(folder, rec_name + '.dat')

    if not os.path.exists(dat_path):
        print(f'  [!] File .dat tidak ditemukan untuk {rec_name} di {folder}')
        return [], []

    try:
        nleads, fs, nsamp, lead_names, fmt = read_hea_header(hea_path)
        # Cari lead II
        lead_idx = next((i for i, name in enumerate(lead_names) if name.lower() == 'ii'), None)
        if lead_idx is None:
            lead_idx = 0  # fallback
        signal_all = read_dat_signal(dat_path, nleads, nsamp, fmt)
        signal = signal_all[:, lead_idx].astype(np.float32)
    except Exception as e:
        print(f'  [!] Error baca {patient_dir}/{rec_name}: {e}')
        return [], []

    peaks = detect_qrs(signal, fs=fs)
    beats, _ = segment_beats(signal, peaks, fs=fs)
    if len(beats) == 0:
        print(f'  -> Tidak ada beat di {patient_dir}/{rec_name}')
        return [], []

    beats_norm = (beats - beats.mean(axis=1, keepdims=True)) / (beats.std(axis=1, keepdims=True) + 1e-8)
    labels = [label] * len(beats)
    return beats_norm, labels

def build_dataset():
    X_list, y_list = [], []

    print("Memproses MI...")
    for patient in MI_PATIENTS:
        X, y = process_patient(patient, label=1)
        if len(X) > 0:
            X_list.append(X)
            y_list.extend(y)
            print(f'  {patient}: {len(X)} beats')
        else:
            print(f'  {patient}: 0 beats')

    print("Memproses Healthy...")
    for patient in HEALTHY_PATIENTS:
        X, y = process_patient(patient, label=0)
        if len(X) > 0:
            X_list.append(X)
            y_list.extend(y)
            print(f'  {patient}: {len(X)} beats')
        else:
            print(f'  {patient}: 0 beats')

    if len(X_list) == 0:
        raise RuntimeError("Tidak ada data terkumpul. Periksa folder data/ptdb.")

    X = np.vstack(X_list)
    y = np.array(y_list)

    os.makedirs('data', exist_ok=True)
    np.save('data/X_infarction.npy', X)
    np.save('data/y_infarction.npy', y)
    print(f'\nTotal beats: {len(y)} (Normal: {np.sum(y==0)}, Infark: {np.sum(y==1)})')

if __name__ == '__main__':
    build_dataset()