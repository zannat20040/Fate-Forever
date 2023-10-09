import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { AuthContext } from "../../Auth Component/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const { loginUser,createUserByGoogle, googleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()


  const HandleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        e.target.reset();
        navigate(location?.state ?location.state : '/')
        
        toast.success("Log in success", {
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
        e.target.reset();
        const errorMessage = error.message;
        
        toast.error(errorMessage, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });

     
  };

  const GoogleSignInHandler=(e)=>{
    e.preventDefault();
    createUserByGoogle()
    .then((userCredential) => {

      const user = userCredential.user;
      console.log('Registration success' , user)
      e.target.reset();
      navigate(location?.state ?location.state : '/')
      setLogin(true);

    })
    .catch((error) => {
      const errorMessage = error.message;
      setLogin(false);
    });


    googleSignOut()
    .then((userCredential) => {
      console.log('Registration success' , user)
      e.target.reset();
      navigate("/");
      setLogin(true);

    })
    .catch((error) => {
      const errorMessage = error.message;
      setLogin(false);
    });
  }

  return (
    <div>
      <ToastContainer></ToastContainer>
      <LoginForm HandleLogin={HandleLogin} GoogleSignInHandler={GoogleSignInHandler}></LoginForm>
    </div>
  );
};

export default Login;
