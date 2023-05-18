import { createContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const googleProvider = new GoogleAuthProvider();

   const googleSignUp = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const logOut = () => {
      return signOut(auth);
   };
   const user = { name: "some" };
   const authContext = {
      user,
      googleSignUp,
      logOut,
   };
   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
