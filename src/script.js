import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Pane } from "tweakpane";

// initialize the pane
//const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();

//initialize the loader
const textureLoader = new THREE.TextureLoader();

// add objects to the scene
const geometry = new THREE.BoxGeometry(1, 1, 1);
const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16);
const planeGeometry = new THREE.PlaneGeometry(1, 1);
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);

// initialize the texture
const grassAlbedo = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png"
);
const grassAo = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png"
);

const grassHeight = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_height.png"
);

const grassMetallic = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_metallic.png"
);

const grassNormal = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_normal-ogl.png"
);

const grassRoughness = textureLoader.load(
"/textures/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png"
);

const material = new THREE.MeshStandardMaterial();
///material.shininess = 90
//material.side = THREE.DoubleSide;
material.map = grassAlbedo;
material.roughnessMap = grassRoughness;
material.roughness = 1;
material.metalnessMap = grassMetallic;
material.metalness = 1;
material.normalMap = grassNormal

// pane.addBinding(material, 'metalness', {
//   min: 0,
//   max: 1,
//   step: 0.01
// });

// pane.addBinding(material, 'roughness', {
//   min: 0,
//   max: 1,
//   step: 0.01
// });

// // pane.addBinding(material, 'shininess',{
// //   min: 0,
// //   max: 200,
// //   step: 1
// // });

// pane.addBinding(material, 'reflectivity', {
//   min: 0,
//   max: 1,
//   step: 0.01
// })

// pane.addBinding(material, 'clearcoat', {
//   min: 0,
//   max: 1,
//   step: 0.01
// })

// initialize a group
const group = new THREE.Group();

// initialize the mesh
const cube = new THREE.Mesh(geometry, material);

const knot = new THREE.Mesh(torusKnotGeometry, material);
knot.position.x = 1.5;

const plane = new THREE.Mesh(planeGeometry, material);
plane.position.x = -1.5;

const sphere = new THREE.Mesh();
sphere.geometry = sphereGeometry;
sphere.material = material;
sphere.position.y = 1.5;

const cylinder = new THREE.Mesh();
cylinder.geometry = cylinderGeometry;
cylinder.material = material;
cylinder.position.y = -1.5;

// add the mest to the scene
group.add(sphere, cylinder,cube, knot, plane);
scene.add(group);

// initialize the light
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 2);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);
// initialize the camera
const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

camera.position.z = 10;
// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
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

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// render the scene
const renderloop = () => {
  // group.children.forEach((child) => {
  //   if( child instanceof THREE.Mesh){
  //     child.rotation.y += 0.01;
  //   }
  // })
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
