'use client';
import Image from "next/image";
import ThreeScene from '@/components/ThreeScene';
import CanvasScene from "@/components/CanvasScene";
import ThreeCanvas from '@/components/ThreeCanvas';
import ControlPanel from "@/components/ControlPanel";
import { useState } from "react";

export default function Home() {
  // State for scale and selected dataset
  const [scale, setScale] = useState(1);
  const [selectedFile, setSelectedFile] = useState('pca_output_small.json');
  const [speed, setSpeed] = useState(0.01);
  const [maxPoints, setMaxPoints] = useState(10);

  return (
    <main style={{ position: 'relative' }}>
      {/* Control Panel */}
      <ControlPanel
        scale={scale}
        setScale={setScale}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        speed={speed}
        setSpeed={setSpeed}
        maxPoints={maxPoints}
        setMaxPoints={setMaxPoints}
      />

      {/* Three.js Canvas */}
      <ThreeCanvas scale={scale} selectedFile={selectedFile} speed={speed} maxPoints={maxPoints} />
    </main>
  );
}