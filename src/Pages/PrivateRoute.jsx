import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth Component/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <p  className="loading loading-dots loading-sm flex justify-center"></p>
    }
    else if(user){
        return children
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;