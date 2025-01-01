import React from 'react';

interface ConnectionLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  className?: string;
}

export function ConnectionLine({ x1, y1, x2, y2, className = '' }: ConnectionLineProps) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="white"
      strokeWidth="1"
      className={`opacity-20 ${className}`}
    />
  );
}