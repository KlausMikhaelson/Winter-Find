import { useLoader } from "@react-three/fiber"
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const GameMap = () => {
    const model = useLoader(GLTFLoader, "./models/map.glb")
    return (
        <>

            <object3D position={[0, 0, 0]} scale={[20, 20, 20]}>
                <primitive object={model.scene} />
            </object3D>
        </>

    )
}


const Ground: React.FC = () => {
    return (
        <mesh>
            <GameMap />
            {/* <planeBufferGeometry args={[1000, 1000]} />
            <meshStandardMaterial color={"#87ceeb"} /> */}
        </mesh>
    )
}

export default Ground;