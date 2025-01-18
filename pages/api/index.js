import { Canvas } from '@react-three/fiber'
import PlanetModel from '../components/PlanetModel'

export default function Home() {
  return (
    <Canvas>
      <PlanetModel planetName="sun" />
      <PlanetModel planetName="moon" />
    </Canvas>
  )
}

