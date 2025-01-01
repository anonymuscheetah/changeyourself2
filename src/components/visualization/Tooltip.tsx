import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TooltipProps } from './types';

export function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 w-64 p-4 mt-2 text-sm bg-gray-900/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-xl"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}