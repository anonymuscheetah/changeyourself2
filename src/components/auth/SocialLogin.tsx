import React, { useState } from 'react';
import { signInWithGoogle } from '../../services/auth/googleAuth';
import { GoogleSignInButton } from './GoogleSignInButton';

interface SocialLoginProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function SocialLogin({ onSuccess, onError }: SocialLoginProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const user = await signInWithGoogle();
      if (user) { // Only call onSuccess if we have a user (not redirecting)
        onSuccess?.();
      }
    } catch (error) {
      onError?.(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
        </div>
      </div>
      <GoogleSignInButton onClick={handleGoogleSignIn} isLoading={isLoading} />
    </div>
  );
}