import { Link } from "react-router-dom";
import GoogleLogin from "../shared/GoogleLogin/GoogleLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
   const { user, signUpWithEmailPass, profileUpdater } = useContext(AuthContext);

   const [show, setShow] = useState(false);

   const handelRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const url = form.url.value;
      const email = form.email.value;
      const password = form.password.value;
      signUpWithEmailPass(email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            profileUpdater(name, url)
               .then(() => {
                  toast.success("User Registered Successfully");
                  console.log(user);
                  form.reset();
               })
               .catch((error) => {
                  const errorMessage = error.message;
                  toast.error(errorMessage);
               });
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
                  <form onSubmit={handelRegister}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input
                           type="text"
                           placeholder="Name"
                           name="name"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input
                           type="text"
                           placeholder="Photo URL(optional)"
                           name="url"
                           className="input input-bordered"
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
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

                        <label className="label justify-normal gap-2 label-text-alt">
                           <input type="checkbox" name="showPassword" onChange={() => setShow(!show)} />
                           Show Password
                        </label>

                        <div>
                           <p className="text-xs my-4">
                              Already Have An Account?{" "}
                              <Link to="/login" className="hover:underline text-blue-700 font-semibold">
                                 {" "}
                                 Login!!!
                              </Link>
                           </p>
                        </div>
                     </div>
                     <div className="form-control mt-6">
                        {user ? (
                           <button className="btn-disabled text-blue-900 font-semibold py-3 px-4 rounded-lg">
                              Register
                           </button>
                        ) : (
                           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg">
                              Register
                           </button>
                        )}
                     </div>
                  </form>
                  <div className="divider">OR</div>
                  <GoogleLogin></GoogleLogin>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
