import React from 'react';
import './Home.css';
import SingleCard from '../SingleCard/SingleCard';
import Coursole from '../Coursole/Coursole';
import Vegetables from '../Categories/Vegetables/Vegetables';
import Fish from '../Categories/Fish/Fish';
import Meat from '../Categories/Meat/Meat';
import Cart from '../Cart/Cart';
import { useUserAuth } from '../../../Context/UserAuthContext';

const Home = () => {
    const {user} = useUserAuth();
    console.log(user);
    return (
        <div>
            <Coursole></Coursole>
            <div className='home mb-5'>
                <div className='products'>
                    <h2 className='text-3xl mb-3'>Fresh Picks</h2>
                    <div className='flex ml-2'>
                        <SingleCard></SingleCard>
                        <SingleCard></SingleCard>
                    </div>
                    <h2 className='text-3xl mt-3 mb-3'>Vegetable</h2>
                    <Vegetables/>

                    <h2 className='text-3xl mt-3 mb-3'>Fish</h2>
                    <Fish/>

                    <h2 className='text-3xl mt-3 mb-3'>Meat</h2>
                    <Meat></Meat>
                </div>

                <div>
                    <Cart></Cart>
                </div>
                
            </div>
        </div>
    );
};

export default Home;