# Heart Guardian ML API - Quick Start

## 🚀 Run ML API in 2 seconds

```bash
# From C:\heart-guardian-ml folder
python run_server.py
```

## ✅ Expected Output
```
╔══════════════════════════════════════════════╗
║  Heart Guardian ML API Server                ║
║  Starting on http://localhost:8000           ║
╚══════════════════════════════════════════════╝

✅ Model Aritmia & Infark berhasil dimuat.
INFO:     Started server process [12345]
```

## 🧪 Test Endpoints

```bash
# Health check
curl http://localhost:8000/health

# Predict from file
curl -X POST http://localhost:8000/predict_file \
  -F "hea_file=@data/ptdb/patient001/s0010_re.hea" \
  -F "dat_file=@data/ptdb/patient001/s0010_re.dat"
```

## 📖 Full Setup Guide
See `../SETUP_ML_INTEGRATION.md` for complete demo instructions
