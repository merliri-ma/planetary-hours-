import { useState, useEffect } from 'react'

export default function Home() {
  const [planetData, setPlanetData] = useState(null)

  useEffect(() => {
    async function fetchPlanetaryData() {
      const response = await fetch('/api/planetary_hours')
      const data = await response.json()
      setPlanetData(data)
    }
    fetchPlanetaryData()
  }, [])

  return (
    <div className="planetary-container">
      {planetData ? (
        <div className="planetary-info">
          <h1>Planetary Hours Calculator</h1>
          <div className="planet-details">
            <h2>Current Planetary Hour</h2>
            <p>Planet: {planetData.planetary_hour.current_planet}</p>
            <p>Power: {planetData.planetary_hour.power}%</p>
            <div className="astronomical-data">
              <h3>Astronomical Data</h3>
              <pre>{JSON.stringify(planetData.astronomical_data, null, 2)}</pre>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">Loading planetary data...</div>
      )}
    </div>
  )
}
