import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaPhone, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);
   const handelLogOut = () => {
      logOut()
         .then(() => {
            toast.success("User Log Out Successfully");
         })
         .catch((error) => {
            console.log(error);
            toast.error(error.message);
         });
   };
   return (
      <div className="bg-black bg-opacity-50">
         <div className="mx-auto px-10 pt-4 flex justify-between items-center">
            <div>
               <button className="btn bg-sky-500 border border-sky-500 hover:bg-sky-700 hover:border-sky-700">
                  Add to cart
                  <div className="badge badge-secondary ml-4">+0</div>
               </button>
            </div>
            <Link to="/">
               <img src="/logo2.png" alt="" />
            </Link>
            <div>
               <button className="btn bg-sky-500 border border-sky-500 hover:bg-sky-700 hover:border-sky-700">
                  Contact US <FaPhone className="ml-4"></FaPhone>
               </button>
            </div>
         </div>

         <div className="navbar px-12 p-6 text-primary-content">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </label>
                  <ul
                     tabIndex={0}
                     className="menu menu-compact bg-[#7d9afc] font-semibold dropdown-content mt-3 p-2 shadow rounded-box w-52"
                  >
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/all_toys">All Toys</Link>
                     </li>
                     {user ? (
                        <>
                           <li>
                              <Link to="/my_toys">My Toys</Link>
                           </li>
                           <li>
                              <Link to="/add_toy">Add Toys</Link>
                           </li>
                        </>
                     ) : (
                        <></>
                     )}
                     <li>
                        <Link to="/blogs">Blogs</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal font-semibold px-1">
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/all_toys">All Toys</Link>
                  </li>
                  {user ? (
                     <>
                        <li>
                           <Link to="/my_toys">My Toys</Link>
                        </li>
                        <li>
                           <Link to="/add_toy">Add Toys</Link>
                        </li>
                     </>
                  ) : (
                     <></>
                  )}
                  <li>
                     <Link to="/blogs">Blogs</Link>
                  </li>
               </ul>
            </div>
            <div className="navbar-end">
               {user ? (
                  <>
                     <div className="avatar">
                        <div className="w-14 mr-4 rounded-full border-2">
                           {user.photoURL ? (
                              <Link to="/profile">
                                 <img src={user.photoURL} alt="" title={user?.displayName} />
                              </Link>
                           ) : (
                              <FaUserAlt
                                 className="text-4xl mt-2 ml-2 "
                                 title={user?.displayName}
                              ></FaUserAlt>
                           )}
                        </div>
                     </div>

                     <button
                        className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded btn-sm md:btn-md text-xs md:text-base"
                        onClick={handelLogOut}
                     >
                        LogOut
                     </button>
                  </>
               ) : (
                  <Link to="/login">
                     <button className="bg-sky-500 text-lg hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded btn-sm md:btn-md">
                        Log In
                     </button>
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export default Navbar;
