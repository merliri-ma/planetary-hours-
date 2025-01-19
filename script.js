function calculateHours() {
    const date = document.getElementById('date').value;
    const sunrise = document.getElementById('sunrise').value;
    const sunset = document.getElementById('sunset').value;

    if (!date || !sunrise || !sunset) {
        alert('Please fill in all fields');
        return;
    }

    const sunriseTime = new Date(`${date} ${sunrise}`);
    const sunsetTime = new Date(`${date} ${sunset}`);

    const dayLength = (sunsetTime - sunriseTime) / 12;
    const nightLength = (24 * 60 * 60 * 1000 - (sunsetTime - sunriseTime)) / 12;

    const planets = ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon'];
    const dayRulers = getDayRulers(date, planets);
    
    let results = '<h2>Planetary Hours</h2>';
    results += '<h3>Day Hours</h3>';
    
    for (let i = 0; i < 12; i++) {
        const hourStart = new Date(sunriseTime.getTime() + (dayLength * i));
        results += `Hour ${i + 1}: ${dayRulers[i % 7]} - ${hourStart.toLocaleTimeString()}<br>`;
    }

    document.getElementById('results').innerHTML = results;
}

function getDayRulers(dateStr, planets) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateStr);
    const dayIndex = date.getDay();
    
    const rotatedPlanets = [...planets.slice(dayIndex), ...planets.slice(0, dayIndex)];
    return rotatedPlanets;
}

