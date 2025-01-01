import React from 'react';
import { Brain } from 'lucide-react';
import { BRAND } from '../constants/branding';

export function Footer() {
  return (
    <footer className="py-8 bg-black/50 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-white" />
            <span className="text-xl font-bold gradient-text">{BRAND.name}</span>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-400">
              {BRAND.description}
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}