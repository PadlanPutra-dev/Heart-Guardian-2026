from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import numpy as np
import tempfile
import shutil
import os
from src.predict import predict_signal, load_models

app = FastAPI(title="Heart Guardian - ML Detection System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    load_models()
    print("✅ Model Aritmia & Infark berhasil dimuat.")

class SignalInput(BaseModel):
    signal: List[float]
    fs: int = 360

class BeatResult(BaseModel):
    position: int
    arrhythmia_label: int
    arrhythmia_class: str
    infarction_prob: float

class EmergencyDetail(BaseModel):
    veb_count: int
    veb_per_minute: float
    couplet: bool
    run_vt: bool
    infarction_detected: bool
    max_infarction_prob: float

class PredictResponse(BaseModel):
    beats: List[BeatResult]
    emergency_level: int
    message: str
    detail: EmergencyDetail

# ---------- Endpoint raw signal ----------
@app.post("/predict", response_model=PredictResponse)
async def predict(input_data: SignalInput):
    if len(input_data.signal) < int(input_data.fs * 0.4):
        raise HTTPException(status_code=400, detail="Sinyal terlalu pendek.")
    signal = np.array(input_data.signal)
    beats, level, message, detail = predict_signal(signal, fs=input_data.fs)

    detail_obj = EmergencyDetail(**detail)
    beat_results = [BeatResult(
        position=b['position'],
        arrhythmia_label=b['arrhythmia_label'],
        arrhythmia_class=b['arrhythmia_class'],
        infarction_prob=b['infarction_prob']
    ) for b in beats]

    return PredictResponse(
        beats=beat_results,
        emergency_level=level,
        message=message,
        detail=detail_obj
    )

@app.post("/predict_file", response_model=PredictResponse)
async def predict_file(
    hea_file: UploadFile = File(...),
    dat_file: UploadFile = File(...),
    fs: Optional[int] = None
):
    with tempfile.TemporaryDirectory() as tmpdir:
        hea_path = os.path.join(tmpdir, hea_file.filename)
        dat_path = os.path.join(tmpdir, dat_file.filename)

        with open(hea_path, "wb") as f:
            shutil.copyfileobj(hea_file.file, f)
        with open(dat_path, "wb") as f:
            shutil.copyfileobj(dat_file.file, f)

        try:
            with open(hea_path, 'r') as f:
                lines = f.readlines()
            first = lines[0].split()
            nleads = int(first[1])
            rec_fs = int(first[2])
            nsamp = int(first[3]) if len(first) > 3 else 0

            lead_idx = 1 if nleads > 1 else 0

            raw = np.fromfile(dat_path, dtype=np.int16)
            raw = raw.reshape(-1, nleads)[:nsamp, :]
            signal = raw[:, lead_idx].tolist()

        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Gagal membaca file: {e}")

        if fs is None:
            fs = rec_fs

        beats, level, message, detail = predict_signal(np.array(signal), fs=fs)

        detail_obj = EmergencyDetail(**detail)
        beat_results = [BeatResult(
            position=b['position'],
            arrhythmia_label=b['arrhythmia_label'],
            arrhythmia_class=b['arrhythmia_class'],
            infarction_prob=b['infarction_prob']
        ) for b in beats]

        return PredictResponse(
            beats=beat_results,
            emergency_level=level,
            message=message,
            detail=detail_obj
        )

@app.get("/health")
async def health():
    return {"status": "ok", "models": ["arrhythmia", "infarction"]}