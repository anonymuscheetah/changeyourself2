import React from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';
import { GlassCard } from './ui/GlassCard';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;
  
  return (
    <Link to={tool.path}>
      <GlassCard className="h-full p-6 transition-all hover:scale-105 hover:bg-white/20">
        <div className="flex flex-col items-center text-center space-y-4">
          <Icon className="w-12 h-12" />
          <h3 className="text-xl font-semibold">{tool.title}</h3>
          <p className="text-sm text-gray-300">{tool.description}</p>
        </div>
      </GlassCard>
    </Link>
  );
}