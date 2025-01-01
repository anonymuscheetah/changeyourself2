import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Line } from '@react-three/drei';

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
}

export function Connection({ start, end }: ConnectionProps) {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        2
      ),
      new THREE.Vector3(...end)
    );
    return curve.getPoints(50);
  }, [start, end]);

  return (
    <Line
      points={points}
      color="#6366f1"
      lineWidth={1}
      transparent
      opacity={0.5}
    />
  );
}