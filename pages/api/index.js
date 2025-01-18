import { useState, useEffect } from 'react'
import PlanetaryVisualization from '../components/PlanetaryVisualization'

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
      {planetData && <PlanetaryVisualization data={planetData} />}
    </div>
  )
}
