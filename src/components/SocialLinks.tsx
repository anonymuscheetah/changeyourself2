import React from 'react';
import { Instagram, Twitter, FileCode2 } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://instagram.com/changeyourself.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://twitter.com/changeyourself_ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Twitter className="w-5 h-5" />
      </a>
   </div>
  );
}