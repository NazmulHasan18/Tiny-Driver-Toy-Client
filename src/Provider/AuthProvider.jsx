import { createContext, useEffect, useState } from "react";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const googleProvider = new GoogleAuthProvider();

   const googleSignUp = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const passwordReset = (email) => {
      return sendPasswordResetEmail(auth, email);
   };

   const signUpWithEmailPass = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logInWithEmailPass = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const profileUpdater = (name, url) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: url,
      });
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user);
         setLoading(false);
         console.log(user);
      });
      return unsubscribe;
   }, []);

   const logOut = () => {
      return signOut(auth);
   };

   const authContext = {
      user,
      googleSignUp,
      signUpWithEmailPass,
      logOut,
      logInWithEmailPass,
      profileUpdater,
      loading,
      passwordReset,
   };
   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
