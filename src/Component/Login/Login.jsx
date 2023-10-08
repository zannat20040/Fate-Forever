import React from 'react';
import auth from '../../../Firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from './LoginForm';

const Login = () => {
   
    
      const HandleLogin = (e) => {
        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("login succes", user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            
          });
      };
    
      return (
        <div>
          <LoginForm HandleLogin={HandleLogin} ></LoginForm>
        </div>
      );
};

export default Login;