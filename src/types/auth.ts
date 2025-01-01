export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  membershipType: 'free' | 'premium' | 'enterprise';
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}