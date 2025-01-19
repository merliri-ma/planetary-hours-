// Keep your existing calculation logic and add:
function updateDisplay() {
    const viewType = document.getElementById('viewType').value;
    const currentTime = new Date();
    const result = document.getElementById('result');

    const baseInfo = `
        <div class="time-info">
            <h2>Current Information</h2>
            <p>Time: ${currentTime.toLocaleTimeString()}</p>
            <p>Date: ${currentTime.toLocaleDateString()}</p>
            <p>Sunrise: ${sunrise}</p>
            <p>Sunset: ${sunset}</p>
            <p>Day Hour Length: ${dayHourLength}</p>
            <p>Night Hour Length: ${nightHourLength}</p>
            <p>Current Planetary Hour: ${currentPlanet}</p>
        </div>
    `;

    result.innerHTML = baseInfo + getAdditionalView(viewType);
}
