import React from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface NapkinVisualizationProps {
  content: string;
}

export function NapkinVisualization({ content }: NapkinVisualizationProps) {
  const processContent = (text: string) => {
    const lines = text.split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^[#*-]\s*/, '').trim());

    const nodes: Node[] = [];
    const edges: Edge[] = [];
    
    // Create central node
    nodes.push({
      id: 'central',
      data: { label: lines[0] },
      position: { x: 400, y: 300 },
      className: 'napkin-node main-node',
    });

    // Create branches in a circular pattern
    const radius = 250;
    const subRadius = 150;
    const mainPoints = lines.slice(1);
    
    mainPoints.forEach((point, index) => {
      const angle = (2 * Math.PI * index) / mainPoints.length;
      const x = 400 + radius * Math.cos(angle);
      const y = 300 + radius * Math.sin(angle);

      // Add main branch node
      nodes.push({
        id: `branch-${index}`,
        data: { label: point },
        position: { x, y },
        className: 'napkin-node branch-node',
      });

      // Connect to central node
      edges.push({
        id: `edge-central-${index}`,
        source: 'central',
        target: `branch-${index}`,
        className: 'napkin-edge',
        type: 'straight',
      });
    });

    return { nodes, edges };
  };

  const { nodes: initialNodes, edges: initialEdges } = processContent(content);
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        className="napkin-flow"
        nodesDraggable={false}
        nodesConnectable={false}
      >
        <Background color="#88888810" gap={20} />
        <Controls 
          className="bg-transparent border-none"
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  );
}