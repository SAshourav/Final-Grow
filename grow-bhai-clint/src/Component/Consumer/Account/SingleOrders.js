import React from 'react';

const SingleOrders = ({ pd }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-96">
            <h2 className="text-lg font-semibold">Order ID: {pd._id}</h2>
            <p className="text-blue-700">Order Details:</p>
            <p className="text-gray-700">Total Amount: {pd.amount}</p>
            <p className="text-gray-700">Payment Method: {pd.paymentMethod}</p>
            <p className="text-gray-700">Order Status: <span className='text-red-700'>{pd.status}</span></p>
        </div>
    );
};

export default SingleOrders;
