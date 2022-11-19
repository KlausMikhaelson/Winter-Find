import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useLoader } from "@react-three/fiber"
import { useAnimations, useHelper } from "@react-three/drei";
import React, { useEffect, useRef } from "react";



const PlayerModel: React.FC = () => {
    const modelPlayer = useLoader(GLTFLoader, "./models/playerss.glb")
    const {actions} = useAnimations(modelPlayer.animations, modelPlayer.scene)
    console.log(modelPlayer)
  
    useEffect(() => {
    //   actions?.Jumpingmodels?.play()
      actions?.walkingmodel?.play()
    })
    const [ref] = useBox(() => ({
        // mass: 0
    }))
    
    return(
      <>
      <object3D ref={ref} position={[10, 3.6, 2]}>
        <primitive object={modelPlayer.scene} />
      </object3D>
      </>
    )
  }

  export default PlayerModel;