import React from 'react';
import { Box } from '@react-three/drei';

interface NodeGeometryProps {
  size?: number;
  color?: string;
}

export function NodeGeometry({ 
  size = 1, 
  color = '#3B82F6' 
}: NodeGeometryProps) {
  return (
    <Box args={[size, size, size * 0.2]}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.8}
        roughness={0.2}
        metalness={0.8}
      />
    </Box>
  );
}