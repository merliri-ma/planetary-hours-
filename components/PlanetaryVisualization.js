
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function PlanetaryVisualization({ data }) {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={data.planetary_hour.current_planet} />
      </mesh>
    </Canvas>
  )
}
