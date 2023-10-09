import React, { useContext } from 'react';
import { AuthContext } from '../Auth Component/AuthProvider';

const Profile = () => {
    const {user} =useContext(AuthContext)
    console.log(user)

    return (
        <div className='container mx-auto grid-cols-3 grid p-10 gap-9'>
            <div> 
                <h2 className='text-2xl font-bold capitalize text-rose-700'>{user?.displayName}</h2>
                <h2>{user?.email}</h2>
            </div>
            <div className='col-span-2'>
                <h2 className='bg-rose-700 p-3 text-white'>Your purchase</h2>
            </div>
        </div>
    );
};

export default Profile;