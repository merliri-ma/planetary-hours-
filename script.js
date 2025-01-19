// Main calculation logic and view switching
const planetaryRulers = {
    0: ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'],
    1: ['Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun'],
    2: ['Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon'],
    3: ['Mercury', 'Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon', 'Mars'],
    4: ['Jupiter', 'Venus', 'Saturn', 'Sun', 'Moon', 'Mars', 'Mercury'],
    5: ['Venus', 'Saturn', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter'],
    6: ['Saturn', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus']
};

function calculateView() {
    const viewType = document.getElementById('viewType').value;
    const sunrise = document.getElementById('sunrise').value;
    const sunset = document.getElementById('sunset').value;
    
    switch(viewType) {
        case 'hour':
            displayHourView(calculateCurrentHour(sunrise, sunset));
            break;
        case 'week':
            displayWeekView(calculateWeeklyHours(sunrise, sunset));
            break;
        case 'year':
            displayYearView(calculateYearlyHours(sunrise, sunset));
            break;
    }
}

// Include all calculation functions shown previously
