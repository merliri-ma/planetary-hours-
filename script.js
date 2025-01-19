const planetaryRulers = {
    0: ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'],
    1: ['Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun'],
    2: ['Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon'],
    3: ['Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon', 'Mars'],
    4: ['Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon', 'Mars', 'Mercury'],
    5: ['Venus', 'Saturn', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter'],
    6: ['Saturn', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus']
};

function calculatePlanetaryHour(date) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        const times = SunCalc.getTimes(date, latitude, longitude);
        const sunrise = times.sunrise;
        const sunset = times.sunset;
        
        const dayLength = sunset - sunrise;
        const nightLength = 24 * 60 * 60 * 1000 - dayLength;
        
        const dayHourLength = dayLength / 12;
        const nightHourLength = nightLength / 12;
        
        const isDay = date >= sunrise && date < sunset;
        const referenceTime = isDay ? sunrise : sunset;
        const hourLength = isDay ? dayHourLength : nightHourLength;
        
        const timeSinceReference = date - referenceTime;
        const hourIndex = Math.floor(timeSinceReference / hourLength);
        
        const dayOfWeek = date.getDay();
        const sequence = planetaryRulers[dayOfWeek];
        const hourRuler = sequence[hourIndex % 7];
        
        document.getElementById('result').textContent = `Current Planetary Hour: ${hourRuler}`;
        document.getElementById('hourNumber').textContent = `Hour Number: ${hourIndex + 1}`;
        document.getElementById('dayPhase').textContent = `Phase: ${isDay ? 'Day' : 'Night'}`;
    });
}

// Update every minute
setInterval(() => {
    calculatePlanetaryHour(new Date());
}, 60000);

// Initial calculation
calculatePlanetaryHour(new Date());
