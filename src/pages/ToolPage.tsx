import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AIChat } from '../components/ui/AIChat';
import { VisualizationContainer } from '../components/visualization/VisualizationContainer';
import { tools } from '../config/tools';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { transformResponseToTree } from '../utils/transformData';

export function ToolPage() {
  const { toolId } = useParams();
  const tool = tools.find(t => t.id === toolId);
  const [showVisualization, setShowVisualization] = useState(false);
  const [response, setResponse] = useState('');

  if (!tool) {
    return <Navigate to="/" replace />;
  }

  const Icon = tool.icon;

  const handleResponse = (text: string) => {
    setResponse(text);
    setShowVisualization(true);
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-6">
        <Icon className="w-16 h-16 mx-auto gradient-text" />
        <h1 className="text-4xl font-bold gradient-text">{tool.title}</h1>
        <p className="text-xl text-gray-300">{tool.description}</p>
      </div>

      <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
        <AIChat onResponse={handleResponse} />

        {response && (
          <div className="w-full space-y-8">
            <button
              onClick={() => setShowVisualization(!showVisualization)}
              className="w-full p-4 glass rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span className="gradient-text font-medium">
                {showVisualization ? 'Hide Visualization' : 'Show Visualization'}
              </span>
              {showVisualization ? (
                <ChevronUp className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
              ) : (
                <ChevronDown className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
              )}
            </button>

            {showVisualization && (
              <VisualizationContainer 
                data={transformResponseToTree(response)}
                onNodeClick={(nodeId) => console.log('Clicked node:', nodeId)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}