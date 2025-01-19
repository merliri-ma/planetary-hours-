function displayWeekView(weekData) {
    return `
        <div class="week-view">
            <h2>Weekly Planetary Hours</h2>
            <div class="week-grid">
                ${weekData.map(day => `
                    <div class="day-column">
                        <h3>${day.date}</h3>
                        <div class="hours-list">
                            ${day.hours.map(hour => `
                                <div class="hour-item">
                                    <span>${hour.time}</span>
                                    <span>${hour.planet}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

