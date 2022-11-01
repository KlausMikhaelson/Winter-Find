import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import { getSingleModel, updateSingleModel } from "../Firebase";

import NavBar from "../../Components/molecules/NavBar";
import Footer from "../molecules/Footer";
import { useLayoutEffect } from "react";

import * as dat from "dat.gui";


const intersected = [];
const tempMatrix = new THREE.Matrix4();
let modelLoaded = false;
let colors = {
  light: "#896666",
};
let cameraPosition = {
  z: 5,
  y: 0,
};
let stlMesh = {
  scale: {
    x: 0.2,
    y: 2,
    z: 0.5,
  },
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
};

// if (model_mesh) {
//   stlMesh = model_mesh;
//   const { x, y, z } = stlMesh.scale;
//   mesh.scale.set(x, y, z);
// }

let size = {
  height: window.innerHeight,
  width: window.innerWidth,
};

let scene, renderer, controls, camera, loader, model,light;


const animate = function () {
  controls.update();
  
  renderer.render(scene, camera,controls);

  requestAnimationFrame(animate);
};

const loadGltfFile = (upload_path) => {
  loader = new GLTFLoader();
  loader.load(upload_path, (gltf) => {
    scene.add(gltf.scene);
  });
};

const loadFbxFile = (upload_path) => {
  loader = new FBXLoader();
  loader.load(upload_path, (mesh) => {
    console.log(mesh);
    // camera.position.z = -20;
    var box = new THREE.Box3().setFromObject(mesh);
    box.getCenter(mesh.position); // this re-sets the mesh position
    mesh.position.multiplyScalar(-1);

    console.log(mesh.scale);

    console.log(mesh.scale);
    var pivot = new THREE.Group();
    model = pivot;

    scene.add(model);
    pivot.add(mesh);
    modelLoaded = true;
    camera.lookAt(model);
  });
};

const loadObjFile = (upload_path) => {
  loader = new OBJLoader();
  loader.load(upload_path, (obj) => {
    model = obj;

    scene.add(model);
  });
};

const loadStlFile = (upload_path) => {
  loader = new STLLoader();
  loader.load(upload_path, function (geometry) {
    console.log(geometry);
    const light = new THREE.PointLight(0xf3f3f3, 1, 200);
    light.position.set(5, 10, 5);
    scene.add(light);
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color("rgb(212, 205, 192)"),
      // specular: 0x171717,
      // emissive: 0x221d1d,
      shininess: 200,
      flatShading: true,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.rotateX(Math.PI);

    mesh.position.z = 0;
    mesh.rotation.y = 50;

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    var box = new THREE.Box3().setFromObject(mesh);
    box.getCenter(mesh.position); // this re-sets the mesh position
    mesh.position.multiplyScalar(-1);
    var pivot = new THREE.Group();
    model = pivot;
    scene.add(model);
    pivot.add(mesh);
    // camera.position.z = -300;

    // scene.add(model);
    // camera.lookAt(model);
    // console.log(geometry);
    // modelLoaded = true;
  });
};
const gui = new dat.GUI();
// if (window.location.pathname.includes("/view")) {
const guiScale = gui.addFolder("scale");
guiScale.add(stlMesh.scale, "y", 0.3, 2).onChange((e) => {
  model.scale.y = e;
});
guiScale.add(stlMesh.scale, "x", 0.3, 2).onChange((e) => {
  model.scale.x = e;
  stlMesh.scale.x = e;
  console.log(stlMesh.scale.x);
});
guiScale.add(stlMesh.scale, "z", 0.3, 2).onChange((e) => {
  model.scale.z = e;
});


const { PI } = Math;

const guiRotate = gui.addFolder("rotate");
guiRotate.add(stlMesh.rotate, "y", 0.3, 2 * PI).onChange((e) => {
  model.rotation.y = e;
});
guiRotate.add(stlMesh.rotate, "x", 0.3, 2 * PI).onChange((e) => {
  model.rotation.x = e;
});
guiRotate.add(stlMesh.rotate, "z", 0.3, 2 * PI).onChange((e) => {
  model.rotation.z = e;
});
gui
  .add(cameraPosition, "z", -500, 500, 2)
  .name("camera position Z")
  .onChange((e) => {
    camera.position.z = e;
  });

gui.addColor(colors, "light").onChange((e) => {
  light.color.set(e);
});
// }
const makeThreeScene = ({ upload_path, mesh }, fileExt, fs) => {
  scene = renderer = controls = camera = loader = model = light = null;

  scene = new THREE.Scene();

  // if (!fs) {
  //   camera = new THREE.PerspectiveCamera(75, size.height / size.width, 0.1, 1000);
  // } else {

  camera = new THREE.PerspectiveCamera(75, size.height / size.width, 0.1, 1000);
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();


  camera.rotation.order = "YXZ";
  camera.position.x = -350;
  camera.position.z = -10;

  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("canvas"),
    antialias: true,
  });
 

  const intensity = 1;
  light = new THREE.AmbientLight(colors.light, intensity);
  scene.add(light);

  // const light = new THREE.PointLight(0xf3f3f3, 1, 200);
  // light.position.set(5, 10, 5);
  // scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);

  // if (!fs) {
  //   renderer.setSize(size.width, size.height / 1.5);
  // } else {
  // }
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(devicePixelRatio);
  renderer.setClearColor(0xf3f3ff);
  

  controls = new OrbitControls(camera, renderer.domElement);
  
  
  
 
  // controls.target.set(4.5, 0, 4.5);
  // controls.enablePan = false;
  // // controls.enableZoom = false;
  // // controls.maxPolarAngle = Math.PI / 2;
  controls.enableDamping = true;
  // controls.enableRotate = false;

  controls.update();
  renderer.xr.enabled = true;
  document.body.appendChild(VRButton.createButton(renderer));
  
  renderer.xr.setFramebufferScaleFactor(2);
  
  

  renderer.setAnimationLoop( function () {

    renderer.render( scene, camera );
  
  } );
  



  if (fileExt === "stl") {
    loadStlFile(upload_path);
  } else if (fileExt === "fbx") {
    loadFbxFile(upload_path);
  } else if (fileExt === "gltf") {
    loadGltfFile(upload_path);
  } else if (fileExt === "obj") {
    loadObjFile(upload_path);
  }

  // const allInputs = document.querySelectorAll("input");
  // allInputs.forEach((input) => {
  //   input.remove();
  // });
  // const input = document.createElement("input");
  // input.type = "range";
  // input.setAttribute("min", "0.25");
  // input.setAttribute("max", "3");
  // input.setAttribute("step", "0.1");
  // input.oninput = (e) => {
  //   console.log(e.target.value);
  //   model.scale.x = e.target.value;
  // };
  // document.body.appendChild(input);
};


const ViewProduct = () => {
  const [fs, setFs] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const location = useLocation();
  const [model, setModel] = useState();

  useEffect(() => {
    if (!model) return;
    const res = model;
    const ext = res.upload_path
      .split("?")[0]
      .split("/")
      .slice(-1)[0]
      .split(".")[1];

    console.log(ext);
    if (!fs) {
      size = {
        height: window.innerHeight / 1.25,
        width: window.innerWidth - 60,
      };
    } else {
      size = {
        height: window.innerHeight,
        width: window.innerWidth,
      };
    }

    makeThreeScene(res, ext, fs);

    if (isFirst) {
      animate();
    }

    localStorage.setItem("model", JSON.stringify(res));
  }, [fs, model]);

  useEffect(async () => {
    const res = await getSingleModel(location.pathname.replace("/view/", ""));
    setModel(res);

    console.log(stlMesh);
  }, []);

  useLayoutEffect(() => {
    window.onresize = (e) => {
      if (!fs) {
        size = {
          height: window.innerHeight / 1.25,
          width: window.innerWidth - 60,
        };
      } else {
        size = {
          height: window.innerHeight,
          width: window.innerWidth,
        };
      }
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
      renderer.setSize(size.width, size.height);
      
    };
  }, []);

  return (
    <>
      {fs ? (
        <>
          <div
            style={{
              position: "fixed",
              bottom: 5,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <ul>
              <li>Scroll Up - Zoom Out</li>
              <li>Scroll Down - Zoom In</li>
            </ul>
          </div>
          <canvas
            style={{
              top: 0,
              left: 0,
              width: "auto",
              height: "auto",
            }}
          ></canvas>
          <button
            style={{
              position: "absolute",
              padding: "1rem",
              top: "0",
              right: "50%",
            }}
            onClick={() => setFs(false)}
          >
            <i class="fas fa-compress-arrows-alt"></i>
          </button>
        </>
      ) : (
        <>
          <NavBar />
          <ul>
            <li>Scroll Up - Zoom Out</li>
            <li>Scroll Down - Zoom In</li>
          </ul>
          <div style={{ margin: "1rem 30px" }}>
            <canvas
              style={{
                top: 0,
                left: 0,
              }}
            ></canvas>
            <button
              style={{ position: "absolute", padding: "0.5rem", right: "30px" }}
              onClick={() => setFs(true)}
            >
              <i class="fas fa-expand"></i>
            </button>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default ViewProduct;
