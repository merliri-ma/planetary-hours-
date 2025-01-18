from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from datetime import datetime, timedelta
import pytz

app = FastAPI()
templates = Jinja2Templates(directory="api/templates")

@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/calculate")
async def calculate(sunrise: str, sunset: str, day_of_week: int, timezone: str = "UTC"):
    tz = pytz.timezone(timezone)
    # Your existing calculation code with timezone support
    return calculate_planetary_hours(sunrise, sunset, day_of_week, tz)
