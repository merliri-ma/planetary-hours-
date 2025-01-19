function displayHourView(result) {
    document.getElementById('result').innerHTML = `
        <div class="hour-display">
            <h2>Current Planetary Hour</h2>
            <div class="planet-info">
                <h3>${result.planet}</h3>
                <p>Time: ${new Date().toLocaleTimeString()}</p>
                <p>Phase: ${result.isDay ? 'Day' : 'Night'}</p>
                <p>Hour Number: ${result.hourNumber}</p>
            </div>
        </div>
    `;
}
