document.addEventListener('DOMContentLoaded', function() {
    const resultDiv = document.getElementById('result');

    // Prompt user for time period
    const timePeriod = prompt("Calculate planetary hours for:\n1. Day\n2. Week\n3. Year\nEnter 1, 2, or 3:");

    if (timePeriod === "1") {
        // Calculate for a single day
        calculateForDay();
    } else if (timePeriod === "2") {
        // Calculate for a week
        calculateForWeek();
    } else if (timePeriod === "3") {
        // Calculate for a year
        calculateForYear();
    } else {
        resultDiv.innerHTML = "<p>Invalid choice.</p>";
    }

    function calculateForDay() {
        // Prompt user for sunrise and sunset times
        const sunriseInput = prompt("Enter sunrise time (HH:MM, 24-hour format):");
        const sunsetInput = prompt("Enter sunset time (HH:MM, 24-hour format):");

        // Parse user input
        const [sunriseHours, sunriseMinutes] = sunriseInput.split(':').map(Number);
        const [sunsetHours, sunsetMinutes] = sunsetInput.split(':').map(Number);

        const now = new Date();
        const latitude = 40.7128; // Example latitude (New York City)
        const longitude = -74.0060; // Example longitude (New York City)

        // Create Date objects for sunrise and sunset
        const sunrise = new Date(now.getFullYear(), now.getMonth(), now.getDate(), sunriseHours, sunriseMinutes);
        const sunset = new Date(now.getFullYear(), now.getMonth(), now.getDate(), sunsetHours, sunsetMinutes);

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

        // Determine if it's day or night
        let isDay = now >= sunrise && now < nextDaySunrise;

        // Calculate current planetary hour
        let currentHour;
        let currentHourNumber;
        let currentPlanet;
        const planets = ["Saturn", "Jupiter", "Mars", "Sun", "Venus", "Mercury", "Moon"];

        if (isDay) {
            currentHour = (now.getTime() - sunrise.getTime()) % dayLength;
            currentHourNumber = Math.floor(currentHour / dayHourLength);
            currentPlanet = planets[(currentHourNumber + getDayStartingPlanet(now.getDay())) % 7];
        } else {
            // It's night, so calculate from the previous sunset
            const previousDay = new Date(now);
            previousDay.setDate(now.getDate() - 1);
            const previousDaySunTimes = SunCalc.getTimes(previousDay, latitude, longitude);
            const previousDaySunset = previousDaySunTimes.sunset;

            if (now < sunrise) {
                // Calculate night hour from previous sunset to current time
                currentHour = (now.getTime() - previousDaySunset.getTime() + nightLength) % nightLength;
                currentHourNumber = Math.floor(currentHour / nightHourLength);
                currentPlanet = planets[(currentHourNumber + getNightStartingPlanet(previousDay.getDay())) % 7];
            } else {
                // Calculate night hour from current sunset to current time
                currentHour = (now.getTime() - sunset.getTime() + nightLength) % nightLength;
                currentHourNumber = Math.floor(currentHour / nightHourLength);
                currentPlanet = planets[(currentHourNumber + getNightStartingPlanet(now.getDay())) % 7];
            }
        }

        function getDayStartingPlanet(dayOfWeek) {
            const dayPlanets = [3, 4, 5, 6, 0, 1, 2];
            return dayPlanets[dayOfWeek];
        }

        function getNightStartingPlanet(dayOfWeek) {
            const nightPlanets = [4, 5, 6, 0, 1, 2, 3];
            return nightPlanets[dayOfWeek];
        }

        console.log("Current Time:", now);
        console.log("Sunrise:", sunrise);
        console.log("Sunset:", sunset);
        console.log("Is Day:", isDay);
        console.log("Current Hour:", currentHour);
        console.log("Current Hour Number:", currentHourNumber);
        console.log("Current Planet:", currentPlanet);
        console.log("Day Hour Length:", dayHourLength);
        console.log("Night Hour Length:", nightHourLength);

        resultDiv.innerHTML = `
            <p>Current time: ${now.toLocaleTimeString()}</p>
            <p>Current date: ${now.toLocaleDateString()}</p>
            <p>Sunrise: ${sunrise.toLocaleTimeString()}</p>
            <p>Sunset: ${sunset.toLocaleTimeString()}</p>
            <p>Day Hour Length: ${formatTime(dayHourLength)}</p>
            <p>Night Hour Length: ${formatTime(nightHourLength)}</p>
            <p>Current Planetary Hour: ${currentPlanet}</p>
        `;

        function formatTime(milliseconds) {
            const totalSeconds = Math.floor(milliseconds / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    function calculateForWeek() {
        resultDiv.innerHTML = "<p>Week calculation is not yet implemented.</p>";
    }

    function calculateForYear() {
        resultDiv.innerHTML = "<p>Year calculation is not yet implemented.</p>";
    }
});
