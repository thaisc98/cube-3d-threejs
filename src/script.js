import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Pane } from 'tweakpane';

const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const geometry = new THREE.BoxGeometry(1,1,1);
const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5,0.15,100,16);
const planeGeometry = new THREE.PlaneGeometry(1,1);

const material = new THREE.MeshPhysicalMaterial();
material.shininess = 90
material.side = THREE.DoubleSide;
material.color = new THREE.Color('green'); //#74b3ce

pane.addBinding(material, 'metalness', {
  min: 0,
  max: 1,
  step: 0.01
});

pane.addBinding(material, 'roughness', {
  min: 0,
  max: 1,
  step: 0.01
});

pane.addBinding(material, 'shininess',{
  min: 0,
  max: 200,
  step: 1
});

pane.addBinding(material, 'reflectivity', {
  min: 0,
  max: 1,
  step: 0.01
})

pane.addBinding(material, 'clearcoat', {
  min: 0,
  max: 1,
  step: 0.01
})

const cubeMesh = new THREE.Mesh(geometry, material);

const mesh2 = new THREE.Mesh(torusKnotGeometry, material);
mesh2.position.x = 1.5;

const planeMesh = new THREE.Mesh(planeGeometry,material);
planeMesh.position.x = -1.5;

scene.add(cubeMesh);
scene.add(mesh2);
scene.add(planeMesh);

// initialize the light
const light = new THREE.AmbientLight(0xffffff,1);
scene.add(light); 

const pointLight = new THREE.PointLight(0xffffff,10)
pointLight.position.set(5,5,5);
scene.add(pointLight);
// initialize the camera
const camera = new THREE.PerspectiveCamera(
  50, 
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


// render the scene
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
