import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import AddAToy from "../pages/AddAToy/AddAToy";

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
            loader: ({ params }) =>
               fetch(`https://toy-market-place-server.vercel.app/car_details/${params.id}`),
         },
         {
            path: "/all_toys",
            element: <AllToys></AllToys>,
         },
         {
            path: "/add_toy",
            element: (
               <PrivateRoute>
                  <AddAToy></AddAToy>
               </PrivateRoute>
            ),
         },
      ],
   },
]);

export default router;
