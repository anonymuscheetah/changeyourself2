import { useMemo } from 'react';

export interface VisualizationNode {
  id: string;
  text: string;
  isMain: boolean;
  position: [number, number, number];
}

export interface VisualizationConnection {
  id: string;
  start: [number, number, number];
  end: [number, number, number];
}

export function useVisualizationData(content: string) {
  return useMemo(() => {
    const lines = content
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^[#*-]\s*/, '').trim());

    const radius = 4;
    const nodes: VisualizationNode[] = [];
    const connections: VisualizationConnection[] = [];

    // Add main node
    nodes.push({
      id: 'main',
      text: lines[0],
      isMain: true,
      position: [0, 0, 0],
    });

    // Add branch nodes and connections
    lines.slice(1).forEach((line, index) => {
      const angle = (index / (lines.length - 1)) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      nodes.push({
        id: `node-${index}`,
        text: line,
        isMain: false,
        position: [x, y, 0],
      });

      connections.push({
        id: `connection-${index}`,
        start: [0, 0, 0],
        end: [x, y, 0],
      });
    });

    return { nodes, connections };
  }, [content]);
}