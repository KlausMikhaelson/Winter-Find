import { Canvas } from '@react-three/fiber'
import { useAnimations, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
// import { OrbitControls } from '@react-three/drei/core';
import { OrbitControls, Stats } from '@react-three/drei';
import Lights from './components/Lightning/Lights';
import { useLoader } from "@react-three/fiber"
// @ts-ignore

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'

import { NextPage } from 'next'
import Ground from './components/Ground/Ground'
import {PlayerModel, GiftModel} from './components/Player/Player';
// import GameMap from "./components/Ground/Ground"
// import GiftModel from "./components/GiftModel/GiftModel"
import Hurdle from "./components/Hurdle/Hurdle"
import { Sky, Cloud, Stars } from '@react-three/drei';
import { fog } from '@react-three/fiber';


// const GameMap = () => {
//   const model = useLoader(GLTFLoader, "./models/map.glb")

//   return (
//     <>
    
//       <object3D position={[0, 0, 0]} scale={[20, 20, 20]}>
//         <primitive object={model.scene} />
//       </object3D>
//     </>

//   )
// }

// const PlayerModel = () => {
//   const modelPlayer = useLoader(GLTFLoader, "./models/player.glb")
//   const {actions} = useAnimations(modelPlayer.animations, modelPlayer.scene)
//   console.log(modelPlayer)

//   useEffect(() => {
//     actions?.walking?.play()
//   })
//   const [ref] = useBox(() => ({
//   }))
  
//   return(
//     <>
//     <object3D ref={ref} position={[10, 3.6, 2]}>
//       <primitive object={modelPlayer.scene} />
//     </object3D>
//     </>
//   )
// }


const Home: NextPage = () => {

  return (
    <div className='container'>
      <Canvas>
        <Sky  sunPosition={[0, -1, 0]} inclination={0} azimuth={0.5} />
        <fog attach="fog" color="#f2f2f" near={7} far={10} />
        <Stars radius={1} depth={500} count={5000} factor={40} saturation={0} fade speed={1} />
      <Physics>
        <Stats />
        <Lights />
        <gridHelper args={[1, 1]} />
        {/* <Fpv /> */}
        <Ground />
        <PlayerModel />
        <GiftModel />
        <Hurdle />
      </Physics>
      </Canvas>
    </div>
  )

}


export default Home;