document.addEventListener('DOMContentLoaded', function() {
    const resultDiv = document.getElementById('result');
    
    // Get current date and time
    const now = new Date();
    
    // Display basic information
    resultDiv.innerHTML = `
        <p>Current time: ${now.toLocaleTimeString()}</p>
        <p>Current date: ${now.toLocaleDateString()}</p>
    `;
});
