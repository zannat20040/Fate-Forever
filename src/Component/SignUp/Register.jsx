import React, { useContext, useState } from "react";
import RegisterForm from "./RegisterForm";
import { AuthContext } from "../../Auth Component/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // const [registerSuccess, setRegisterSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const strongPass = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9])/;

    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (password.length < 6) {
      toast.error("Password length should be more than 6 character", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else if (!strongPass.test(password)) {

      toast.error("Password should be contains capital letter and special character must", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

  
      return;
    }


    createUser(email, password)
      .then(() => {
        e.target.reset();

        toast.success("Resgister successfully", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        
        navigate(location?.state ? location.state : "/");
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

  return (
    <div>
      <ToastContainer></ToastContainer>

      <RegisterForm
        handleRegister={handleRegister}
      
      ></RegisterForm>
    </div>
  );
};

export default Register;
