import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../../../Context/UserAuthContext';
import SingleOrders from './SingleOrders';

const Account = () => {
    const [orders, setOrders] = useState([])
    const {user} = useUserAuth();

    useEffect(() => {
        fetch("http://localhost:5000/order")
          .then((res) => res.json())
          .then((data) => setOrders(data.filter((pd) => pd.email === user.email)));
      }, []);

    

    return (
        <div className="bg-gray-100 pt-36 ">
            <h2 className='text-3xl'>Hey, {user.displayName} !!</h2>
            <div className="container mx-auto py-12">
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Account Details</h2>
                            <button className="text-blue-500 hover:text-blue-700">Edit</button>
                        </div>
                        <div className="flex items-center mt-6">
                            <div className="relative w-20 h-20 overflow-hidden rounded-full">
                                <img className="absolute h-full w-full object-cover" src={user.photoURL} alt="Avatar" />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold">{user.displayName}</h3>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="text-gray-600">{user.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
            </div>
            <h1 className='font-mono font-bold text-3xl'>Order List</h1>
            <div className='order-list grid grid-cols-4 gap-2 ml-10 mb-3'>
                {
                    orders.map((pd) => (
                        <SingleOrders key={pd._id} pd={pd}></SingleOrders>
                      ))
                }
            </div>
        </div>
    );
};

export default Account;

