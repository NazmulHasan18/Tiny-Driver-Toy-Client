import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const MainLayout = () => {
   return (
      <div className="bg-gray-100 min-h-screen">
         <Navbar></Navbar>
         <div>
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;
