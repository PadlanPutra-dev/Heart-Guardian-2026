#!/usr/bin/env python3
"""
Heart Guardian ML API Server
Runs FastAPI server with ECG prediction models
"""
import uvicorn
import sys

if __name__ == "__main__":
    port = 8000
    print(f"""
    ╔══════════════════════════════════════════════╗
    ║  Heart Guardian ML API Server                ║
    ║  Starting on http://localhost:{port}         ║
    ╚══════════════════════════════════════════════╝
    """)
    
    uvicorn.run(
        "api:app",
        host="0.0.0.0",
        port=port,
        reload=True,
        log_level="info"
    )
