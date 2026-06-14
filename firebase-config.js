// ============================================================
// firebase-config.js — Firebase Authentication Configuration
// ============================================================
// IMPORTANT: Replace the config below with YOUR Firebase project config.
// Go to Firebase Console → Project Settings → General → Your apps → Web app

import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js';

// 🔧 REPLACE WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyDYmyLo_cIJmz4mhDV0B_AGMl8h17XM9Y4",
  authDomain: "my-webaite-6503f.firebasestorage.com",
  projectId: "my-webaite-6503f",
  storageBucket: "my-webaite-6503f.firebasestorage.app",
  messagingSenderId: "165181508676",
  appId: "1:165181508676:android:16a8b6460f8d1e80a04011",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ============================================================
// Auth Functions
// ============================================================

// Register new user
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Send email verification
      sendEmailVerification(userCredential.user);
      return userCredential;
    });
}

// Login
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout
export function logoutUser() {
  return signOut(auth);
}

// Reset password
export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

// Auth state observer
export function observeAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}

// Get current user
export function getCurrentUser() {
  return auth.currentUser;
}

export { auth };