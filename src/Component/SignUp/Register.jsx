import React, { useContext } from 'react';
import RegisterForm from './RegisterForm';
import { AuthContext } from '../../Auth Component/AuthProvider';

const Register = () => {
  const {createUser} =useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(createUser)


    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(name,email,password)

    createUser(email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log('Registration success' , user)

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };

    return (
        <div>
            <RegisterForm handleRegister={handleRegister}></RegisterForm>
        </div>
    );
};

export default Register;