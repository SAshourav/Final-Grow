import React from 'react';
import { Link } from 'react-router-dom';
import logo  from "../../Images/logo.png";
import { useUserAuth } from '../../../Context/UserAuthContext';

const NavBar = () => {
    const { logOut, user } = useUserAuth();

    const handleSingout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 ">
                <Link to='/farmer'><img className='w-52' src={logo} alt="" /></Link>
            </div>
            <div className="flex-none gap-2">
                <div className='mr-10'>
                    <Link className='btn btn-ghost text-lg' to='/farmer/order'>Order</Link>
                </div>
                <div className='mr-10'>
                    <Link className='btn btn-ghost text-lg' to='/home'>Consumer</Link>
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {user && user.photoURL && <img src={user.photoURL} alt="" />}
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <Link to="/farmer/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li><Link onClick={handleSingout} to='/login'>Logout</Link></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;