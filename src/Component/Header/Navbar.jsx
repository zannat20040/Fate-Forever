import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Custom css/style.css";
import { AuthContext } from "../../Auth Component/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const HandleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Log Out successfully', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navList = (
    <>
      <NavLink
        to="/"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "" : "",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/wishlist"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "" : "",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Wishlist
      </NavLink>

      <NavLink
        to="/custompackage"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "" : "",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Customaize
      </NavLink>
    </>
  );

  return (
    <div className="navbar container mx-auto items-center flex-col space-y-3  md:space-y-0 flex md:flex-row">
      <ToastContainer></ToastContainer>
      <div className="navbar-start w-full justify-evenly">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden bg-rose-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5   "
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
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
            className="menu menu-sm dropdown-content mt-3 z-[20]  space-y-2 shadow bg-rose-700 p-4 w-52 text-white "
          >
            {navList}
          </ul>
        </div>
        <a className="ml-3 normal-case text-2xl font-extrabold text-rose-700">
          FateForever
        </a>
      </div>

      <div className="navbar-center hidden lg:flex items-center w-1/2 justify-center">
        <ul className="menu menu-horizontal px-1 space-x-4 flex items-center">
          {navList}
        </ul>
      </div>

      <div className="navbar-end gap-4 items-center w-full justify-center">
        {user ? (
          <>
            <div className="avatar flex gap-3 items-center">
              <NavLink
                to="/profile"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "" : "",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >
                {user?.displayName}
              </NavLink>
              <div className="w-12 rounded-full ">
                <img src={user.photoURL} />
              </div>
            </div>
          </>
        ) : (
          <Link to="/register">
    
            <button className="btn btn-sm border-0 mt-4 bg-rose-700 hover:bg-black text-white">Register</button>
          </Link>
        )}

        {user ? (
          <Link to="/" onClick={HandleSignOut}>
    
          <button className="btn btn-sm border-0 bg-rose-700 hover:bg-black text-white" >Log Out</button>
        </Link>
          
        ) : (
          <Link to="/login" >
    
          <button className="btn btn-sm border-0  mt-4 bg-rose-700 hover:bg-black text-white">Log In</button>
        </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
