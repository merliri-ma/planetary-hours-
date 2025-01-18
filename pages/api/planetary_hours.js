
export default function handler(req, res) {
  const now = new Date()
  const planets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn']
  
  res.status(200).json({
    planetary_hour: {
      current_planet: planets[now.getHours() % planets.length],
      power: Math.round(Math.random() * 100)
    },
    astronomical_data: {
      ecliptic_longitude: Math.random() * 360,
      right_ascension: Math.random() * 24,
      declination: Math.random() * 180 - 90
    }
  })
}
