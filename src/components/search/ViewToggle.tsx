import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { motion } from 'framer-motion';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-2 bg-white/5 rounded-lg p-1"
    >
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded-lg transition-all ${
          view === 'grid' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'
        }`}
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded-lg transition-all ${
          view === 'list' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'
        }`}
      >
        <List className="w-5 h-5" />
      </button>
    </motion.div>
  );
}