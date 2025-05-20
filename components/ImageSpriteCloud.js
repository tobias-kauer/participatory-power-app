'use client';

import { useEffect, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

function ImageSprite({ position, imageUrl, scale = 1 }) {
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  return (
    <sprite position={position} scale={[scale, scale, 1]}>
      <spriteMaterial map={texture} />
    </sprite>
  );
}

export default function ImageSpriteCloud({ scale, selectedFile }) {
  const [sprites, setSprites] = useState([]);
  const groupRef = useRef(); // Reference for the entire group

  useEffect(() => {
    // Fetch the dataset based on the selected file
    fetch(`/${selectedFile}`)
      .then((res) => res.json())
      .then((data) => setSprites(data));
  }, [selectedFile]); // Re-fetch when selectedFile changes

  // Rotate the entire group slowly
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001; // Adjust the speed of rotation here
    }
  });

  return (
    <group ref={groupRef}>
      {/* Render Sprites */}
      {sprites.map((item, index) => (
        <ImageSprite
          key={index}
          position={item.position}
          imageUrl={item.imageUrl}
          scale={scale} // Pass the scale prop to each sprite
        />
      ))}
    </group>
  );
}