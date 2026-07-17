import numpy as np
import tensorflow as tf
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.model_selection import train_test_split

# Load data dan model
X = np.load('data/X_infarction.npy')
y = np.load('data/y_infarction.npy')
X = X[..., np.newaxis]

model = tf.keras.models.load_model('models/ecg_infarction.keras')

_, X_test, _, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

y_pred_prob = model.predict(X_test)
y_pred = (y_pred_prob > 0.5).astype(int).flatten()

print("="*60)
print("CLASSIFICATION REPORT - MODEL INFARK MIOKARD")
print("="*60)
print(classification_report(y_test, y_pred, target_names=['Normal (Non-Infark)', 'Infark Miokard']))

cm = confusion_matrix(y_test, y_pred)
classes = ['Normal', 'Infark']

print("="*60)
print("CONFUSION MATRIX - MODEL INFARK MIOKARD")
print("="*60)
print(f"{'':>12} {'Pred Normal':>12} {'Pred Infark':>12}")
for i, cls in enumerate(classes):
    print(f"{'True '+cls:>12} {cm[i,0]:12d} {cm[i,1]:12d}")

print("\nKeterangan:")
print("- True Normal  + Pred Normal  = Normal terdeteksi benar")
print("- True Infark  + Pred Infark  = Infark terdeteksi benar (SENSITIFITAS)")
print("- True Normal  + Pred Infark  = Alarm palsu (false positive)")
print("- True Infark  + Pred Normal  = Infark terlewat (false negative)")