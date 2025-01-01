import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  categories?: string[];
}

export interface FlowChartResponse {
  nodes: Array<{
    id: string;
    type: string;
    data: { label: string };
    position: { x: number; y: number };
  }>;
  edges: Array<{
    id: string;
    source: string;
    target: string;
  }>;
}