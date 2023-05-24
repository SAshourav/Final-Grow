import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginF = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/farmers')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();

        // Find the user with the provided email
        const foundUser = user.find((userData) => userData.email === email);

        if (!foundUser) {
            alert('Invalid email');
            return;
        }

        // Check if the password matches
        if (foundUser.password === password) {
            setLoggedInUser(foundUser.email);
        } else {
            alert('Invalid password')
        }
    };

    useEffect(() => {
        // Log the loggedInUser value after it has been updated
        if (loggedInUser) {
            navigate(`/farmer?user=${encodeURIComponent(JSON.stringify(loggedInUser))}`);
        }
    }, [loggedInUser, navigate]);
    

    return (
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e)=> setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e)=> setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link
                        to="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-6">
                        <button onClick={handleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to="/registration"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
        
    );
};


export default LoginF;