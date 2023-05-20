import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FidgetSpinner } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();
   //    console.log(location);

   if (loading) {
      return (
         <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["blue", "red", "yellow"]}
            backgroundColor="white"
         />
      );
   }
   if (user) {
      return children;
   }
   console.log("private");
   toast.warning("You Have To Login First To Go There!!!");

   return <Navigate to="/login" state={location} replace></Navigate>;
};

export default PrivateRoute;
