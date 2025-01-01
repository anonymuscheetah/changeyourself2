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

interface FlowchartVisualizationProps {
  content: string;
}

export function FlowchartVisualization({ content }: FlowchartVisualizationProps) {
  const processContent = (text: string) => {
    const lines = text.split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^[#*-]\s*/, '').trim());
      
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    
    let y = 0;
    lines.forEach((line, index) => {
      nodes.push({
        id: `${index}`,
        type: index === 0 ? 'input' : index === lines.length - 1 ? 'output' : 'default',
        data: { label: line },
        position: { x: 250, y },
        className: `backdrop-blur-md text-white font-medium rounded-lg shadow-xl border border-white/20 ${
          index === 0 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
            : index === lines.length - 1 
              ? 'bg-gradient-to-r from-green-500 to-emerald-500'
              : 'bg-white/10'
        }`,
      });

      if (index < lines.length - 1) {
        edges.push({
          id: `e${index}-${index + 1}`,
          source: `${index}`,
          target: `${index + 1}`,
          animated: true,
          style: { stroke: '#ffffff50', strokeWidth: 2 },
          className: 'animate-pulse',
        });
      }
      y += 100;
    });
    return { nodes, edges };
  };

  const { nodes: initialNodes, edges: initialEdges } = processContent(content);
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-gray-900 to-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        className="bg-transparent"
        nodesDraggable={false}
        nodesConnectable={false}
      >
        <Background 
          color="rgba(255, 255, 255, 0.05)"
          gap={16}
          className="bg-transparent"
        />
        <Controls 
          className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  );
}