import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({HandleLogin}) => {
  return (
    <div className="hero min-h-screen bg-base-200">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full mt-2 text-white bg-rose-700 border-0 hover:bg-black hover:text-white">Login</button>
          </div>
          <p>
            New user? <Link to='/register' className='font-bold text-rose-700'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
