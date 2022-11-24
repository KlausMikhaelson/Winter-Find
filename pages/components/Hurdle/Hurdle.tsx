// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import React, { forwardRef, useEffect, useRef, useState } from "react";
// @ts-ignore
import * as THREE from "three"
import { type } from "os";

// @ts-ignore
function getRandomArbitrary(low, high) {
  return Math.random() * (high - low) + low;
}

type HurdleType = {
  position: {x: number, z: number}
  box: number;
}

type props = {
  boundary: number;
  count: number;
}



const Hurdle: React.FC<props> = ({boundary, count}) => {

    const hurdle01 = useLoader(GLTFLoader, "./models/hurdle01.glb")
    const hurdle02 = useLoader(GLTFLoader, "./models/hurdle02.glb")
    const hurdle03 = useLoader(GLTFLoader, "./models/hurdle03.glb")
    const [hurdles, setHurdles] = useState<HurdleType[]>([]);

    const [ref] = useBox(() => ({
      type: 'Static',
      mass: 1,
      
    }))

    const updatePos = (hurdleArray: HurdleType[], boundary: number) => {
      hurdleArray.forEach((hurdles, index) => {
        hurdles.position.x = Math.random() * 100;
        hurdles.position.z = Math.random() * 100;
      })
      setHurdles(hurdleArray);
    }

    useEffect(() => {
      const tempHurdle: HurdleType[] = [];
      for(let i=0; i <count; i++) {
        tempHurdle.push({position: {x:0, z: 0}, box: 1})
      }
      console.log(tempHurdle)
      updatePos(tempHurdle, boundary);
    }, [boundary, count])

    return(
        <>
            {/* <object3D ref={ref}>
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
            </object3D> */}

            {hurdles.map((hurdless, index) => {
              return(
                <object3D key={index} position={[hurdless.position.x, 0, hurdless.position.z]}>
                  <primitive scale={[0.01, 0.01, 0.01]} object={hurdle01.scene.clone()} />
                  <primitive scale={[0.01, 0.01, 0.01]} object={hurdle02.scene.clone()} />
                  <primitive scale={[0.01, 0.01, 0.01]} object={hurdle03.scene.clone()} />
                </object3D>
              )
            })}
                        
        </>
    )
}

export default Hurdle;


