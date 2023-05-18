import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "swiper/css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
   <AuthProvider>
      <React.StrictMode>
         <RouterProvider router={router} />
         <ToastContainer />
      </React.StrictMode>
   </AuthProvider>
);
