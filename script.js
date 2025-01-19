document.getElementById('hoursForm').addEventListener('submit', calculateHours);

function calculateHours(event) {
    event.preventDefault();
    
    const date = document.getElementById('dateSelect').value;
    const sunrise = document.getElementById('sunrise').value;
    const sunset = document.getElementById('sunset').value;
    
    // Perform calculations
    const results = performCalculations(sunrise, sunset);
    
    // Display results
    displayResults(results);
    
    // Create visualization
    createHourlyChart(results);
    
    // Save to local storage
    saveCalculation(date, sunrise, sunset, results);
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            const times = await getSunriseSunsetTimes(latitude, longitude, new Date());
            
            document.getElementById('sunrise').value = times.sunrise;
            document.getElementById('sunset').value = times.sunset;
        });
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Add other functions as needed
