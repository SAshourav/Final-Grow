import React from 'react';
import { Link } from 'react-router-dom';
import SingleCartProduct from './SingleCartProduct';

const Cart = () => {
    return (
        <div className='cart mt-4 rounded-lg mr-2 p-4'>
                <h2 className='font-mono text-2xl mb-4'>Cart</h2>

                <div className="grid grid-cols-2 gap-2">
                    <SingleCartProduct></SingleCartProduct>
                    <SingleCartProduct></SingleCartProduct>
                </div>

                <div className="mt-6">
                    <Link to="/checkout" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Checkout</Link>
                </div>
            </div>
    );
};

export default Cart;