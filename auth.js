// ============================================================
// auth.js — Auth state management & route guards
// ============================================================

import { getCurrentUser, observeAuthState } from './firebase-config.js';

// Check if user is authenticated
export function isAuthenticated() {
  return getCurrentUser() !== null;
}

// Redirect to login if not authenticated
export function requireAuth(redirectTo = '/login.html') {
  observeAuthState((user) => {
    if (!user) {
      window.location.href = redirectTo;
    }
  });
}

// Load user data into elements
export function loadUserProfile() {
  const user = getCurrentUser();
  if (user) {
    const displayNameEl = document.getElementById('userDisplayName');
    const emailEl = document.getElementById('userEmail');
    const avatarEl = document.getElementById('userAvatar');

    if (displayNameEl) displayNameEl.textContent = user.displayName || 'Developer';
    if (emailEl) emailEl.textContent = user.email;
    if (avatarEl) avatarEl.src = user.photoURL || 'https://ui-avatars.com/api/?name=Developer&background=6c5ce7&color=fff&size=128';
  }
}