import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "#74b3ce", wireframe: true});

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

// cubeMesh.rotation.reorder('YXZ');
// cubeMesh.rotation.y = THREE.MathUtils.degToRad(90);
// cubeMesh.rotation.x = THREE.MathUtils.degToRad(45);

scene.add(cubeMesh);

//cubeMesh.scale.set(2,2,1);
// const tempVector = new THREE.Vector3(0,1,0);
// cubeMesh.position.copy(tempVector);

//Red = X, Green = Y, Blue = Z
// cubeMesh.position.y = 2;
// cubeMesh.position.x = 2;
// cubeMesh.position.z = 2;

console.log(cubeMesh);

//const axesHelper = new THREE.AxesHelper(2);
//scene.add(axesHelper);

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
//controls.autoRotate = true;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})

//initiatilize the clock
const clock = new THREE.Clock();
let previousTime = 0;
// render the scene
const renderloop = () => {
  const currentTime = clock.getElapsedTime();
  const delta = currentTime - previousTime;
  previousTime = currentTime;


  cubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 20;
  console.log(delta)
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
