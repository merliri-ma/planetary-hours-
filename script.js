// Add this at the top of your existing script
document.addEventListener('DOMContentLoaded', function() {
    const controls = `
        <div class="controls">
            <select id="viewType" onchange="updateDisplay()">
                <option value="current">Current Hour</option>
                <option value="week">Week View</option>
                <option value="year">Year View</option>
            </select>
        </div>
    `;
    
    document.querySelector('.calculator').insertAdjacentHTML('afterbegin', controls);
});

function updateDisplay() {
    const currentTime = new Date();
    const viewType = document.getElementById('viewType').value;
    const result = document.getElementById('result');

    const mainDisplay = `
        <div class="planetary-display">
            <div class="time-section">
                <h3>Current Time: ${currentTime.toLocaleTimeString()}</h3>
                <h3>Current Date: ${currentTime.toLocaleDateString()}</h3>
            </div>
            <div class="sun-section">
                <p>Sunrise: ${sunrise}</p>
                <p>Sunset: ${sunset}</p>
            </div>
            <div class="hour-section">
                <p>Day Hour Length: ${dayHourLength}</p>
                <p>Night Hour Length: ${nightHourLength}</p>
            </div>
            <div class="planet-section">
                <h2>Current Planetary Hour: ${currentPlanet}</h2>
            </div>
        </div>
    `;

    result.innerHTML = mainDisplay + getAdditionalView(viewType);
}
