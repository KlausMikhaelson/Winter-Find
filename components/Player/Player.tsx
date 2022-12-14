import { useRouter } from 'next/router'
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { OrbitControls, useAnimations, useHelper } from "@react-three/drei";
import React, { forwardRef, useState, useEffect, useRef } from "react";
import useInput from '../../hooks/Keyboard';
// @ts-ignore
import * as THREE from "three"
import { Html } from '@react-three/drei';


const walkdirection = new THREE.Vector3()
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3()

// @ts-ignore
const directions = ({ forward, backward, left, right }) => {
    var directions = 0;

    // diagonals
    // @ts-ignore

    if (forward) {
        if (left) {
            directions = Math.PI / 4;
        } else if (right) {
            directions = -Math.PI / 4;
        }
    } else if (backward) {
        if (left) {
            directions = Math.PI / 4 + Math.PI / 2;
        } else if (right) {
            directions = -Math.PI / 4 - Math.PI / 2;
        } else {
            directions = Math.PI;
        }
        // left
    } else if (left) {
        directions = Math.PI / 2;
        // right
    } else if (right) {
        directions = -Math.PI / 2;
    }

    return directions;
}


// @ts-ignore
function getRandomArbitrary(low, high) {
    return Math.random() * (high - low) + low;
}

var itemPos = [getRandomArbitrary(-75, 75), 1, getRandomArbitrary(-75, 75)];
export const GiftModel: React.FC = () => {

    const modelGift = useLoader(GLTFLoader, "/models/Gift.glb")
    const [refBox] = useBox(() => ({
        // @ts-ignore
        type: 'static',
        mass: 1,
        // @ts-ignore
        position: itemPos
    }))

    return (
        <>
            <object3D ref={refBox}>
                <primitive object={modelGift.scene} scale={[0.04, 0.04, 0.04]} />
            </object3D>
        </>
    )
}

interface Props {
    time: number,
}


  
const Timerrr = () => {
  
    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
  
        // @ts-ignore
    const getTimeRemaining = (e) => {
        // @ts-ignore
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
        // @ts-ignore
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    // @ts-ignore
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:10');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        // @ts-ignore
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    const router = useRouter()


    return (
        <Html>
        <div className="App">
            <h2>{timer}</h2>
        </div>
        </Html>
    )
}



export const PlayerModel: React.FC = () => {
    // @ts-ignore

    const { forward, backward, left, right, jump } = useInput()
    const modelPlayer = useLoader(GLTFLoader, "./models/playerss.glb")
    const { actions } = useAnimations(modelPlayer.animations, modelPlayer.scene)

    const currentAction = useRef("")
    const controlsref = useRef<typeof OrbitControls>();
    const camera = useThree((state) => state.camera);

    const updateCamera = (moveX: number, moveZ: number) => {
        camera.position.x += moveX;
        camera.position.z += moveZ;
        camera.position.y = 3;

        cameraTarget.x = modelPlayer.scene.position.x;
        cameraTarget.y = modelPlayer.scene.position.y + 2;
        cameraTarget.z = modelPlayer.scene.position.z;
        // @ts-ignore
        if (controlsref.current) controlsref.current.target = cameraTarget;
    }

    useEffect(() => {
        let action = ""

        if (forward || backward || left || right) {
            action = "walkingmodel"
        } else if (jump) {
            action = "Jumpingmodels"
        } else {
            action = "idlestatess"
        }

        if (currentAction.current != action) {
            const nextAction = actions[action];
            const current = actions[currentAction.current]
            current?.fadeOut(0.2);
            nextAction?.reset().fadeIn(0.2).play();
            currentAction.current = action;
        }

    }, [forward, backward, left, right, jump])
    const [ref] = useBox(() => ({
        mass: 5,
        type: "Static"
    }))

    useFrame((state, delta) => {
        if (currentAction.current == "walkingmodel") {
            let angleYcameraDirection = Math.atan2(
                camera.position.x - modelPlayer.scene.position.x,
                camera.position.z - modelPlayer.scene.position.z
            );
            let newDirections = directions({
                forward,
                backward,
                left,
                right
            });
            // rotating
            rotateQuarternion.setFromAxisAngle(
                rotateAngle,
                // @ts-ignore
                angleYcameraDirection + newDirections
            );
            modelPlayer.scene.quaternion.rotateTowards(rotateQuarternion, 0.2)

            camera.getWorldDirection(walkdirection);
            walkdirection.y = 0;
            walkdirection.normalize();
            walkdirection.applyAxisAngle(rotateAngle, newDirections);

            const velocity = currentAction.current == "walkingmodel" ? 5 : 2;

            const moveX = walkdirection.x * velocity * delta;
            const moveZ = walkdirection.z * velocity * delta;
            modelPlayer.scene.position.x += moveX;
            modelPlayer.scene.position.z += moveZ
            updateCamera(moveX, moveZ)
        }
    })

    const router = useRouter()
    var playerPos = [Math.round(modelPlayer.scene.position.x), Math.round(modelPlayer.scene.position.y), Math.round(modelPlayer.scene.position.z)];
    var avItemPos = [Math.round(itemPos[0]), Math.round(itemPos[1]), Math.round(itemPos[2])]

    // console.log(playerPos);
    // console.log(avItemPos);
    if ((playerPos[0] == avItemPos[0] && playerPos[1] == avItemPos[1]) ||
        (playerPos[1] == avItemPos[1] && playerPos[2] == avItemPos[2]) ||
        (playerPos[0] == avItemPos[0] && playerPos[2] == avItemPos[2])) {

        router.push('/gameover');
    }

    // useEffect(() => {
    //     const newTIming = Timer.toString(); 
    //     console.log("newtiming", t)
    // })

    return (
        <>
            {/* <Timer time={10}/> */}
            {/* <Timerrr /> */}
            <object3D ref={ref} >
                {/* @ts-ignore */}
                <OrbitControls ref={controlsref} maxPolarAngle={Math.PI / 2.5} enableZoom={false} />
                <primitive object={modelPlayer.scene} />
            </object3D>
        </>
    )
}

export default PlayerModel;