import React from 'react';
import './Home.css';
import SingleCard from '../SingleCard/SingleCard';
import Coursole from '../Coursole/Coursole';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Coursole></Coursole>
            <div className='home'>
                <div className='products'>
                    <h2 className='text-3xl mb-3'>Fresh Picks</h2>
                    <div className='flex ml-2'>
                        <SingleCard></SingleCard>
                        <SingleCard></SingleCard>
                    </div>
                    <h2 className='text-3xl mb-3'>Vegetable</h2>
                    <SingleCard></SingleCard>
                    <h2 className='text-3xl mb-3'>Fish</h2>
                    <SingleCard></SingleCard>
                    <h2 className='text-3xl mb-3'>Meat</h2>
                    <SingleCard></SingleCard>
                </div>
            <div className='cart mt-4 rounded-lg mr-2 p-4'>
                <h2 className='font-mono text-2xl mb-4'>Cart</h2>

                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center border-2 border-gray-200 p-2 rounded-lg">
                        <div className="w-20 h-20 bg-gray-300 rounded-full">
                            <p>Photo</p>
                        </div>
                        <div className="ml-3">
                            <p className="font-bold text-lg">Tomato</p>
                            <p className="text-gray-500">Quantity: 2</p>
                        </div>
                    </div>
                    <div className="flex items-center border-2 border-gray-200 p-2 rounded-lg">
                        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                        <div className="ml-3">
                            <p className="font-bold text-lg">Mango</p>
                            <p className="text-gray-500">Quantity: 2</p>
                        </div>
                    </div>
                    <div className="flex items-center border-2 border-gray-200 p-2 rounded-lg">
                        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                        <div className="ml-3">
                            <p className="font-bold text-lg">Onion</p>
                            <p className="text-gray-500">Quantity: 1</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <Link to="/checkout" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Checkout</Link>
                </div>
            </div>

                <div className='w-40 mt-3 mb-3 ml-10'>
                    <div className="btn-group grid grid-cols-2">
                        <button className="btn btn-outline">Previous</button>
                        <button className="btn btn-outline">Next</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Home;