import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const categories = [
  'Education', 'Career', 'Business', 'Personal Growth',
  'Technology', 'Creative', 'Analytics'
];

export function FilterPanel({ 
  isOpen, 
  onClose, 
  selectedCategories, 
  onCategoryChange 
}: FilterPanelProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      className="fixed inset-y-0 right-0 w-80 bg-gray-900/95 backdrop-blur-xl border-l border-white/10 p-6 shadow-2xl z-50"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Filters</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/70">Categories</h4>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                selectedCategories.includes(category)
                  ? 'bg-indigo-500/20 border-indigo-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              } border`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}