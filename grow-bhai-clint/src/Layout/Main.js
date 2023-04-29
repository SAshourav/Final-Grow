import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Consumer/Footer/Footer';
import NavBar from '../Component/Consumer/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <hr />
            <Footer></Footer>
        </div>
    );
};

export default Main;