import { Canvas } from '@react-three/fiber'
import { useAnimations, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
// import { OrbitControls } from '@react-three/drei/core';
import { OrbitControls, Stats } from '@react-three/drei';
import Lights from './components/Lightning/Lights';
import { useLoader } from "@react-three/fiber"
import { GiftModel } from './components/Player/Player';
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { NextPage } from 'next'
import Ground from './components/Ground/Ground'
import PlayerModel from './components/Player/Player';
import Hurdle from "./components/Hurdle/Hurdle"
import { Sky, Cloud, Stars } from '@react-three/drei';
// @ts-ignore



const Home: NextPage = () => {

  return (
    <div className='container'>
      {/* camera={{position:[0,2,0]}} */}
      <Canvas>
        <Sky sunPosition={[0, -1, 0]} inclination={0} azimuth={0.5} />
        <fog attach="fog" color="#f2f2f" near={7} far={10} />
        <Stars radius={1} depth={500} count={5000} factor={40} saturation={0} fade speed={1} />
        <Physics>
          <Stats />
          <Lights />
          <gridHelper args={[1, 1]} />
          <Ground />
          <GiftModel />
          <PlayerModel />
          <Hurdle boundary={150} count={30} />
        </Physics>
      </Canvas>
    </div>
  )

}


export default Home;