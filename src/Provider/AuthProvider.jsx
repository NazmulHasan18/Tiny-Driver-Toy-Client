import { createContext, useEffect, useState } from "react";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
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
   const googleProvider = new GoogleAuthProvider();

   const googleSignUp = () => {
      return signInWithPopup(auth, googleProvider);
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
   };
   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
