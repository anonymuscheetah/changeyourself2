import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { User, LogOut, Crown } from 'lucide-react';

export function UserMenu() {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full" />
        ) : (
          <User className="w-5 h-5" />
        )}
        <span>{user.displayName || user.email}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-900/90 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl">
          <div className="px-4 py-2 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">{user.membershipType}</span>
            </div>
          </div>

          <button
            onClick={() => signOut()}
            className="w-full px-4 py-2 text-left hover:bg-white/10 flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
}