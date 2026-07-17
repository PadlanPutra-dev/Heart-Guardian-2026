import numpy as np
import tensorflow as tf
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.model_selection import train_test_split

X = np.load('data/X.npy')
y = np.load('data/y.npy')
X = X[..., np.newaxis]

model = tf.keras.models.load_model('models/ecg_model.keras')

_, X_test, _, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

y_pred = np.argmax(model.predict(X_test), axis=1)

print("="*60)
print("CLASSIFICATION REPORT - MODEL ARITMIA (5 Kelas AAMI)")
print("="*60)
print(classification_report(y_test, y_pred, target_names=['N (Normal)', 'S (SVEB)', 'V (VEB)', 'F (Fusion)', 'Q (Unknown)']))

cm = confusion_matrix(y_test, y_pred)
classes = ['N', 'S', 'V', 'F', 'Q']

print("="*60)
print("CONFUSION MATRIX - MODEL ARITMIA")
print("="*60)
print(f"{'':>8} {'Pred N':>8} {'Pred S':>8} {'Pred V':>8} {'Pred F':>8} {'Pred Q':>8}")
for i, cls in enumerate(classes):
    print(f"{'True '+cls:>8} {cm[i,0]:8d} {cm[i,1]:8d} {cm[i,2]:8d} {cm[i,3]:8d} {cm[i,4]:8d}")

print("\nKeterangan:")
print("- Baris = label sebenarnya (True)")
print("- Kolom = prediksi model (Pred)")
print("- Angka diagonal (kiri atas ke kanan bawah) = prediksi benar")