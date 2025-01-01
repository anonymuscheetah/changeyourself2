import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect, 
  getRedirectResult,
  type User 
} from 'firebase/auth';
import { auth } from '../firebase';

const provider = new GoogleAuthProvider();
// Add scopes if you need additional access
provider.addScope('email');
provider.addScope('profile');

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    // Check if there's a pending redirect operation
    const redirectResult = await getRedirectResult(auth);
    if (redirectResult) {
      return redirectResult.user;
    }

    // Try popup first
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error: any) {
      // Handle specific error cases
      switch (error.code) {
        case 'auth/popup-blocked':
        case 'auth/popup-closed-by-user':
          console.log('Popup blocked or closed, falling back to redirect...');
          await signInWithRedirect(auth, provider);
          return null; // User will be redirected

        case 'auth/cancelled-popup-request':
          console.log('Concurrent popup operation detected, ignoring...');
          return null;

        case 'auth/network-request-failed':
          throw new Error('Network error occurred. Please check your connection.');

        case 'auth/user-disabled':
          throw new Error('This user account has been disabled.');

        case 'auth/operation-not-allowed':
          throw new Error('Google sign-in is not enabled for this project.');

        default:
          console.error('Google sign in error:', error);
          throw error;
      }
    }
  } catch (error: any) {
    console.error('Authentication error:', error);
    throw new Error(error.message || 'Failed to sign in with Google');
  }
};

// Optional: Helper function to check for redirect result on component mount
export const checkRedirectResult = async (): Promise<User | null> => {
  try {
    const result = await getRedirectResult(auth);
    return result?.user || null;
  } catch (error) {
    console.error('Redirect result error:', error);
    throw error;
  }
};