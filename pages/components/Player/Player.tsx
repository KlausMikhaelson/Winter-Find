import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { OrbitControls, useAnimations, useHelper } from "@react-three/drei";
import React, { forwardRef, useEffect, useRef } from "react";
import { useInput } from "../../hooks/Keyboard";


const directions = ({forward, backward, left, right}) => {
    var directions = 0;

    if(forward) {
        if(left) {
            directions = Math.PI / 4;
        } else if(right) {
            directions = -Math.PI / 4;
        }
    } else if (backward) {
        if(left) {
            directions = Math.PI / 4 + Math.PI / 2;
        } else if(right) {
            directions = -Math.PI / 4 - Math.PI / 2; 
        } else {
            directions = Math.PI;
        }
    } else if(left) {
        directions = Math.PI / 2;
    } else if (right) {
        directions = -Math.PI / 2;
    }

    return directions;
}


const PlayerModel: React.FC = () => {
    const {forward, backward, left, right, jump}  = useInput()
    const modelPlayer = useLoader(GLTFLoader, "./models/playerss.glb")
    const {actions} = useAnimations(modelPlayer.animations, modelPlayer.scene)
    console.log(modelPlayer)

    const currentAction = useRef("")
    const controlsref = useRef<typeof OrbitControls>();
    const camera = useThree((state) => state.camera);
  
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
    }))

    useFrame((state, delta) => {
        if(currentAction.current == "walkingmodel") {
            let angleYcameraDirection = Math.atan2(
                camera.position.x - modelPlayer.scene.position.x,
                camera.position.z - modelPlayer.scene.position.z
            );


        }
    })
    
    return(
      <>
      <object3D ref={ref} position={[10, 3.6, 2]}>
        <OrbitControls ref={controlsref}/>
        <primitive object={modelPlayer.scene} />
      </object3D>
      </>
    )
  }

  export default PlayerModel;