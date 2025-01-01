import React from 'react';

interface PyramidViewProps {
  content: string;
}

export function PyramidView({ content }: PyramidViewProps) {
  const lines = content.split('\n')
    .filter(line => line.trim())
    .map(line => line.replace(/^[#*-]\s*/, '').trim());

  return (
    <div className="h-[600px] w-full flex items-center justify-center p-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-gray-900 to-black">
      <div className="relative w-full max-w-3xl">
        {lines.map((line, index) => {
          const width = 100 - (index * (100 / lines.length));
          const opacity = 1 - (index * (0.5 / lines.length));
          
          return (
            <div
              key={index}
              className="relative mx-auto mb-4 p-4 backdrop-blur-sm rounded-lg text-center transform transition-all hover:scale-105"
              style={{
                width: `${width}%`,
                backgroundColor: `rgba(255, 255, 255, ${opacity * 0.1})`,
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span className="text-white/90 font-medium">{line}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}