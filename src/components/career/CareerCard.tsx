```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CareerCardProps {
  career: {
    title: string;
    confidence: number;
  };
  onClick: () => void;
}

export function CareerCard({ career, onClick }: CareerCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-left transition-colors hover:bg-white/10"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{career.title}</h3>
        <div className="px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-300 text-sm">
          {Math.round(career.confidence)}% Match
        </div>
      </div>
      
      <div className="flex items-center text-indigo-400 mt-4">
        <span className="text-sm">View Career Path</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </motion.button>
  );
}
```