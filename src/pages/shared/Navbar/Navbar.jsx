import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="navbar px-12 bg-[#7d9afc] text-primary-content">
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
                  className="menu menu-compact bg-blue-300 dropdown-content mt-3 p-2 shadow rounded-box w-52"
               >
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/all_toys">All Toys</Link>
                  </li>
                  <li>
                     <Link to="/my_toys">My Toys</Link>
                  </li>
                  <li>
                     <Link to="/add_toys">Add Toys</Link>
                  </li>
                  <li>
                     <Link to="/blogs">Blogs</Link>
                  </li>
               </ul>
            </div>
            <Link to="/">
               <img src="/logo2.png" className="w-20" alt="" />
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/all_toys">All Toys</Link>
               </li>
               <li>
                  <Link to="/my_toys">My Toys</Link>
               </li>
               <li>
                  <Link to="/add_toys">Add Toys</Link>
               </li>
               <li>
                  <Link to="/blogs">Blogs</Link>
               </li>
            </ul>
         </div>
         <div className="navbar-end">
            <Link to="/login">
               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                  Log In
               </button>
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
               Log Out
            </button>
         </div>
      </div>
   );
};

export default Navbar;
