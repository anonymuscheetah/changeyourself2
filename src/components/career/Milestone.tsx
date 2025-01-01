```tsx
import React from 'react';
import { Check } from 'lucide-react';

interface MilestoneProps {
  title: string;
  description: string;
  duration: string;
  active: boolean;
}

export function Milestone({ title, description, duration, active }: MilestoneProps) {
  return (
    <div className="relative pl-8 pb-8">
      <div
        className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
          active ? 'bg-indigo-500' : 'bg-white/10'
        }`}
      >
        {active && <Check className="w-4 h-4 text-white" />}
      </div>
      
      <div className="ml-8">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{description}</p>
        <span className="text-sm text-indigo-400">{duration}</span>
      </div>
    </div>
  );
}
```