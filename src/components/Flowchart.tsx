import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface FlowchartProps {
  content?: string;
}

export function Flowchart({ content = '' }: FlowchartProps) {
  // Parse content into nodes and edges
  const generateFlowData = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    
    let y = 0;
    lines.forEach((line, index) => {
      // Create node with improved styling
      nodes.push({
        id: `${index}`,
        type: 'default', // Changed to default for consistent styling
        data: { label: line.trim() },
        position: { x: 250, y: y },
        style: {
          backgroundColor: index === 0 
            ? 'rgb(59 130 246 / 0.7)' // Blue with opacity
            : index === lines.length - 1 
              ? 'rgb(34 197 94 / 0.7)' // Green with opacity
              : 'rgb(168 85 247 / 0.7)', // Purple with opacity
          color: 'white',
          borderRadius: '0.5rem',
          padding: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          fontWeight: 500,
          minWidth: '200px',
          textAlign: 'center',
        },
      });
      
      // Create edge to next node
      if (index < lines.length - 1) {
        edges.push({
          id: `e${index}-${index + 1}`,
          source: `${index}`,
          target: `${index + 1}`,
          animated: true,
          style: { 
            strokeWidth: 2,
            stroke: 'rgba(255,255,255,0.5)', // Lighter edge color
          },
        });
      }
      y += 150; // Increased vertical spacing
    });
    return { nodes, edges };
  };

  const { nodes: initialNodes, edges: initialEdges } = generateFlowData(content);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    const { nodes: newNodes, edges: newEdges } = generateFlowData(content);
    setNodes(newNodes);
    setEdges(newEdges);
  }, [content, setNodes, setEdges]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div 
      className="h-[600px] w-full rounded-xl overflow-hidden shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgb(17 24 39) 0%, rgb(75 85 99) 100%)', // Enhanced gradient
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        proOptions={{ hideAttribution: true }}
        style={{ 
          background: 'transparent',
          height: '100%',
          width: '100%',
        }}
      >
        <Background 
          color="rgba(255, 255, 255, 0.05)"
          gap={16}
          style={{ background: 'transparent' }}
        />
        <Controls 
          style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  );
}

export default Flowchart;