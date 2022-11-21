import { useLoader } from "@react-three/fiber"
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'
import PlayerModel from "../Player/Player"

const GameMap = () => {
    // const model = useLoader(GLTFLoader, "./models/map.glb")
    const [ref] = useBox(() => ({
        rotation: [Math.PI * -0.5, 0, 0],
        mass: 10,
        type: "Static"
    }))
    return (
        <>
            <mesh ref={ref} rotation-x={Math.PI * -0.5} receiveShadow>
                <planeBufferGeometry args={[150, 150]} />
                <meshStandardMaterial color={"#ffffff"} />
            </mesh>
        </>

    )
}


const Ground: React.FC = () => {
    return (
        <GameMap />
    )
}

export default Ground;