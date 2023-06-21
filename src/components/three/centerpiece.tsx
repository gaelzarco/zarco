import { type MutableRefObject, useRef } from "react";
import type { Mesh } from "three";
import { useFrame, Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

export function Box() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;

    if (document.body.clientWidth <= 768) {
      meshRef.current.scale.setX(0.5);
      meshRef.current.scale.setY(0.5);
      meshRef.current.scale.setZ(0.5);
      meshRef.current.position.setY(0.8);
    } else if (document.body.clientWidth <= 1024) {
      meshRef.current.scale.setX(0.8);
      meshRef.current.scale.setY(0.8);
      meshRef.current.scale.setZ(0.8);
      meshRef.current.position.setY(-0.7);
    } else {
      meshRef.current.scale.setX(1.1);
      meshRef.current.scale.setY(1.1);
      meshRef.current.scale.setZ(1.1);
      meshRef.current.position.setY(0);
    }
  });

  return (
    <mesh ref={meshRef as MutableRefObject<Mesh>}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function CenterPiece() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
      <Box />
    </Canvas>
  );
}