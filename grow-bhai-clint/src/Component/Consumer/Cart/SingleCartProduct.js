import React from 'react';

const SingleCartProduct = ({pd}) => {
    const {name, quantity, price} = pd;
    const tPrice = quantity*price;
    return (
        <div className="flex items-center border-2 border-gray-200 p-2 rounded-lg">
            <div className="w-20 h-20">
                <p>{name}</p>
                <button className='border px-2 rounded-full hover:bg-red-500'>X</button>
            </div>
            <div className="ml-3">
                <p className="text-gray-500">Quantity: {quantity}</p>
                <p className="text-gray-500">Price: {tPrice}</p>
            </div>
        </div>
    );
};

export default SingleCartProduct;