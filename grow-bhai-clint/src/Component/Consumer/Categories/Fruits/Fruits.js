import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import FruitDetails from './FruitDetails';

function Fruits() {
    const [allFruits, setAllFruits] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addedProduct")
            .then(res => res.json())
            .then(data => setAllFruits(data.filter(pd => pd.product_category === "fruits")))
    }, []);

    const limitedFruits = allFruits.slice(0, 4); // get the first 6 fishes

  
    return (
      <div>
        <div className='mb-10 grid grid-cols-2 grid-auto-rows-1/3'>
            {
                limitedFruits.map(pd => <FruitDetails key={pd._id} allFruitsCollection={pd} />)
            }
        </div>
        <Link className='mt-10 border py-2 px-5 bg-green-500 rounded-lg hover:bg-slate-300' to='/fish'>See All</Link>
      </div>
        
    ) 
}

export default Fruits;
