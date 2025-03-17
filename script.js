// GSAP Animations
gsap.from("#hero h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });

// Three.js 3D Computer Chip
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("threejs-background") });

renderer.setSize(window.innerWidth, window.innerHeight);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Create a 3D computer chip
const chipGeometry = new THREE.BoxGeometry(5, 1, 5); // Main chip body
const chipMaterial = new THREE.MeshPhongMaterial({ color: 0x00FFFF, emissive: 0x00FFFF, emissiveIntensity: 1 });
const chip = new THREE.Mesh(chipGeometry, chipMaterial);
scene.add(chip);

// Add glowing neon lines (circuit traces)
const lineGeometry = new THREE.BufferGeometry();
const points = [];
for (let i = 0; i < 100; i++) {
  points.push(new THREE.Vector3(
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 6
  ));
}
lineGeometry.setFromPoints(points);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xFF007F, linewidth: 2 });
const lines = new THREE.Line(lineGeometry, lineMaterial);
scene.add(lines);

// Position the camera
camera.position.z = 10;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the chip and lines
  chip.rotation.x += 0.01;
  chip.rotation.y += 0.01;
  lines.rotation.x += 0.01;
  lines.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();