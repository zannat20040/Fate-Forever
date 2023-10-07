import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navList = (
    <>
      <NavLink to='/' 
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "PaleVioletRed" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Home
      </NavLink>
      <NavLink to='/events'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "PaleVioletRed" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Events
      </NavLink>
      <NavLink to='/packages'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "PaleVioletRed" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Packages
      </NavLink>
      <NavLink to='/custom'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "PaleVioletRed" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Custom Package
      </NavLink>
      <NavLink to='/profile'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "PaleVioletRed" : "inherit",
          };
        }}
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Profile
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           { navList}
          </ul>
        </div>
        <a className="font-semibold text-5xl text-pink-600">FateForever</a>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 space-x-4 text-base">
          {navList}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-pink-600 text-white">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
