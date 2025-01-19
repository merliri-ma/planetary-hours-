const PLANETARY_ORDER = [
    "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"
];

function parseTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return new Date(0, 0, 0, hours, minutes);
}

function adjustForPastMidnight(sunsetTime, sunriseTime) {
    if (sunsetTime < sunriseTime) {
        sunsetTime.setDate(sunsetTime.getDate() + 1);
    }
    return sunsetTime;
}

function calculatePlanetaryHours(sunrise, sunset, dayOfWeek) {
    const sunriseTime = parseTime(sunrise);
    const sunsetTime = parseTime(sunset);
    const adjustedSunsetTime = adjustForPastMidnight(sunsetTime, sunriseTime);

    const dayLength = (adjustedSunsetTime - sunriseTime) / (1000 * 60); // in minutes
    const nextDaySunriseTime = new Date(sunriseTime);
    nextDaySunriseTime.setDate(nextDaySunriseTime.getDate() + 1);
    const nightLength = (nextDaySunriseTime - adjustedSunsetTime) / (1000 * 60); // in minutes

    const dayPlanetaryHourLength = dayLength / 12;
    const nightPlanetaryHourLength = nightLength / 12;
    const startPlanetIndex = (dayOfWeek + 6) % 7;

    const planetaryHours = [];
    let currentTime = new Date(sunriseTime);

    for (let i = 0; i < 12; i++) {
        const planet = PLANETARY_ORDER[(startPlanetIndex + i) % 7];
        planetaryHours.push({ time: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), planet });
        currentTime.setMinutes(currentTime.getMinutes() + dayPlanetaryHourLength);
    }

    currentTime = new Date(adjustedSunsetTime);

    for (let i = 0; i < 12; i++) {
        const planet = PLANETARY_ORDER[(startPlanetIndex + 12 + i) % 7];
        planetaryHours.push({ time: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), planet });
        currentTime.setMinutes(currentTime.getMinutes() + nightPlanetaryHourLength);
    }

    return planetaryHours;
}

// Example usage
const sunrise = "06:00"; // Example sunrise time
const sunset = "18:00"; // Example sunset time
const dayOfWeek = new Date().getDay(); // Current day of the week

const planetaryHours = calculatePlanetaryHours(sunrise, sunset, dayOfWeek);
console.log(planetaryHours);
