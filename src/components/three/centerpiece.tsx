import { useRef } from "react";
import { type PrimitiveProps, useFrame, Canvas } from "@react-three/fiber";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";

// export function Box() {
//   const meshRef = useRef<Mesh>(null);

//   useFrame(() => {
//     if (!meshRef.current) return;

//     meshRef.current.rotation.x += 0.005;
//     meshRef.current.rotation.y += 0.005;

//     if (document.body.clientWidth <= 768) {
//       meshRef.current.scale.setX(0.5);
//       meshRef.current.scale.setY(0.5);
//       meshRef.current.scale.setZ(0.5);
//       meshRef.current.position.setY(0.8);
//     } else if (document.body.clientWidth <= 1024) {
//       meshRef.current.scale.setX(0.8);
//       meshRef.current.scale.setY(0.8);
//       meshRef.current.scale.setZ(0.8);
//       meshRef.current.position.setY(-0.7);
//     } else {
//       meshRef.current.scale.setX(1.1);
//       meshRef.current.scale.setY(1.1);
//       meshRef.current.scale.setZ(1.1);
//       meshRef.current.position.setY(0);
//     }
//   });

//   return (
//     <mesh ref={meshRef as MutableRefObject<Mesh>}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color="white" />
//     </mesh>
//   );
// }

export function PlaystationDualshock() {
  const primitiveRef = useRef<PrimitiveProps>();
  const { scene } = useGLTF("/playstation-dualshock/scene.gltf");

  useFrame(() => {
    if (!primitiveRef.current) return;

    primitiveRef.current.rotation.x += 0.002;
    primitiveRef.current.rotation.y += 0.001;

    if (document.body.clientWidth <= 640) {
      primitiveRef.current.scale.setX(1.25);
      primitiveRef.current.scale.setY(1.25);
      primitiveRef.current.scale.setZ(1.25);
      primitiveRef.current.position.setY(0.7);
    } else if (document.body.clientWidth <= 768) {
      primitiveRef.current.scale.setX(1.35);
      primitiveRef.current.scale.setY(1.35);
      primitiveRef.current.scale.setZ(1.35);
      primitiveRef.current.position.setY(0.35);
    } else if (document.body.clientWidth <= 1024) {
      primitiveRef.current.scale.setX(1.45);
      primitiveRef.current.scale.setY(1.45);
      primitiveRef.current.scale.setZ(1.45);
      primitiveRef.current.position.setY(-0.65);
    } else if (document.body.clientWidth <= 1280) {
      primitiveRef.current.scale.setX(1.55);
      primitiveRef.current.scale.setY(1.55);
      primitiveRef.current.scale.setZ(1.55);
      primitiveRef.current.position.setY(-0.4);
    } else {
      primitiveRef.current.scale.setX(1.65);
      primitiveRef.current.scale.setY(1.65);
      primitiveRef.current.scale.setZ(1.65);
      primitiveRef.current.position.setY(-0.2);
    }
  });

  return (
    <>
      <primitive ref={primitiveRef} object={scene} scale={1} />
    </>
  );
}

export default function CenterPiece() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
      {/* <Box /> */}
      <PlaystationDualshock />
    </Canvas>
  );
}
