import { Canvas } from '@react-three/fiber'
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
// import { OrbitControls } from '@react-three/drei/core';
import { OrbitControls, Stats } from '@react-three/drei';
import Lights from './components/Lightning/Lights';
import {useLoader} from "@react-three/fiber"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

import { NextPage } from 'next'
import Ground from './components/Ground/Ground'


const GameMap = () => {
  const model = useLoader(GLTFLoader, "./models/map.glb")
  return (
  <object3D position={[0,0,0]} scale={[20,20,20]}>
     <primitive object={model.scene} />
  </object3D>

  ) 
}

const Home: NextPage = () => {
  
  return (
    <div className='container'>
      <Canvas camera={{position:[10,5,0]}}>
        <OrbitControls />
        <Lights />
      <gridHelper args={[10, 10]} />
      <GameMap />
        <Ground />
      </Canvas>
    </div>
  )
}

export default Home;