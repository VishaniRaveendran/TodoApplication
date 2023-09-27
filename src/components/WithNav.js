import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';


const WithNavBar = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default WithNavBar;
