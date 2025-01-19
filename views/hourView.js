function displayHourView(result) {
    return `
        <div class="hour-view">
            <h2>Current Planetary Hour</h2>
            <div class="current-hour-display">
                <div class="time-info">
                    <p>Current Time: ${result.time}</p>
                    <p>Phase: ${result.isDay ? 'Day' : 'Night'}</p>
                </div>
                <div class="planet-info">
                    <h3>${result.planet}</h3>
                    <p>Hour Number: ${result.hourNumber}</p>
                </div>
            </div>
        </div>
    `;
}
