import React from 'react';
import { Link } from 'react-router-dom';
import logo  from "../../Images/logo.png";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 ">
                <Link to='/farmer'><img className='w-52' src={logo} alt="" /></Link>
            </div>
            <div className="flex-none gap-2">
                <div className='mr-5'>
                    <Link className='btn btn-ghost text-lg' to='/farmer/order'>Order</Link>
                </div>
                <div className='mr-5'>
                    <Link className='btn btn-ghost text-lg' to='/home'>Consumer</Link>
                </div>
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://media.gettyimages.com/id/517387700/photo/albert-einstein-sticks-out-his-tongue-when-asked-by-photographers-to-smile-on-the-occasion-of.jpg?s=612x612&w=gi&k=20&c=03f5Spe6HHz1HSru-yuePQ5ds0F8UKkB7X85GdYirh0=" alt=''/>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <Link to="/farmer/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li><Link to='/login'>Logout</Link></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;