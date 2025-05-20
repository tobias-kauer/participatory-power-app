// components/ThreeCanvas.js
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ImageSpriteCloud from './ImageSpriteCloud';

export default function ThreeCanvas({ scale, selectedFile }) {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {/* Pass scale and selectedFile to ImageSpriteCloud */}
      <ImageSpriteCloud scale={scale} selectedFile={selectedFile} />
    </Canvas>
  );
}