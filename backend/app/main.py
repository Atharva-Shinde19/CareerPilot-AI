from fastapi import FastAPI

from app.database.database import engine, Base
import app.models

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CareerPilot AI"
)


@app.get("/")
def root():
    return {
        "message": "CareerPilot Backend Running"
    }