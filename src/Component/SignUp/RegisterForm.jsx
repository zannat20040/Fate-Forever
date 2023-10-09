import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = ({handleRegister, registerSuccess}) => {
    return (
        <div className="hero py-11">


        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
            <h1 className="text-3xl font-bold text-rose-700 text-center">Register Account!</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered"
                required
                name='name'
              />
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
                name='email'
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
                name='password'
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full mt-2 text-white bg-rose-700 border-0 hover:bg-black hover:text-white">Register</button>
            </div>
            
            <p>Have account? <Link to='/login' className='font-bold text-rose-700'>Log in</Link></p>
            {registerSuccess && (
              <div>
                <p className="text-green-500 font-medium mt-3">
                  {registerSuccess}
                </p>
              </div>
            )}

          
          </form>


        </div>
      </div>
    );
};

export default RegisterForm;