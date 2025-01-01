import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Brain } from 'lucide-react';
import { BRAND } from '../constants/branding';

export function Hero() {
  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center">
        <Brain className="w-16 h-16 text-white animate-pulse" />
      </div>
      <h1 className="text-5xl font-bold gradient-text">
        {BRAND.name}
      </h1>
      <div className="h-16">
        <TypeAnimation
          sequence={[
            'Transform Your Education Path',
            2000,
            'Accelerate Your Career Growth',
            2000,
            'Generate Business Strategies',
            2000,
            'Assess Your Skills',
            2000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-2xl"
          repeat={Infinity}
        />
      </div>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        {BRAND.description}
      </p>
    </div>
  );
}