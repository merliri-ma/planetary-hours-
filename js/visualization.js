import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class PlanetaryVisualizer {
    constructor(container) {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.renderer = new THREE.WebGLRenderer()
        
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        container.appendChild(this.renderer.domElement)
        
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.camera.position.z = 5
    }

    createPlanet(name, color, size) {
        const geometry = new THREE.SphereGeometry(size, 32, 32)
        const material = new THREE.MeshStandardMaterial({ color })
        const planet = new THREE.Mesh(geometry, material)
        this.scene.add(planet)
        return planet
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.controls.update()
        this.renderer.render(this.scene, this.camera)
    }
}
