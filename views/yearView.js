function displayYearView(yearData) {
    document.getElementById('result').innerHTML = `
        <div class="year-display">
            <h2>Yearly Planetary Hours</h2>
            <div class="months-grid">
                ${yearData.map(month => `
                    <div class="month-card">
                        <h3>${month.month}</h3>
                        <p>Ruling Planet: ${month.rulingPlanet}</p>
                        <div class="days-summary">
                            ${month.days.slice(0, 7).map(day => `
                                <div class="day-row">
                                    Day ${day.date}: ${day.planet}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
