import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

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
         {
            path: "/my_toys",
            element: (
               <PrivateRoute>
                  <MyToys></MyToys>
               </PrivateRoute>
            ),
         },
         {
            path: "/update_toy/:id",
            element: (
               <PrivateRoute>
                  <UpdateToy></UpdateToy>
               </PrivateRoute>
            ),
            loader: ({ params }) =>
               fetch(`https://toy-market-place-server.vercel.app/car_details/${params.id}`),
         },
      ],
   },
]);

export default router;
