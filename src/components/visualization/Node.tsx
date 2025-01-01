import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '../../Tooltip';

interface NodeProps {
  id: string;
  label: string;
  description?: string;
  onClick?: (id: string) => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Node({ 
  id, 
  label, 
  description, 
  onClick, 
  variant = 'secondary',
  className = ''
}: NodeProps) {
  return (
    <Tooltip content={description || ''}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => onClick?.(id)}
        className={`
          px-6 py-3 backdrop-blur-sm rounded-lg border shadow-lg
          transition-colors duration-200
          ${variant === 'primary' 
            ? 'bg-indigo-500/30 border-indigo-500/50 text-lg' 
            : 'bg-white/10 border-white/20'
          }
          ${className}
        `}
      >
        {label}
      </motion.button>
    </Tooltip>
  );
}