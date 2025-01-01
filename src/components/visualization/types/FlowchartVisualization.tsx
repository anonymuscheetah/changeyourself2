import React from 'react';

interface Node {
  id: string;
  label: string;
  children?: Node[];
}

interface Props {
  data: Node;
  onNodeClick?: (id: string) => void;
}

export const FlowchartVisualization = ({ data, onNodeClick }: Props) => {
  const renderNode = (node: Node, level = 0) => (
    <div key={node.id} className="flex flex-col items-center gap-4">
      <button
        onClick={() => onNodeClick?.(node.id)}
        className="px-6 py-3 bg-indigo-500/20 backdrop-blur-sm rounded-lg border border-indigo-500/30 text-white font-medium shadow-lg hover:bg-indigo-500/30 transition-colors"
      >
        {node.label}
      </button>
      
      {node.children?.length > 0 && (
        <div className="flex flex-col items-center gap-4 mt-4">
          {node.children.map(child => renderNode(child, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full flex justify-center p-4">
      {renderNode(data)}
    </div>
  );
};

// Add named export
export { FlowchartVisualization as default };