import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

export function UserTracker() {
  const [userCount, setUserCount] = useState<number>(0);
  
  useEffect(() => {
    // Simulate active users with a random number between 10-30
    setUserCount(Math.floor(Math.random() * 20) + 10);
    
    const interval = setInterval(() => {
      setUserCount(Math.floor(Math.random() * 20) + 10);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
        <Users className="w-4 h-4 text-green-400" />
        <span className="text-sm font-medium">{userCount} active now</span>
      </div>
    </div>
  );
}