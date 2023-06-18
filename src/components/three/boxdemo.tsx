import { Canvas } from "@react-three/fiber";

export default function BoxDemo() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}
