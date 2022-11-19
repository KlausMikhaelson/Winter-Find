import { Canvas } from '@react-three/fiber'
import { useAnimations, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
// import { OrbitControls } from '@react-three/drei/core';
import { OrbitControls, Stats } from '@react-three/drei';
import Lights from './components/Lightning/Lights';
import { useLoader } from "@react-three/fiber"
// @ts-ignore

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import { NextPage } from 'next'
import Ground from './components/Ground/Ground'


// const GameMap = () => {
//   const model = useLoader(GLTFLoader, "./models/map.glb")
//   const [ref] = usePlane(() => ({
// 		rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
// 	}))
//   return (
//     <>
    
//       <object3D ref={ref} position={[0, 0, 0]} scale={[20, 20, 20]}>
//         <primitive object={model.scene} />
//       </object3D>
//     </>

//   )
// }

const PlayerModel = () => {
  const modelPlayer = useLoader(GLTFLoader, "./models/player.glb")
  const {actions} = useAnimations(modelPlayer.animations, modelPlayer.scene)
  console.log(modelPlayer)

  useEffect(() => {
    actions?.walking?.play()
  })
  
  return(
    <>
    <object3D position={[10, 3.6, 2]}>
      <primitive object={modelPlayer.scene} />
    </object3D>
    </>
  )
}


const Home: NextPage = () => {

  return (
    <div className='container'>
      <Canvas camera={{ position: [10, 5, 0] }}>
        <OrbitControls />
        <Lights />
        <gridHelper args={[10, 10]} />
        {/* <Fpv /> */}
        <PlayerModel />
        <Ground />
      </Canvas>
    </div>
  )
}

export default Home;