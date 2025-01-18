from fastapi import FastAPI
from datetime import datetime, timedelta
from typing import List, Dict

app = FastAPI()

PLANETARY_ORDER = [
    "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"
]

def calculate_planetary_hours(sunrise: str, sunset: str, day_of_week: int) -> Dict:
    # Convert string times to datetime objects
    sunrise_time = datetime.strptime(sunrise, "%H:%M")
    sunset_time = datetime.strptime(sunset, "%H:%M")
    
    # Calculate day and night lengths
    day_length = (sunset_time - sunrise_time).seconds / 3600
    night_length = 24 - day_length
    
    # Calculate hour lengths
    day_hour_length = day_length / 12
    night_hour_length = night_length / 12
    
    # Calculate planetary hours
    hours = []
    current_time = sunrise_time
    
    # Day hours
    for i in range(12):
        planet = PLANETARY_ORDER[(day_of_week * 24 + i) % 7]
        hour = {
            "time": current_time.strftime("%H:%M"),
            "planet": planet,
            "type": "day"
        }
        hours.append(hour)
        current_time += timedelta(hours=day_hour_length)
    
    # Night hours
    current_time = sunset_time
    for i in range(12):
        planet = PLANETARY_ORDER[(day_of_week * 24 + 12 + i) % 7]
        hour = {
            "time": current_time.strftime("%H:%M"),
            "planet": planet,
            "type": "night"
        }
        hours.append(hour)
        current_time += timedelta(hours=night_hour_length)
    
    return {
        "date_info": {
            "day_of_week": day_of_week,
            "ruling_planet": PLANETARY_ORDER[day_of_week],
        },
        "times": {
            "sunrise": sunrise,
            "sunset": sunset,
            "day_length": f"{day_length:.2f} hours",
            "night_length": f"{night_length:.2f} hours",
        },
        "hours": hours
    }

@app.get("/")
async def root():
    return {"message": "Planetary Hours Calculator"}

@app.get("/calculate")
@app.post("/calculate")
async def calculate(sunrise: str, sunset: str, day_of_week: int):
    return calculate_planetary_hours(sunrise, sunset, day_of_week)
