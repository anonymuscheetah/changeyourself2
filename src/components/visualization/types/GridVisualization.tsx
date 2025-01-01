import React from 'react';
import { motion } from 'framer-motion';
import { VisualizationProps } from '../types';
import { Tooltip } from '../Tooltip';

export function GridVisualization({ data, onNodeClick }: VisualizationProps) {
  const flattenNodes = (node: typeof data): typeof data[] => {
    return [node, ...(node.children?.flatMap(flattenNodes) || [])];
  };

  const nodes = flattenNodes(data);
  const columns = Math.ceil(Math.sqrt(nodes.length));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Tooltip content={node.description || ''}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => onNodeClick?.(node.id)}
              className={`w-full px-6 py-4 backdrop-blur-sm rounded-lg border shadow-lg ${
                index === 0
                  ? 'bg-indigo-500/30 border-indigo-500/50'
                  : 'bg-white/10 border-white/20'
              }`}
            >
              {node.label}
            </motion.button>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
}