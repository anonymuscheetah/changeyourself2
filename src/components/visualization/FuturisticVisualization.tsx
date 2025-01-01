import React, { useMemo } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Position,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface FuturisticVisualizationProps {
  content: string;
  /** Optional hex color for the primary gradient color */
  primaryColor?: string;
  /** Optional hex color for the secondary gradient color */
  secondaryColor?: string;
  /** Optional radius for the circle layout */
  radius?: number;
  /** Optional animation duration in milliseconds */
  animationDuration?: number;
}

const CustomNode = ({ data }: { data: { label: string } }) => (
  <div className="px-4 py-2 shadow-lg rounded-lg border border-white/10 backdrop-blur-md bg-black/50 text-white">
    <p className="font-medium text-sm">{data.label}</p>
  </div>
);

const nodeTypes = {
  custom: CustomNode,
};

export function FuturisticVisualization({ 
  content,
  primaryColor = '#6366f1',
  secondaryColor = '#a855f7',
  radius = 300,
  animationDuration = 2000,
}: FuturisticVisualizationProps) {
  const processContent = useMemo(() => {
    const lines = content.split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^[#*-]\s*/, '').trim());

    if (lines.length === 0) return { nodes: [], edges: [] };

    const nodes: Node[] = [];
    const edges: Edge[] = [];
    
    // Create central node
    nodes.push({
      id: 'central',
      type: 'custom',
      data: { label: lines[0] },
      position: { x: 0, y: 0 },
      className: 'visualization-node main-node',
    });

    // Create branches in a circular pattern
    const mainPoints = lines.slice(1);
    
    mainPoints.forEach((point, index) => {
      const angle = (2 * Math.PI * index) / mainPoints.length;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      
      nodes.push({
        id: `node-${index}`,
        type: 'custom',
        data: { label: point },
        position: { x, y },
        className: 'visualization-node branch-node',
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      });

      edges.push({
        id: `edge-${index}`,
        source: 'central',
        target: `node-${index}`,
        className: 'visualization-edge',
        animated: true,
        style: { 
          strokeWidth: 2,
          stroke: `url(#gradient-${index})`,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: secondaryColor,
        },
      });
    });

    return { nodes, edges };
  }, [content, radius, secondaryColor]);

  const [nodes] = useNodesState(processContent.nodes);
  const [edges] = useEdgesState(processContent.edges);

  return (
    <div className="relative h-[600px] w-full rounded-xl overflow-hidden border border-indigo-500/20 shadow-2xl bg-gradient-to-b from-gray-900 to-black">
      <svg width="0" height="0">
        <defs>
          {edges.map((_, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`gradient-${index}`}
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={primaryColor} stopOpacity="0.5">
                <animate
                  attributeName="offset"
                  values="-2; 1"
                  dur={`${animationDuration}ms`}
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.5">
                <animate
                  attributeName="offset"
                  values="-1; 2"
                  dur={`${animationDuration}ms`}
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          ))}
        </defs>
      </svg>
      
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        className="bg-transparent"
        nodesDraggable={false}
        nodesConnectable={false}
        minZoom={0.3}
        maxZoom={1.5}
      >
        <Background 
          color={primaryColor}
          gap={20}
          size={1}
          className="bg-transparent opacity-5"
        />
        <Controls 
          className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden"
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  );
}

export default FuturisticVisualization;