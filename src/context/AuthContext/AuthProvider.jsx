import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  // Keep user state in sync with Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Google sign-in
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // setUser(result.user); // Not needed, onAuthStateChanged will handle
    return result;
  };

  // Email/password sign-in
  const signInWithEmailAndPassword = async (email, password) => {
    const result = await firebaseSignInWithEmailAndPassword(auth, email, password);
    // setUser(result.user); // Not needed, onAuthStateChanged will handle
    return result;
  };

  // Logout function
  const logout = async () => {
    await signOut(auth);
    // setUser(null); // Not needed, onAuthStateChanged will handle
  };

  const value = {
    user,
    signInWithGoogle,
    signInWithEmailAndPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;