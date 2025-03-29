import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

// Create a 3D scene for the homepage
export function createHomeScene(containerId) {
  // Setup
  const container = document.getElementById(containerId)
  if (!container) return

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf8fafc)

  // Camera
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
  camera.position.z = 5

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.enableZoom = false

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  // College logo geometry
  const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
  const material = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    metalness: 0.3,
    roughness: 0.4,
  })
  const torusKnot = new THREE.Mesh(geometry, material)
  scene.add(torusKnot)

  // Small particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 500
  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x8b5cf6,
  })

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  // Animation
  function animate() {
    requestAnimationFrame(animate)

    torusKnot.rotation.x += 0.01
    torusKnot.rotation.y += 0.01

    particlesMesh.rotation.x += 0.001
    particlesMesh.rotation.y += 0.001

    controls.update()
    renderer.render(scene, camera)
  }

  // Handle resize
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  })

  animate()
}

