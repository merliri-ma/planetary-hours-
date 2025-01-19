function displayHourResult(result) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <div class="current-hour">
            <h2>Single Hour View</h2>
            <div class="hour-card">
                <img src="images/icons/${result.planet.toLowerCase()}.png" alt="${result.planet}">
                <h3>${result.planet}</h3>
                <div class="hour-details">
                    <p>Time: ${result.time.toLocaleTimeString()}</p>
                    <p>Phase: ${result.isDay ? '☀️ Day' : '🌙 Night'}</p>
                    <p>Hour Number: ${result.hourNumber}</p>
                </div>
            </div>
        </div>
    `;
}

function displayWeekResult(results) {
    const resultsContainer = document.getElementById('results');
    let html = `
        <div class="week-view">
            <h2>Weekly Schedule</h2>
            <div class="week-grid">
    `;
    
    results.forEach(day => {
        html += `
            <div class="day-column">
                <h3>${day.date.toLocaleDateString('en-US', {weekday: 'long'})}</h3>
                <div class="hours-list">
                    ${day.hours.map(hour => `
                        <div class="hour-block ${hour.isDay ? 'day-hour' : 'night-hour'}">
                            <img src="images/icons/${hour.planet.toLowerCase()}.png" alt="${hour.planet}">
                            <span>${hour.time}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += '</div></div>';
    resultsContainer.innerHTML = html;
}

function displayYearResult(results) {
    const resultsContainer = document.getElementById('results');
    let html = `
        <div class="year-view">
            <h2>Yearly Overview</h2>
            <div class="calendar-grid">
    `;
    
    const months = {};
    results.forEach(day => {
        const monthKey = day.date.toLocaleString('en-US', { month: 'long' });
        if (!months[monthKey]) {
            months[monthKey] = [];
        }
        months[monthKey].push(day);
    });

    Object.entries(months).forEach(([month, days]) => {
        html += `
            <div class="month-card">
                <h3>${month}</h3>
                <div class="days-grid">
                    ${days.map(day => `
                        <div class="day-cell">
                            <span class="date">${day.date.getDate()}</span>
                            <img src="images/icons/${day.summary.rulingPlanet.toLowerCase()}.png" 
                                 alt="${day.summary.rulingPlanet}">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += '</div></div>';
    resultsContainer.innerHTML = html;
}
