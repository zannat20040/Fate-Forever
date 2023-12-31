import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ HandleLogin, GoogleSignInHandler }) => {
  return (
    <div className="hero py-5">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={HandleLogin}>
          <div className="form-control">
            <h1 className="text-4xl font-bold text-center">Welcome Again!</h1>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full mt-2 text-white bg-rose-700 border-0 hover:bg-black hover:text-white">
              Login
            </button>
          </div>
          
        </form>
        <form action="" className="card-body pt-0" onSubmit={GoogleSignInHandler}>
          <p className="text-center">Or,</p>
          <div className="form-control ">
            <button className="btn btn-primary w-full mt-2 text-white bg-rose-700 border-0 hover:bg-black hover:text-white">
              Sign in with Google
            </button>
          </div>
          <p>
            New user?{" "}
            <Link to="/register" className="font-bold text-rose-700">
              Register
            </Link>
          </p>
          </form>
          
      </div>
    </div>
  );
};

export default LoginForm;
