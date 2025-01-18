import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function PlanetModel({ planetName }) {
  const gltf = useLoader(GLTFLoader, `/3d/planets/${planetName}.glb`)
  
  return <primitive object={gltf.scene} />
}
