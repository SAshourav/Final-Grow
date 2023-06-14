import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import FruitDetails from '../../Categories/Fruits/FruitDetails';

function Fruits() {
    const [allFruits, setAllFruits] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addedProduct")
            .then(res => res.json())
            .then(data => setAllFruits(data.filter(pd => pd.product_category === "fruits")))
    }, []);


  
    return (
      <div>
        <div className='pl-5 mt-10 mb-10 grid grid-cols-4 grid-auto-rows-1/3'>
            {
                allFruits.map(pd => <FruitDetails key={pd._id} allFruitsCollection={pd} />)
            }
        </div>
        <Link className='mt-10 border py-2 px-5 font-bold bg-green-300 rounded-lg hover:bg-slate-300' to='/fruits'>See All</Link>
      </div>
        
    ) 
}

export default Fruits;
