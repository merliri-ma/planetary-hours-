const planetColors = {
    'Saturn': '#4A4A4A',
    'Jupiter': '#9B59B6',
    'Mars': '#E74C3C',
    'Sun': '#F1C40F',
    'Venus': '#2ECC71',
    'Mercury': '#3498DB',
    'Moon': '#ECF0F1'
};

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
        const planet = dayRulers[i % 7];
        results += `Hour ${i + 1}: <span class="planet-name" style="color: ${planetColors[planet]}">${planet}</span> - ${hourStart.toLocaleTimeString()}<br>`;
    }

    results += '<h3>Night Hours</h3>';
    for (let i = 0; i < 12; i++) {
        const hourStart = new Date(sunsetTime.getTime() + (nightLength * i));
        const planet = dayRulers[(i + 7) % 7];
        results += `Hour ${i + 1}: <span class="planet-name" style="color: ${planetColors[planet]}">${planet}</span> - ${hourStart.toLocaleTimeString()}<br>`;
    }

    document.getElementById('results').innerHTML = results;
}

function getDayRulers(dateStr, planets) {
    const date = new Date(dateStr);
    const dayIndex = date.getDay();
    return [...planets.slice(dayIndex), ...planets.slice(0, dayIndex)];
}
