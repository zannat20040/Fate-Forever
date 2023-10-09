import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import ServiceDetails from "./Component/ServiceDetails.jsx/ServiceDetails";
import WishList from "./Pages/WishList";
import Custom from "./Pages/Custom";
import Register from "./Component/SignUp/Register";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute";
import AuthProvider from "./Auth Component/AuthProvider";
import ErrorPage from "./errorPage";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:()=>fetch('/service.json')
      },
      {
        path: "/wishlist",
        element: <PrivateRoute><WishList></WishList></PrivateRoute>
      },
      {
        path: "/custompackage",
        element: <PrivateRoute><Custom></Custom></PrivateRoute>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
