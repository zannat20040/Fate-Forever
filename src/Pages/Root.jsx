import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const Root = () => {
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;