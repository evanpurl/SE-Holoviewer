// components/Model.jsx
import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Vector3 } from 'three';

const Model = ({ modelPath }) => {
  const mesh = useRef(null);
  const gltf = useLoader(FBXLoader, modelPath);

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.1; // Adjust rotation speed here
  });

  return (
    <mesh ref={mesh} scale={[0.05, 0.05, 0.05]}>
      <primitive object={gltf} dispose={null} />
    </mesh>
  );
};

export default Model;