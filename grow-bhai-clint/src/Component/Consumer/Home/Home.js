import React from 'react';
import './Home.css';
import Coursole from '../Coursole/Coursole';
import Vegetables from '../Categories/Vegetables/Vegetables';
import Fish from '../Categories/Fish/Fish';
import Meat from '../Categories/Meat/Meat';
import Cart from '../Cart/Cart';
import Fruits from '../Categories/Fruits/Fruits';

const Home = () => {
    return (
        <div>
            <Coursole></Coursole>
            <div className='home mb-5'>
                <div className='products ml-10'>
                    <h2 className='font-popins text-3xl mt-3 mb-3'>Vegetable</h2>
                    <Vegetables/>

                    <h2  className='text-3xl mt-3 mb-3'>Fish</h2>
                    <Fish/>

                    <h2  className='text-3xl mt-3 mb-3'>Meat</h2>
                    <Meat></Meat>

                    <h2  className='text-3xl mt-3 mb-3'>Fruits</h2>
                    <Fruits></Fruits>
                </div>

                <div>
                    <Cart></Cart>
                </div>
                
            </div>
        </div>
    );
};

export default Home;