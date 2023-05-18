import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
   return (
      <div className="bg-blue-200 min-h-screen">
         <Navbar></Navbar>
         <div className="container mx-auto">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default MainLayout;
