import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
   return (
      <div className="form-control">
         <button className="btn btn-outline btn-primary hover:bg-blue-700">
            <FaGoogle className="mx-2 text-xl"></FaGoogle> <span>Continue With Google</span>
         </button>
      </div>
   );
};

export default GoogleLogin;
