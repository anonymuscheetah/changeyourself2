import React from 'react';
import { Share2, LayoutGrid, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';

export type VisualizationType = 'flowchart' | 'grid';

export interface VisualizationControlsProps {
  type: VisualizationType;
  onTypeChange: (type: VisualizationType) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

const visualizationTypes = [
  { type: 'flowchart' as const, icon: Share2, label: 'Flowchart' },
  { type: 'grid' as const, icon: LayoutGrid, label: 'Grid' },
];

export function VisualizationControls({
  type,
  onTypeChange,
  onZoomIn,
  onZoomOut,
  onReset,
}: VisualizationControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-xl border border-black/10 dark:border-white/10">
      <div className="flex gap-2" role="group" aria-label="Visualization types">
        {visualizationTypes.map(({ type: vizType, icon: Icon, label }) => (
          <Button
            key={vizType}
            variant={type === vizType ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onTypeChange(vizType)}
            className="flex items-center gap-2"
            title={label}
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{label}</span>
          </Button>
        ))}
      </div>

      <div className="flex gap-2 ml-auto" role="group" aria-label="View controls">
        <Button
          variant="ghost"
          size="icon"
          onClick={onZoomIn}
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onZoomOut}
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onReset}
          title="Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}