from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
async def root():
    return """
    <html>
        <head>
            <title>Planetary Hours Calculator</title>
        </head>
        <body>
            <h1>Planetary Hours Calculator</h1>
            <form action="/calculate" method="get">
                <input type="time" name="sunrise" required>
                <input type="time" name="sunset" required>
                <select name="day_of_week">
                    <option value="0">Sunday</option>
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednesday</option>
                    <option value="4">Thursday</option>
                    <option value="5">Friday</option>
                    <option value="6">Saturday</option>
                </select>
                <button type="submit">Calculate</button>
            </form>
        </body>
    </html>
    """

@app.get("/calculate")
async def calculate(sunrise: str, sunset: str, day_of_week: int):
    return {
        "sunrise": sunrise,
        "sunset": sunset,
        "day": day_of_week
    }
