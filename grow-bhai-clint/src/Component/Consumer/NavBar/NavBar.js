import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../Context/UserAuthContext';

const NavBar = () => {
    const [search, setSearch] = useState('');
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    console.log(user);

    const handleSingout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error.message);
        }
    }


    const handleSearchKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            navigate(`/search?query=${search}`);
        }
    }
    return (
        <div className="navbar bg-green-300 sticky top-0 z-50">
            <div className="flex-1">
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Grow Bangla</Link>
            </div>
            <div className="flex-1">
                <Link to='/farmer' className="btn btn-ghost normal-case text-xl">Farmer</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleSearchKeyPress}
                    />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="border border-black w-10 rounded-full">
                    {user && user.photoURL && <img src={user.photoURL} alt="" />}
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <Link to="/account" className="justify-between">
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