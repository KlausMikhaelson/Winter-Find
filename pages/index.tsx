
import { Canvas } from '@react-three/fiber'
// @ts-ignore
import { Environment, useAnimations, useHelper } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
// @ts-ignore
import { OrbitControls, Stats } from '@react-three/drei';
import Lights from '../components/Lights';
import { useLoader } from "@react-three/fiber"
import { GiftModel } from '../components/Player';
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
// @ts-ignore
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { NextPage } from 'next'
import Ground from '../components/Ground'
// @ts-ignore
import styles from '../styles/Home.module.css'
import PlayerModel from '../components/Player';
import Hurdle from "../components/Hurdle"
// @ts-ignore
import { Sky, Cloud, Stars, useEnvironment } from '@react-three/drei';
import Timerrr from '../components/Player';
// @ts-ignore



const Home: NextPage = () => {

  const envMap =  useEnvironment({path: "/envi"})

  return (
    <>
      {/* @ts-ignore */}
      <div className={styles.container}>
        {/* camera={{position:[0,2,0]}} */}
        <Canvas>
          <Suspense fallback={null}>
            <Sky sunPosition={[0, -1, 0]} inclination={0} azimuth={0.5} />
            {/* @ts-ignore */}
            <fog attach="fog" color="#f2f2f" near={7} far={20} />
            <Stars radius={1} depth={500} count={5000} factor={40} saturation={0} fade speed={1} />
            <Physics>
              <Stats />
              <Lights />
              {/* @ts-ignore */}
              <gridHelper args={[1, 1]} />
              <Ground />
              <GiftModel />
              <PlayerModel />
              {/* <Timerrr /> */}
              <Hurdle boundary={150} count={30} />
            </Physics>
            <Environment map={envMap} background />
          </Suspense>
        </Canvas>
      </div>
    </>
  )

}


export default Home;