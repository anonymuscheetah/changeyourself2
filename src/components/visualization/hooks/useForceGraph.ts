import { useCallback, useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  radius?: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string;
  target: string;
}

export function useForceGraph() {
  const simulation = useRef<d3.Simulation<Node, Link>>();

  const initializeSimulation = useCallback((nodes: Node[], links: Link[]) => {
    simulation.current = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('center', d3.forceCenter(0, 0))
      .force('collision', d3.forceCollide().radius(50));

    return simulation.current;
  }, []);

  const updateSimulation = useCallback((nodes: Node[], links: Link[]) => {
    if (!simulation.current) {
      return initializeSimulation(nodes, links);
    }

    simulation.current.nodes(nodes);
    simulation.current.force('link', d3.forceLink(links).id((d: any) => d.id).distance(100));
    simulation.current.alpha(1).restart();

    return simulation.current;
  }, [initializeSimulation]);

  useEffect(() => {
    return () => {
      if (simulation.current) {
        simulation.current.stop();
      }
    };
  }, []);

  return { updateSimulation };
}