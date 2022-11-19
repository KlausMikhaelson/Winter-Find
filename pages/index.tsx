import { Canvas } from '@react-three/fiber'
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
// import { OrbitControls } from '@react-three/drei/core';
import { OrbitControls, Stats } from '@react-three/drei';


import { NextPage } from 'next'
import Ground from './components/Ground/Ground'


const Home: NextPage = () => {
  
  return (
    <div className='container'>
      <Canvas>
        <OrbitControls />
        <ambientLight />
      <gridHelper args={[10, 10]} />
        <Ground />
      </Canvas>
    </div>
  )
}

export default Home;