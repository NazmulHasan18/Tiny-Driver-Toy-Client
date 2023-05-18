import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const user = { name: "some" };
   const authContext = {
      user,
   };
   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
