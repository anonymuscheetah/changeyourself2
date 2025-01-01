import React from 'react';
import { Text } from '@react-three/drei';

interface NodeLabelProps {
  text: string;
  isMain: boolean;
}

export function NodeLabel({ text, isMain }: NodeLabelProps) {
  return (
    <Text
      position={[0, isMain ? 1.2 : 0.8, 0]}
      fontSize={isMain ? 0.4 : 0.3}
      color="white"
      anchorX="center"
      anchorY="middle"
      maxWidth={2}
      lineHeight={1.2}
      font="/fonts/LeagueSpartan-Medium.ttf"
    >
      {text}
    </Text>
  );
}