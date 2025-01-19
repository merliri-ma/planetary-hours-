const planetaryRulers = {
    0: ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'],
    1: ['Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun'],
    2: ['Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon'],
    3: ['Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon', 'Mars'],
    4: ['Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon', 'Mars', 'Mercury'],
    5: ['Venus', 'Saturn', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter'],
    6: ['Saturn', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus']
};

function calculateWithUserInput() {
    const sunriseInput = document.getElementById('sunrise').value;
    const sunsetInput = document.getElementById('sunset').value;
    
    if (!sunriseInput || !sunsetInput) {
        alert('Please enter both sunrise and sunset times');
        return;
    }

    const now = new Date();
    const sunrise = new Date(now.toDateString() + ' ' + sunriseInput);
    const sunset = new Date(now.toDateString() + ' ' + sunsetInput);
    
    const dayLength = sunset - sunrise;
    const nightLength = 24 * 60 * 60 * 1000 - dayLength;
    
    const dayHourLength = dayLength / 12;
    const nightHourLength = nightLength / 12;
    
    const isDay = now >= sunrise && now < sunset;
    const referenceTime = isDay ? sunrise : sunset;
    const hourLength = isDay ? dayHourLength : nightHourLength;
    
    const timeSinceReference = now - referenceTime;
    const hourIndex = Math.floor(timeSinceReference / hourLength);
    
    const dayOfWeek = now.getDay();
    const sequence = planetaryRulers[dayOfWeek];
    const hourRuler = sequence[hourIndex % 7];
    
    document.getElementById('result').textContent = `Current Planetary Hour: ${hourRuler}`;
    document.getElementById('hourNumber').textContent = `Hour Number: ${hourIndex + 1}`;
    document.getElementById('dayPhase').textContent = `Phase: ${isDay ? 'Day' : 'Night'}`;
}
