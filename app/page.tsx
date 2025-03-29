// app/page.jsx
'use client';
import { Canvas } from '@react-three/fiber';
import Model from './components/red';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas camera={{position: [-300, 0, 0]}}>
        <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Model modelPath="/models/Red_Ship/Red_Ship.fbx" />
          </Suspense>
      </Canvas>
    </div>
  );
};

export default HomePage;