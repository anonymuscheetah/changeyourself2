import React from 'react';
import { motion } from 'framer-motion';
import { Tool } from '../../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResultCardProps {
  tool: Tool;
  view: 'grid' | 'list';
}

export function ResultCard({ tool, view }: ResultCardProps) {
  const Icon = tool.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`group relative overflow-hidden ${
        view === 'grid'
          ? 'rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-indigo-500/50 transition-all duration-300'
          : 'border-b border-white/10 py-4 hover:bg-white/5'
      }`}
    >
      <Link to={tool.path} className="block p-6">
        <div className={`flex ${view === 'grid' ? 'flex-col space-y-4' : 'space-x-6 items-center'}`}>
          <div className={`${view === 'grid' ? 'text-center' : 'flex-shrink-0'}`}>
            <div className="relative inline-flex">
              <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <Icon className={`relative ${view === 'grid' ? 'w-12 h-12' : 'w-10 h-10'} text-white`} />
            </div>
          </div>

          <div className={`flex-1 ${view === 'grid' ? 'text-center' : ''}`}>
            <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
            <p className="text-white/70 text-sm mb-4">{tool.description}</p>
            
            <div className={`flex items-center ${view === 'grid' ? 'justify-center' : 'justify-start'}`}>
              <span className="text-indigo-400 text-sm font-medium group-hover:text-indigo-300 transition-colors">
                Explore Tool
              </span>
              <ArrowRight className="w-4 h-4 ml-2 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}