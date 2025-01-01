```tsx
import React from 'react';
import { Check } from 'lucide-react';

interface ProgressTrackerProps {
  currentStep: number;
}

const steps = [
  'Questionnaire',
  'Career Matches',
  'Career Roadmap'
];

export function ProgressTracker({ currentStep }: ProgressTrackerProps) {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep > index + 1
                  ? 'bg-indigo-500'
                  : currentStep === index + 1
                  ? 'bg-indigo-500/50'
                  : 'bg-white/10'
              }`}
            >
              {currentStep > index + 1 ? (
                <Check className="w-4 h-4" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className="ml-2 text-sm hidden sm:inline">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 mx-4 h-px bg-white/10" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
```