import React from 'react';
import { Float } from '@react-three/drei';
import { Text } from '@react-three/drei';
import { NodeGeometry } from './NodeGeometry';

interface NodeProps {
  position: [number, number, number];
  text: string;
  isMain?: boolean;
}

export function Node({ position, text, isMain = false }: NodeProps) {
  const size = isMain ? 1.2 : 0.8;
  const color = isMain ? '#6366f1' : '#3b82f6';
  const fontSize = isMain ? 0.4 : 0.3;
  const yOffset = isMain ? 1.2 : 0.8;

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        <NodeGeometry size={size} color={color} />
        <Text
          position={[0, yOffset, 0]}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
          lineHeight={1.2}
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}