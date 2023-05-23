import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../Context/UserAuthContext';

const NavBar = () => {
    const [search, setSearch] = useState('');
    const { logOut } = useUserAuth();
    const navigate = useNavigate();

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
        <div className="navbar bg-green-200 sticky top-0 z-50">
            <div className="flex-1">
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Grow Bangla</Link>
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
                    <div className="w-10 rounded-full">
                    <img src="https://media.gettyimages.com/id/517387700/photo/albert-einstein-sticks-out-his-tongue-when-asked-by-photographers-to-smile-on-the-occasion-of.jpg?s=612x612&w=gi&k=20&c=03f5Spe6HHz1HSru-yuePQ5ds0F8UKkB7X85GdYirh0=" alt=''/>
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