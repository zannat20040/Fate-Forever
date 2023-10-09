import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Custom css/style.css";
import { AuthContext } from "../../Auth Component/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const HandleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("logout success");
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
        Custom Package
      </NavLink>
      <NavLink
        to="/register"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "" : "",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Register
      </NavLink>
    </>
  );

  return (
    <div className="navbar container mx-auto ">
      <div className="navbar-start ">
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
            {
            user && <NavLink
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
          }
          </ul>
        </div>
        <a className="font-semibold text-2xl sm:text-5xl text-rose-700">
          FateForever
        </a>
      </div>
      <div className="navbar-center hidden lg:flex items-center w-1/2 justify-center">
        <ul className="menu menu-horizontal px-1 space-x-4 flex items-center">
          {navList}
          {
            user && <NavLink
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
          }
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            className="btn mt-2 text-white btn-sm bg-rose-700 border-0 hover:bg-black hover:text-white"
            onClick={HandleSignOut}
          >
            Sign out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm mt-2 text-white bg-rose-700 border-0 hover:bg-black hover:text-white"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
