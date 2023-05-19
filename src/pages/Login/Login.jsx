import { useContext, useState } from "react";
import GoogleLogin from "../shared/GoogleLogin/GoogleLogin";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
   const { user, logInWithEmailPass } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.state?.pathname || "/";

   const [show, setShow] = useState(false);

   const handelLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      logInWithEmailPass(email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            toast.success("User Login Successfully");
            console.log(user);
            form.reset();
            navigate(from);
         })
         .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
         });
   };
   return (
      <div className="hero min-h-screen bg-blue-100">
         <div className="hero-content w-2/5 flex-col">
            <div className="text-center lg:text-left my-10">
               <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
               <div className="card-body">
                  <form onSubmit={handelLogin}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="text"
                           placeholder="email"
                           name="email"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type={show ? "text" : "password"}
                           name="password"
                           placeholder="password"
                           className="input input-bordered"
                           required
                        />
                        <div className="flex justify-between">
                           <label className="label justify-normal gap-2 label-text-alt">
                              <input type="checkbox" name="showPassword" onChange={() => setShow(!show)} />
                              Show Password
                           </label>
                           <label className="label">
                              <a href="#" className="label-text-alt link link-hover">
                                 Forgot password?
                              </a>
                           </label>
                        </div>
                        <div>
                           <p className="text-xs my-4">
                              New Here?{" "}
                              <Link
                                 to="/register"
                                 className="hover:underline text-blue-700 font-semibold"
                                 state={location.state}
                              >
                                 {" "}
                                 Register.
                              </Link>
                           </p>
                        </div>
                     </div>
                     <div className="form-control mt-6">
                        {user ? (
                           <button className="font-semibold py-3 px-4 rounded-lg btn-disabled">Login</button>
                        ) : (
                           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg">
                              Login
                           </button>
                        )}
                     </div>
                  </form>
                  <div className="divider">OR</div>
                  <GoogleLogin from={from}></GoogleLogin>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
