from fastapi import FastAPI

app = FastAPI(
    title="CareerPilot AI API",
    version="1.0.0",
    description="Backend API for CareerPilot AI"
)

@app.get("/")
def root():
    return {
        "message": "CareerPilot AI Backend Running 🚀"
    }