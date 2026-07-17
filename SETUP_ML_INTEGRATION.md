# Heart Guardian ML Integration - Setup Guide

## 🎯 Quick Start (5 minutes)

### Prerequisites
- Node.js 16+ (backend)
- Python 3.8+ (ML API)
- PostgreSQL 12+ (database)

---

## 📋 Step 1: Setup Database

### Option A: PostgreSQL (Recommended)

```bash
# Create database
createdb heart_guardian

# Or with psql:
psql -U postgres -c "CREATE DATABASE heart_guardian;"
```

### Option B: .env Configuration
Create `.env` file in backend folder:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=heart_guardian
DB_USER=postgres
DB_PASSWORD=your_password
ML_API_URL=http://localhost:8000
PORT=5000
```

---

## 🚀 Step 2: Setup & Run ML API

### Terminal 1 - ML Server

```bash
# Navigate to ML project
cd C:\heart-guardian-ml

# Install dependencies (if not done)
pip install -r requirements.txt

# Run ML API server on port 8000
python run_server.py
```

**Expected Output:**
```
╔══════════════════════════════════════════════╗
║  Heart Guardian ML API Server                ║
║  Starting on http://localhost:8000           ║
╚══════════════════════════════════════════════╝

INFO:     Started server process [12345]
INFO:     Uvicorn running on http://0.0.0.0:8000
✅ Model Aritmia & Infark berhasil dimuat.
```

Test health check:
```bash
curl http://localhost:8000/health
# Should return: {"status":"ok","models":["arrhythmia","infarction"]}
```

---

## 🔌 Step 3: Setup & Run Backend

### Terminal 2 - Backend Server

```bash
# Navigate to backend
cd C:\Heart-Guardian-2026\backend

# Install dependencies
npm install

# Run backend on port 5000
npm run dev
```

**Expected Output:**
```
✅ Database initialized with ECG tables
Server running on port 5000
```

---

## 🎨 Step 4: Setup & Run Frontend

### Terminal 3 - Frontend Server

```bash
# Navigate to frontend
cd C:\Heart-Guardian-2026\frontend

# Start frontend dev server on port 3000
npm run dev
# Or if there's a server.js:
node server.js
```

---

## ✅ Verification Checklist

- [ ] ML API running on http://localhost:8000 
- [ ] Backend API running on http://localhost:5000
- [ ] Frontend running on http://localhost:3000
- [ ] Database tables created successfully
- [ ] No console errors in any terminal

---

## 🧪 Demo Flow

### 1. Patient ECG Upload (Role: Patient)

1. Open http://localhost:3000
2. Login as patient or register
3. Go to **Monitoring** tab
4. Scroll to **ECG Analysis** section
5. Upload `.hea` and `.dat` files (from `C:\heart-guardian-ml\data\ptdb\patient001\`)
6. Click **Analyze ECG**
7. View results:
   - Beats detected
   - Arrhythmia type
   - Infarction risk percentage
   - AI message

### 2. Doctor Dashboard (Role: Doctor)

1. Login as doctor
2. Go to **Patients** list
3. Click on a patient to see **Patient Details**
4. Scroll to **Latest ECG Analysis** section
5. See ML prediction results:
   - Arrhythmia type (Normal Sinus, VEB, PAC, etc.)
   - Infarction risk with progress bar
   - Last analyzed timestamp

### 3. Backend Prediction Endpoint (Direct API)

Test via curl or Postman:

```bash
# Test ML API directly
curl -X POST http://localhost:8000/predict \
  -H "Content-Type: application/json" \
  -d '{
    "signal": [100, 105, 110, 115, 120, ...],
    "fs": 360
  }'

# Test backend bridge endpoint
curl -X POST http://localhost:5000/api/predict/1 \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "signal": [100, 105, 110, 115, 120, ...],
    "fs": 360
  }'

# Upload ECG files
curl -X POST http://localhost:5000/api/predict-file/1 \
  -H "Authorization: Bearer <token>" \
  -F "heaFile=@patient001/s0010_re.hea" \
  -F "datFile=@patient001/s0010_re.dat"
```

---

## 📁 Sample ECG Files

Located in: `C:\heart-guardian-ml\data\ptdb\`

For testing upload:
- `patient001/s0010_re.hea`
- `patient001/s0010_re.dat`

Or:
- `patient002/s0015lre.hea`
- `patient002/s0015lre.dat`

---

## 🔍 API Endpoints

### ML API (Port 8000)
```
POST   /predict              - Raw signal prediction
POST   /predict_file         - File upload prediction
GET    /health               - Health check
```

### Backend Prediction API (Port 5000)
```
POST   /api/predict/:patientId              - Signal prediction (requires auth)
POST   /api/predict-file/:patientId         - File prediction (requires auth)
GET    /api/predictions/:patientId          - Get history
GET    /api/predictions/:patientId/latest   - Get latest prediction
GET    /api/alerts/:patientId               - Get emergency alerts
GET    /api/ml-api/health                   - Check ML API connection
```

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Find process using port 8000
lsof -i :8000  # macOS/Linux
netstat -ano | findstr :8000  # Windows

# Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### ML API connection refused
- Ensure ML API is running on port 8000
- Check firewall settings
- Verify `.env` has correct `ML_API_URL`

### Database connection failed
- Ensure PostgreSQL is running
- Check `.env` credentials
- Verify database exists: `psql -l`

### File upload errors
- Ensure `.hea` and `.dat` files have correct format
- Check file names match
- Verify sampling rate parameter

---

## 📊 Expected Results

### Normal ECG
```json
{
  "emergency_level": 0,
  "message": "Sinyal jantung normal",
  "beats_detected": 78,
  "arrhythmia_class": "Normal",
  "infarction_prob": 0.02,
  "detail": {
    "veb_count": 0,
    "infarction_detected": false,
    "max_infarction_prob": 0.02
  }
}
```

### Abnormal ECG
```json
{
  "emergency_level": 2,
  "message": "Aritmia terdeteksi: VEB Pairs",
  "beats_detected": 75,
  "arrhythmia_class": "VEB",
  "infarction_prob": 0.45,
  "detail": {
    "veb_count": 8,
    "couplet": true,
    "infarction_detected": true,
    "max_infarction_prob": 0.45
  }
}
```

---

## 🎬 Demo Script (2 minutes)

1. **Setup Phase** (30s)
   - Show 3 terminals running (ML, Backend, Frontend)
   - Highlight "✅ Models loaded" in ML API

2. **Patient Demo** (45s)
   - Login as patient
   - Navigate to Monitoring → ECG Analysis
   - Upload sample ECG file
   - Show loading animation and results

3. **Doctor Demo** (45s)
   - Login as doctor
   - Show patient list with ML predictions
   - Click patient to see details
   - Highlight "Latest ECG Analysis" section with ML results

---

## 📝 Notes

- First ML model load takes ~5-10s, subsequent calls are fast
- All signals are normalized internally
- Infarction probability is percentage (0-100%)
- Emergency levels: 0=Normal, 1=Warning, 2=Danger, 3=Critical

---

## 🚦 Next Steps

1. ✅ Database: Done
2. ✅ ML API: Done  
3. ✅ Backend: Done
4. ✅ Frontend: Done
5. TODO: Deploy to production
6. TODO: Add real-time websocket updates
7. TODO: Integrate wearable device APIs

---

**For questions or issues, check terminal logs and verify all 3 services are running!** 🚀
