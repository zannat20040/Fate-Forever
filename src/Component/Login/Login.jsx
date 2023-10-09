import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { AuthContext } from "../../Auth Component/AuthProvider";

const Login = () => {

  const { loginUser,createUserByGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const HandleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("login succes", user);
        e.target.reset();
        navigate("/");
        setLogin(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

     
  };

  const GoogleSignInHandler=(e)=>{
    e.preventDefault();
    createUserByGoogle()
    .then((userCredential) => {

      const user = userCredential.user;
      console.log('Registration success' , user)
      e.target.reset();
      navigate("/");
      setLogin(true);

    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  return (
    <div>
      <LoginForm HandleLogin={HandleLogin} GoogleSignInHandler={GoogleSignInHandler}></LoginForm>
    </div>
  );
};

export default Login;
