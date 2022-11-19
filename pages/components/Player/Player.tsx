import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useLoader } from "@react-three/fiber"
import { useAnimations, useHelper } from "@react-three/drei";
import React, { forwardRef, useEffect, useRef } from "react";
import { useInput } from "../../hooks/Keyboard";


const PlayerModel: React.FC = () => {
    const {forward, backward, left, right, jump}  = useInput()
    const modelPlayer = useLoader(GLTFLoader, "./models/playerss.glb")
    const {actions} = useAnimations(modelPlayer.animations, modelPlayer.scene)
    console.log(modelPlayer)

    const currentAction = useRef("")
  
    useEffect(() => {
        let action = ""

        if(forward || backward || left || right) {
            action = "walkingmodel"
        } else if(jump) {
            action="Jumpingmodels"
        } else {
            action="idlestatess"
        }

        if(currentAction.current != action) {
            const nextAction = actions[action];
            const current = actions[currentAction.current]
            current?.fadeOut(0.2);
            nextAction?.reset().fadeIn(0.2).play();
            currentAction.current = action;
        }

    //   actions?.Jumpingmodels?.play()
    //   actions?.walkingmodel?.play()
    }, [forward, backward, left, right, jump])
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