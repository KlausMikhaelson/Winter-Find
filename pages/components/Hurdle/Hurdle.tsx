// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import React, { forwardRef, useEffect, useRef } from "react";
// @ts-ignore
import * as THREE from "three"

// @ts-ignore
function getRandomArbitrary(low, high) {
  return Math.random() * (high - low) + low;
}

const Hurdle: React.FC = () => {

    const hurdle01 = useLoader(GLTFLoader, "./models/hurdle01.glb")
    const hurdle02 = useLoader(GLTFLoader, "./models/hurdle02.glb")
    const hurdle03 = useLoader(GLTFLoader, "./models/hurdle03.glb")

    const [ref] = useBox(() => ({
      type: 'Static',
      mass: 1,
      
    }))

    return(
        <>
            <object3D ref={ref}>
            <primitive object={hurdle01.scene} scale={[0.01, 0.01, 0.01]} position={[getRandomArbitrary(-15, 0), 0, getRandomArbitrary(-15, 0)]}/>
            </object3D>

            <object3D ref={ref}>
            <primitive object={hurdle01.scene} scale={[0.01, 0.01, 0.01]} position={[getRandomArbitrary(15, 60), 0, getRandomArbitrary(15, 60)]}/>
            </object3D>

            <object3D ref={ref}>
            <primitive object={hurdle02.scene} scale={[0.01, 0.01, 0.01]} position={[getRandomArbitrary(-60, -15), 0, getRandomArbitrary(-60, -15)]} />
            </object3D>
            
            <object3D ref={ref}>
            <primitive object={hurdle03.scene} scale={[0.01, 0.01, 0.01]} position={[getRandomArbitrary(-75, -60), 0, getRandomArbitrary(-75, -60)]} />
            </object3D>
                        
        </>
    )
}

export default Hurdle;


