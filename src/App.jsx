import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import  {Stats} from '@react-three/drei'
export default function App() {
  const gltf = useLoader(GLTFLoader, '/tired2.glb');
  return (
    <>
      <Canvas camera={{position: [-8, 5, 8]}}>
        <ambientLight/>
        <primitive
            object={gltf.scene}
            position={[0, 0, 0]}

        />
        <OrbitControls/>
        <Stats/>
      </Canvas>
    </>
  )
}