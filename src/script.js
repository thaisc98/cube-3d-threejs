import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Pane } from "tweakpane";

// initialize the pane
const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();

//initialize the 
const textureLoader = new THREE.TextureLoader();

// add objects to the scene
const geometry = new THREE.BoxGeometry(1, 1, 1);
const uv2Geometry = new THREE.BufferAttribute(geometry.attributes.uv.array,2);
geometry.setAttribute('uv2', uv2Geometry);

const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const uv2SphereGeometry = new THREE.BufferAttribute(sphereGeometry.attributes.uv.array,2);
sphereGeometry.setAttribute('uv2', uv2SphereGeometry);

// initialize the texture grass
const grassAlbedo = textureLoader.load("/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png");
const grassAo = textureLoader.load("/textures/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png");
const grassHeight = textureLoader.load("/textures/whispy-grass-meadow-bl/wispy-grass-meadow_height.png");
const grassMetallic = textureLoader.load("/textures/whispy-grass-meadow-bl/wispy-grass-meadow_metallic.png");
const grassNormal = textureLoader.load("/textures/whispy-grass-meadow-bl/wispy-grass-meadow_normal-ogl.png");
const grassRoughness = textureLoader.load("/textures/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png");

// load the carbon fiber textures
const carbonAlbedo = textureLoader.load("/textures/carbon-fiber-bl/carbon-fiber_albedo.png");
const carbonAo = textureLoader.load("textures/carbon-fiber-bl/carbon-fiber_ao.png");
const carbonHeight = textureLoader.load("textures/carbon-fiber-bl/carbon-fiber_height.png");
const carbonMetallic = textureLoader.load("textures/carbon-fiber-bl/carbon-fiber_metallic.png");
const carbonNormal = textureLoader.load("textures/carbon-fiber-bl/carbon-fiber_normal-ogl.png");
const carbonRoughness = textureLoader.load("textures/carbon-fiber-bl/carbon-fiber_roughness.png");

// load the metal container
const metalContainerAlbedo = textureLoader.load("/textures/metal-shipping-container-bl/metal-shipping-container_albedo.png");
const metalContainerAo = textureLoader.load("/textures/metal-shipping-container-bl/metal-shipping-container_ao.png");
const metalContainerHeight = textureLoader.load("/textures/metal-shipping-container-bl/metal-shipping-container_height.png");
const metalContainerMetallic = textureLoader.load("/textures/metal-shipping-container-bl/metal-shipping-container_metallic.png");
const metalContainerNormal = textureLoader.load("/textures/metal-shipping-container-bl/metal-shipping-container_normal-ogl.png");
const metalContainerRoughness = textureLoader.load("/textures/metal-shipping-container-bl/metal-shipping-container_roughness.png");

//load the space cruiser 
const spaceCruiserAlbedo = textureLoader.load("/textures/space-cruiser-panels2-bl/space-cruiser-panels2_albedo.png");
const spaceCruiserAo = textureLoader.load("/textures/space-cruiser-panels2-bl/space-cruiser-panels2_ao.png");
const spaceCruiserHeight = textureLoader.load("//textures/space-cruiser-panels2-bl/space-cruiser-panels2_height.png");
const spaceCruiserMetallic = textureLoader.load("/textures/space-cruiser-panels2-bl/space-cruiser-panels2_metallic.png");
const spaceCruiserNormal = textureLoader.load("/textures/space-cruiser-panels2-bl/space-cruiser-panels2_normal-ogl.png");
const spaceCruiserRoughness = textureLoader.load("/textures/space-cruiser-panels2-bl/space-cruiser-panels2_roughness.png");


const grassPane = pane.addFolder({
  title: 'Grass Meadow Material',
  expanded: true
})

const materialGrass = new THREE.MeshStandardMaterial();
materialGrass.map = grassAlbedo;
materialGrass.roughnessMap = grassRoughness;
materialGrass.roughness = 1;
materialGrass.metalnessMap = grassMetallic;
materialGrass.metalness = 1;
materialGrass.normalMap = grassNormal;
materialGrass.displacementMap = grassHeight;
materialGrass.displacementScale = 0.0;
materialGrass.aoMap = grassAo;
materialGrass.aoMapIntensity = 0.3;

grassPane.addBinding(materialGrass, 'metalness', { min: 0, max: 1, step: 0.01 });
grassPane.addBinding(materialGrass, 'roughness', { min: 0, max: 1, step: 0.01 });
grassPane.addBinding(materialGrass, 'displacementScale', { min: 0, max: 1, step: 0.01 });
grassPane.addBinding(materialGrass, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 });

const carbonPane = pane.addFolder({
  title: 'Carbon Fiber Material',
  expanded: true
})

const materialCarbon = new THREE.MeshStandardMaterial();
materialCarbon.map = carbonAlbedo;
materialCarbon.roughnessMap = carbonRoughness;
materialCarbon.metalnessMap = carbonMetallic;
materialCarbon.normalMap = carbonNormal;
materialCarbon.displacementMap = carbonHeight;
materialCarbon.displacementScale = 0.0;
materialCarbon.aoMap = carbonAo;

carbonPane.addBinding(materialCarbon, 'metalness', { min: 0, max: 1, step: 0.01 });
carbonPane.addBinding(materialCarbon, 'roughness', { min: 0, max: 1, step: 0.01 });
carbonPane.addBinding(materialCarbon, 'displacementScale', { min: 0, max: 1, step: 0.01 });
carbonPane.addBinding(materialCarbon, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 });

const metalContainerPane = pane.addFolder({
  title: 'Metal Container Material',
  expanded: true
})

const materialMetalContainer = new THREE.MeshStandardMaterial();
materialMetalContainer.map = metalContainerAlbedo;
materialMetalContainer.roughnessMap = metalContainerRoughness;
materialMetalContainer.metalnessMap = metalContainerMetallic;
materialMetalContainer.normalMap = metalContainerNormal;
materialMetalContainer.displacementMap = metalContainerHeight;
materialMetalContainer.displacementScale = 0.0;
materialMetalContainer.aoMap = metalContainerAo;

metalContainerPane.addBinding(materialMetalContainer, 'metalness', { min: 0, max: 1, step: 0.01 });
metalContainerPane.addBinding(materialMetalContainer, 'roughness', { min: 0, max: 1, step: 0.01 });
metalContainerPane.addBinding(materialMetalContainer, 'displacementScale', { min: 0, max: 1, step: 0.01 });
metalContainerPane.addBinding(materialMetalContainer, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 });

const spacePane = pane.addFolder({
  title: 'Space Cruiser  Material',
  expanded: true
});

const materialSpaceCruiser = new THREE.MeshStandardMaterial();
materialSpaceCruiser.map = spaceCruiserAlbedo;
materialSpaceCruiser.roughnessMap = spaceCruiserRoughness;
materialSpaceCruiser.normalMap = spaceCruiserNormal;
materialSpaceCruiser.displacementMap = spaceCruiserHeight;
materialSpaceCruiser.displacementScale = 0.0;
materialSpaceCruiser.aoMap = spaceCruiserAo;
materialSpaceCruiser.aoMapIntensity = 0.3;

spacePane.addBinding(materialSpaceCruiser, 'metalness', { min: 0, max: 1, step: 0.01 });
spacePane.addBinding(materialSpaceCruiser, 'roughness', { min: 0, max: 1, step: 0.01 });
spacePane.addBinding(materialSpaceCruiser, 'displacementScale', { min: 0, max: 1, step: 0.01 });
spacePane.addBinding(materialSpaceCruiser, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 });


// initialize a group
const group = new THREE.Group();

// initialize the mesh
const cubeMetalContainer = new THREE.Mesh(geometry, materialMetalContainer);
cubeMetalContainer.position.x = -1.5;

const cubeCarbonFiber = new THREE.Mesh(geometry, materialCarbon);

const sphere = new THREE.Mesh(sphereGeometry,materialGrass);
sphere.position.y = 1.5;

const cubeSpace = new THREE.Mesh(geometry, materialSpaceCruiser);
cubeSpace.position.x = 1.5;

// add the mest to the scene
group.add(sphere,cubeCarbonFiber,cubeMetalContainer,cubeSpace);
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
