import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { VisualizationControls } from './VisualizationControls';
import { FlowchartVisualization } from './types/FlowchartVisualization';
import { GridVisualization } from './types/GridVisualization';
import { VisualizationType, VisualizationNode } from './types';
import { useZoom } from './hooks/useZoom';

interface VisualizationContainerProps {
  data: VisualizationNode;
  onNodeClick?: (nodeId: string) => void;
}

export function VisualizationContainer({ data, onNodeClick }: VisualizationContainerProps) {
  const [type, setType] = useState<VisualizationType>('flowchart'); // Default to flowchart
  const { scale, position, handlers } = useZoom();
  const containerRef = useRef<HTMLDivElement>(null);

  // Map of visualization components
  const visualizationComponents = {
    flowchart: FlowchartVisualization,
    grid: GridVisualization,
  };

  const VisualizationComponent = visualizationComponents[type];

  return (
    <div className="space-y-4">
      <VisualizationControls
        type={type}
        onTypeChange={(newType) => setType(newType)}
        onZoomIn={handlers.zoomIn}
        onZoomOut={handlers.zoomOut}
        onReset={handlers.reset}
      />

      <motion.div
        ref={containerRef}
        className="relative h-[600px] rounded-xl overflow-auto bg-black/20 backdrop-blur-md border border-white/10 custom-scrollbar"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
        }}
      >
        {VisualizationComponent ? (
          <div
            className="absolute inset-0 transform-gpu min-h-full min-w-full"
            style={{
              transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            }}
          >
            <VisualizationComponent
              data={data}
              onNodeClick={onNodeClick}
              type={type}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>Unsupported visualization type: {type}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}