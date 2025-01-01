import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResultCard } from './ResultCard';
import { Tool } from '../../types';

interface SearchResultsProps {
  tools: Tool[];
  view: 'grid' | 'list';
}

export function SearchResults({ tools, view }: SearchResultsProps) {
  return (
    <motion.div layout className="w-full">
      <AnimatePresence mode="popLayout">
        <div className={
          view === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {tools.map((tool) => (
            <ResultCard key={tool.id} tool={tool} view={view} />
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );
}