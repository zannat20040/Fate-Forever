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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader:()=>fetch('/service.json')
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>
      },
      {
        path: "/custompackage",
        element: <Custom></Custom>
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
