document.addEventListener('DOMContentLoaded', function() {
    const resultDiv = document.getElementById('result');
    const now = new Date();
    const latitude = 40.7128; // Example latitude (New York City)
    const longitude = -74.0060; // Example longitude (New York City)

    const sunTimes = SunCalc.getTimes(now, latitude, longitude);
    const sunrise = sunTimes.sunrise;
    const sunset = sunTimes.sunset;

    // Calculate day length in milliseconds
    const dayLength = sunset.getTime() - sunrise.getTime();
    // Calculate night length in milliseconds
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
    const nextDaySunTimes = SunCalc.getTimes(nextDay, latitude, longitude);
    const nextDaySunrise = nextDaySunTimes.sunrise;
    const nightLength = nextDaySunrise.getTime() - sunset.getTime();

    // Calculate day hour length in milliseconds
    const dayHourLength = dayLength / 12;
    // Calculate night hour length in milliseconds
    const nightHourLength = nightLength / 12;

    resultDiv.innerHTML = `
        <p>Current time: ${now.toLocaleTimeString()}</p>
        <p>Current date: ${now.toLocaleDateString()}</p>
        <p>Sunrise: ${sunrise.toLocaleTimeString()}</p>
        <p>Sunset: ${sunset.toLocaleTimeString()}</p>
        <p>Day Hour Length: ${formatTime(dayHourLength)}</p>
        <p>Night Hour Length: ${formatTime(nightHourLength)}</p>
    `;

    function formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
});
