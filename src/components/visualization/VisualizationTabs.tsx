import React, { useState } from 'react';
import { Flowchart } from './Flowchart';
import { PyramidView } from './PyramidView';
import { GlassCard } from '../ui/GlassCard';
import { Share2, Triangle } from 'lucide-react';

interface VisualizationTabsProps {
  content: string;
}

export function VisualizationTabs({ content }: VisualizationTabsProps) {
  const [activeTab, setActiveTab] = useState<'flowchart' | 'pyramid'>('flowchart');

  return (
    <GlassCard className="p-6 space-y-4 max-w-[100vw] overflow-hidden">
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setActiveTab('flowchart')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
            activeTab === 'flowchart'
              ? 'bg-white/20 text-white shadow-lg'
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          <Share2 className="w-4 h-4" />
          <span>Flowchart</span>
        </button>
        <button
          onClick={() => setActiveTab('pyramid')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
            activeTab === 'pyramid'
              ? 'bg-white/20 text-white shadow-lg'
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          <Triangle className="w-4 h-4" />
          <span>Pyramid</span>
        </button>
      </div>

      <div className="transition-all duration-300 max-w-full overflow-hidden">
        {activeTab === 'flowchart' && <Flowchart content={content} />}
        {activeTab === 'pyramid' && <PyramidView content={content} />}
      </div>
    </GlassCard>
  );
}