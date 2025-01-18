import { calculate_planetary_hours } from '../../api/planetary_hours.py'

export default function handler(req, res) {
  const planetaryData = calculate_planetary_hours()
  res.status(200).json(planetaryData)
}
