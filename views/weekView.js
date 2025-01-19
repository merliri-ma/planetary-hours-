function displayWeekView(weekData) {
    document.getElementById('result').innerHTML = `
        <div class="week-display">
            <h2>Weekly Planetary Hours</h2>
            <div class="week-grid">
                ${weekData.map(day => `
                    <div class="day-column">
                        <h3>${day.date.toLocaleDateString('en-US', {weekday: 'long'})}</h3>
                        ${day.hours.map(hour => `
                            <div class="hour-row">
                                <span>Hour ${hour.number}</span>
                                <span>${hour.planet}</span>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

