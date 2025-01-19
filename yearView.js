function displayYearView(yearData) {
    return `
        <div class="year-view">
            <h2>Yearly Planetary Hours</h2>
            <div class="months-grid">
                ${yearData.map(month => `
                    <div class="month-card">
                        <h3>${month.name}</h3>
                        <div class="days-grid">
                            ${month.days.map(day => `
                                <div class="day-cell">
                                    <span>${day.date}</span>
                                    <span>${day.planet}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

