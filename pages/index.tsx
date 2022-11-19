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
import PlayerModel from './components/Player/Player';
import GameMap from "./components/Ground/Ground"
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
        <Sky />
        <fog attach="fog" color="white" near={5} far={10} />
        <Stars />
      <Physics>
        <Stats />
        <Lights />
        <gridHelper args={[10, 10]} />
        {/* <Fpv /> */}
        <GameMap />
        <PlayerModel />
      </Physics>
      </Canvas>
    </div>
  )
}

export default Home;