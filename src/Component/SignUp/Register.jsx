import React, { useContext, useState } from "react";
import RegisterForm from "./RegisterForm";
import { AuthContext } from "../../Auth Component/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const strongPass = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9])/;

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name,email,password)

    if (password.length < 6) {
      setRegisterError("Password should be contain 6 character");
      return;
    } else if (!strongPass.test(password)) {
      setRegisterError(
        "Password should contain uppercase and special character"
      );
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        navigate(location?.state ? location.state : "/");
        setRegisterSuccess("Your registration is successful");
        setLogin(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setRegisterError(errorMessage);
      });
  };

  return (
    <div>
      <RegisterForm
        handleRegister={handleRegister}
        registerError={registerError}
        registerSuccess={registerSuccess}
      ></RegisterForm>
    </div>
  );
};

export default Register;
