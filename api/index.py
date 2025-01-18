from fastapi import FastAPI
from datetime import datetime, timedelta

app = FastAPI()

PLANETARY_ORDER = [
    "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"
]

def calculate_planetary_hours(sunrise: str, sunset: str, day_of_week: int):
    return {
        "sunrise": sunrise,
        "sunset": sunset,
        "day": day_of_week,
        "planet": PLANETARY_ORDER[day_of_week]
    }

@app.get("/")
async def root():
    return {"message": "Planetary Hours Calculator"}

@app.get("/calculate")
@app.post("/calculate")
async def calculate(sunrise: str, sunset: str, day_of_week: int):
    return calculate_planetary_hours(sunrise, sunset, day_of_week)
