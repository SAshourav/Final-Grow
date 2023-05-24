import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [name , setName] = useState('');
    const navigate = useNavigate();


    const [user, setUser] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:5000/farmers')
                .then(res=> res.json())
                .then(data => setUser(data))
        },[])

        console.log(user);
        const addUser = (event) => {
            event.preventDefault();
            
            // Check if email is already used
            const isEmailUsed = user.some((userData) => userData.email === email);
            
            if (isEmailUsed) {
                alert("Email already used");
                return;
            }
            
            const farmers = {
                name,
                email,
                city,
                password
            }
            
            fetch('http://localhost:5000/farmers', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(farmers)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.acknowledged){
                        alert("Account Created !!");
                        navigate('/loginF')
                    }
                })
                .catch(err => console.error(err))
        }
    
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-green-700">
                            Grow Bangla
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={addUser}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={(e)=> setName(e.target.value)}
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1 border-2  border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={(e)=> setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4"> 
                            <label
                                htmlFor="location"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                City
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={(e)=> setCity(e.target.value)}
                                    type="text"
                                    name="location"
                                    className="block w-full mt-1 border-2  border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={(e)=> setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-2  border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <Link to='/loginF' className="text-purple-600 hover:underline" href="#">
                                Log in
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;