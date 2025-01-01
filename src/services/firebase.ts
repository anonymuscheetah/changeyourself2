import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics'; // Add this import

const firebaseConfig = {
  apiKey: "AIzaSyC01UWXjlRrUGEh8Wo0RfLi6zMwxllmMx0",
  authDomain: "changeyourself-93767.firebaseapp.com",
  projectId: "changeyourself-93767",
  storageBucket: "changeyourself-93767.firebasestorage.app",
  messagingSenderId: "1083648080743",
  appId: "1:1083648080743:web:53de4de9e3541f578b8dc2",
  measurementId: "G-V1JQKCBNW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const analytics = getAnalytics(app); // Add this line to export analytics