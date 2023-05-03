import React from 'react';
import { useUserAuth } from '../../../Context/UserAuthContext';

const Account = () => {
    const orders = [
        {
            id: '123',
            date: 'April 12, 2023',
            total: 'Tk 3000',
            status: 'Delivered'
        },
        {
            id: '456',
            date: 'April 10, 2023',
            total: 'Tk 1500',
            status: 'Pending'
        }
    ];

    const user2 = {
        image: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        number: '0130319899',
        address: "123 Main St"
    };

    const {user} = useUserAuth();

    return (
        <div className="bg-gray-100 pt-36 ">
            <h2 className='text-3xl'>Hey, {user.displayName} !!</h2>
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <p className="text-gray-600">{user2.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold">Order History</h2>
                            <button className="text-blue-500 hover:text-blue-700">View All</button>
                        </div>
                        {orders.length > 0 ? (
                            <div className="divide-y divide-gray-200">
                                {orders.map(order => (
                                    <div className="py-4" key={order.id}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-600">{order.date}</p>
                                                <p className="text-gray-800 font-semibold">Order Id: {order.id}</p>
                                            </div>
                                            <div>
                                                <p className={`text-sm font-semibold ${order.status === 'Delivered' ? 'text-green-500' : 'text-yellow-500'}`}>{order.status}</p>
                                                <p className="text-gray-600">{order.total}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">You have no orders yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;

