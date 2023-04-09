import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <hr />
            <Outlet></Outlet>

        </div>
    );
};

export default Layout;