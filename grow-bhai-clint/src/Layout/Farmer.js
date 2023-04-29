import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Consumer/Footer/Footer';
import NavBar from '../Component/Farmer/NavBar/NavBar';

const Farmer = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Farmer;