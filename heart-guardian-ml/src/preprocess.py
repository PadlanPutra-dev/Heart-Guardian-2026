import wfdb
import numpy as np
import os
import warnings
warnings.filterwarnings('ignore')

RECORDS = [
    100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
    111, 112, 113, 114, 115, 116, 117, 118, 119, 121,
    122, 123, 124, 200, 201, 202, 203, 205, 207, 208,
    209, 210, 212, 213, 214, 215, 217, 219, 220, 221,
    222, 223, 228, 230, 231, 232, 233
]

def map_to_aami(symbol):
    if symbol in ['N', 'L', 'R', 'B', 'A', 'J', 'e', 'j']:
        return 0
    elif symbol in ['S', 'a', 'J', 'A']:
        return 1
    elif symbol in ['V', 'E']:
        return 2
    elif symbol == 'F':
        return 3
    else:
        return 4

def segment_beats(signal, anno_samples, fs=360, window=0.4):
    half = int(window * fs / 2)
    beats = []
    valid_indices = []
    for idx in anno_samples:
        if idx - half >= 0 and idx + half < len(signal):
            beat = signal[idx - half : idx + half]
            beats.append(beat)
            valid_indices.append(idx)
    return np.array(beats), valid_indices

def download_and_preprocess(data_dir='data', save_dir='data'):
    os.makedirs(data_dir, exist_ok=True)
    X_all = []
    y_all = []

    for rec in RECORDS:
        print(f'Processing record {rec}...')
        try:
            try:
                record = wfdb.rdrecord(str(rec), pn_dir='mitdb', dl_dir=data_dir)
                annotation = wfdb.rdann(str(rec), 'atr', pn_dir='mitdb', dl_dir=data_dir)
            except TypeError:
                record = wfdb.rdrecord(str(rec), pn_dir='mitdb')
                annotation = wfdb.rdann(str(rec), 'atr', pn_dir='mitdb')
        except Exception as e:
            print(f'  -> Gagal membaca record {rec}: {e}')
            continue

        signal = record.p_signal[:, 0]
        fs = record.fs

        labels = [map_to_aami(sym) for sym in annotation.symbol]
        beats, valid_idx = segment_beats(signal, annotation.sample, fs=fs)

        if len(beats) == 0:
            print(f'  -> Tidak ada detak yang tervalidasi di record {rec}')
            continue

        labels_filtered = [labels[annotation.sample.tolist().index(i)] for i in valid_idx]
        X_all.append(beats)
        y_all.extend(labels_filtered)
        print(f'  -> {len(beats)} detak berhasil diekstrak')

    if len(X_all) == 0:
        raise RuntimeError("Tidak ada data yang berhasil diproses. Periksa koneksi internet atau dataset.")

    X = np.vstack(X_all)
    y = np.array(y_all)

    # Normalisasi per detak (z-score)
    X_norm = (X - X.mean(axis=1, keepdims=True)) / (X.std(axis=1, keepdims=True) + 1e-8)

    np.save(os.path.join(save_dir, 'X.npy'), X_norm)
    np.save(os.path.join(save_dir, 'y.npy'), y)

    print(f'\nTotal detak: {len(y)}')
    print('Distribusi kelas:')
    classes = ['N (Normal)', 'S (SVEB)', 'V (VEB)', 'F (Fusion)', 'Q (Unknown)']
    for i, name in enumerate(classes):
        count = np.sum(y == i)
        print(f'  {name}: {count}')

if __name__ == '__main__':
    download_and_preprocess()