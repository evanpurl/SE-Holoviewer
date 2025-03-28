// app/page.jsx
'use client';
import { Canvas } from '@react-three/fiber';
import Model from './components/red';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas>
        <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Model modelPath="/models/Red_Fighter/Red_Fighter.fbx" />
          </Suspense>
      </Canvas>
    </div>
  );
};

export default HomePage;