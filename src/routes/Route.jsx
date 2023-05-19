import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/cars/:id",
            element: (
               <PrivateRoute>
                  <ViewDetails></ViewDetails>
               </PrivateRoute>
            ),
            loader: ({ params }) => fetch(`http://localhost:4000/car_details/${params.id}`),
         },
         {
            path: "/all_toys",
            element: <AllToys></AllToys>,
         },
      ],
   },
]);

export default router;
