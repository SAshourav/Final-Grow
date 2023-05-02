import React from 'react';

const SingleCartProduct = () => {
    return (
        <div className="flex items-center border-2 border-gray-200 p-2 rounded-lg">
            <div className="w-20 h-20 bg-gray-300 rounded-full">
                <p>Photo</p>
            </div>
            <div className="ml-3">
                <p className="font-bold text-lg">Tomato</p>
                <p className="text-gray-500">Quantity: 2</p>
            </div>
        </div>
    );
};

export default SingleCartProduct;