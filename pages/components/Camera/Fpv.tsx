import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Fpv: React.FC = () => {
    const {camera, gl} = useThree()

    return(<PointerLockControls args={[camera, gl]} />)
}

export default Fpv;