import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense, Dropout, Input
from sklearn.model_selection import train_test_split
from sklearn.utils import class_weight
from sklearn.metrics import classification_report
import pickle, os

X = np.load('data/X_infarction.npy')
y = np.load('data/y_infarction.npy')

print(f'X shape: {X.shape}, y shape: {y.shape}')
print(f'Kelas: 0 (Normal) = {np.sum(y==0)}, 1 (Infark) = {np.sum(y==1)}')

X = X[..., np.newaxis]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

cw = class_weight.compute_class_weight(
    class_weight='balanced', classes=np.unique(y), y=y
)
class_weight_dict = dict(enumerate(cw))
print('Class weights:', class_weight_dict)

model = Sequential([
    Input(shape=(400, 1)),
    Conv1D(32, kernel_size=5, activation='relu'),
    MaxPooling1D(pool_size=2),
    Conv1D(64, kernel_size=5, activation='relu'),
    MaxPooling1D(pool_size=2),
    Conv1D(128, kernel_size=5, activation='relu'),
    MaxPooling1D(pool_size=2),
    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(1, activation='sigmoid')  # output biner
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.summary()

# 6. Callbacks
os.makedirs('models', exist_ok=True)
callbacks = [
    tf.keras.callbacks.EarlyStopping(patience=5, restore_best_weights=True),
    tf.keras.callbacks.ModelCheckpoint('models/ecg_infarction.keras', save_best_only=True)
]

# 7. Training
history = model.fit(
    X_train, y_train,
    validation_split=0.2,
    epochs=30,
    batch_size=32,
    class_weight=class_weight_dict,
    callbacks=callbacks,
    verbose=1
)

# 8. Evaluasi
y_pred_proba = model.predict(X_test)
y_pred = (y_pred_proba > 0.5).astype(int)
print("\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=['Normal', 'Infark']))

# Simpan history
with open('models/history_infarction.pkl', 'wb') as f:
    pickle.dump(history.history, f)

print("\nModel disimpan di models/ecg_infarction.keras")