const planetaryRulers = {
    0: ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'],
    1: ['Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun'],
    2: ['Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon'],
    3: ['Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon', 'Mars'],
    4: ['Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon', 'Mars', 'Mercury'],
    5: ['Venus', 'Saturn', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter'],
    6: ['Saturn', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus']
};

function calculatePeriod() {
    const period = document.getElementById('timePeriod').value;
    const sunriseInput = document.getElementById('sunrise').value;
    const sunsetInput = document.getElementById('sunset').value;
    const resultsContainer = document.getElementById('results');
    
    if (!sunriseInput || !sunsetInput) {
        alert('Please enter both sunrise and sunset times');
        return;
    }

    resultsContainer.innerHTML = ''; // Clear previous results

    switch(period) {
        case 'hour':
            displayHourResult(calculateCurrentHour(sunriseInput, sunsetInput));
            break;
        case 'week':
            displayWeekResult(calculateWeek(sunriseInput, sunsetInput));
            break;
        case 'year':
            displayYearResult(calculateYear(sunriseInput, sunsetInput));
            break;
    }
}

function calculateCurrentHour(sunrise, sunset) {
    const now = new Date();
    const sunriseTime = new Date(now.toDateString() + ' ' + sunrise);
    const sunsetTime = new Date(now.toDateString() + ' ' + sunset);
    
    // Your existing hour calculation logic
    return {
        time: now,
        planet: getPlanetaryRuler(now, sunriseTime, sunsetTime),
        isDay: isInDaylight(now, sunriseTime, sunsetTime)
    };
}

function calculateWeek(sunrise, sunset) {
    const weekResults = [];
    const today = new Date();
    
    for(let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        weekResults.push({
            date: date,
            hours: calculateDayHours(date, sunrise, sunset)
        });
    }
    return weekResults;
}

function calculateYear(sunrise, sunset) {
    const yearResults = [];
    const today = new Date();
    
    for(let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        yearResults.push({
            date: date,
            summary: calculateDaySummary(date, sunrise, sunset)
        });
    }
    return yearResults;
}

// Display functions for different periods
function displayHourResult(result) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <div class="current-hour">
            <h3>Current Planetary Hour</h3>
            <p>Planet: ${result.planet}</p>
            <p>Phase: ${result.isDay ? 'Day' : 'Night'}</p>
            <p>Time: ${result.time.toLocaleTimeString()}</p>
        </div>
    `;
}

function displayWeekResult(results) {
    const resultsContainer = document.getElementById('results');
    let html = '<div class="week-view">';
    
    results.forEach(day => {
        html += `
            <div class="day-card">
                <h3>${day.date.toLocaleDateString()}</h3>
                <div class="hours-grid">
                    ${day.hours.map(hour => `
                        <div class="hour-cell">
                            <span>${hour.time}</span>
                            <span>${hour.planet}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    resultsContainer.innerHTML = html;
}

function displayYearResult(results) {
    const resultsContainer = document.getElementById('results');
    let html = '<div class="year-view">';
    
    results.forEach(day => {
        html += `
            <div class="date-card">
                <h4>${day.date.toLocaleDateString()}</h4>
                <p>Ruling Planet: ${day.summary.rulingPlanet}</p>
            </div>
        `;
    });
    
    html += '</div>';
    resultsContainer.innerHTML = html;
}
