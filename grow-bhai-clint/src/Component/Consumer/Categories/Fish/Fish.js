import React, { useEffect, useState } from 'react'
import FishDetails from './FishDetails';
import { Link } from 'react-router-dom';

function Fish() {
    const [allFishes, setAllFishes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addedProduct")
            .then(res => res.json())
            .then(data => setAllFishes(data.filter(pd => pd.product_category === "fish")))
    }, []);

    const limitedFishes = allFishes.slice(0, 4); // get the first 6 fishes

  
    return (
      <div>
        <div className='mb-10 grid grid-cols-3 grid-auto-rows-1/3'>
            {
                limitedFishes.map(pd => <FishDetails key={pd._id} allFishesCollection={pd} />)
            }
        </div>
        <Link className='mt-10 border py-2 px-5 font-bold bg-green-300 rounded-lg hover:bg-slate-300' to='/fish'>See All</Link>
      </div>
        
    ) 
}

export default Fish;

