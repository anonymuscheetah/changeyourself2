import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Node } from './Node';
import { Connection } from './Connection';
import { useVisualizationData } from '../hooks/useVisualizationData';

interface SceneContentProps {
  content: string;
}

export function SceneContent({ content }: SceneContentProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, connections } = useVisualizationData(content);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node) => (
        <Node
          key={node.id}
          position={node.position}
          text={node.text}
          isMain={node.isMain}
        />
      ))}
      {connections.map((connection) => (
        <Connection
          key={connection.id}
          start={connection.start}
          end={connection.end}
        />
      ))}
    </group>
  );
}