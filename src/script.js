import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const geometry = new THREE.BoxGeometry(1,1,1,2,2,2);
const planeGeometry = new THREE.PlaneGeometry(1,1);

const material = new THREE.MeshBasicMaterial({color: "#74b3ce", wireframe: false});

material.transparent = true;
material.opacity = 0.5;
material.side = THREE.DoubleSide;
material.fog = true;

const fog = new THREE.Fog(0xffffff,1,10);
scene.fog = fog;
scene.background = new THREE.Color(0xffffff);
const cubeMesh = new THREE.Mesh(geometry, material);

const mesh2 = new THREE.Mesh(geometry, material);
mesh2.position.x = 1.5;

const planeMesh = new THREE.Mesh(planeGeometry,material);
planeMesh.position.x = -1.5;

scene.add(cubeMesh);
scene.add(mesh2);
scene.add(planeMesh);

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  200);

camera.position.z = 5;

// initialize the renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})


// render the scene
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
