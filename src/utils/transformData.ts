import { VisualizationNode } from '../components/visualization/types';

export function transformResponseToTree(response: string): VisualizationNode {
  const lines = response.split('\n')
    .filter(line => line.trim())
    .map(line => line.replace(/^[#*-]\s*/, '').trim());

  const root: VisualizationNode = {
    id: 'root',
    label: lines[0] || 'Root',
    children: lines.slice(1).map((line, index) => ({
      id: `node-${index}`,
      label: line,
      description: line,
    })),
  };

  return root;
}