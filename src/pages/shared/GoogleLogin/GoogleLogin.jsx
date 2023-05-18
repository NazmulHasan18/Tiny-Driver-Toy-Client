import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";

const GoogleLogin = () => {
   const { googleSignUp } = useContext(AuthContext);

   const handelGoogleSignUp = () => {
      googleSignUp()
         .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("User Login Successfully");
         })
         .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            toast.error(errorMessage);
         });
   };

   return (
      <div className="form-control">
         <button className="btn btn-outline btn-primary hover:bg-blue-700" onClick={handelGoogleSignUp}>
            <FaGoogle className="mx-2 text-xl"></FaGoogle> <span>Continue With Google</span>
         </button>
      </div>
   );
};

export default GoogleLogin;
