import { ReactNode } from 'react';

export type VisualizationType = 'flowchart' | 'grid';

export interface VisualizationNode {
  id: string;
  label: string;
  description?: string;
  children?: VisualizationNode[];
}

export interface VisualizationProps {
  data: VisualizationNode;
  type: VisualizationType;
  onNodeClick?: (nodeId: string) => void;
}

export interface VisualizationControlsProps {
  type: VisualizationType;
  onTypeChange: (type: VisualizationType) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

export interface TooltipProps {
  children: ReactNode;
  content: string;
}