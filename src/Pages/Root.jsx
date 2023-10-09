import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Header/Navbar";

const Root = () => {
  return (
    <>
      <div className="sticky top-0 z-40 bg-rose-100  py-3">
        <Navbar></Navbar>
        {/* <Navbar2></Navbar2> */}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
