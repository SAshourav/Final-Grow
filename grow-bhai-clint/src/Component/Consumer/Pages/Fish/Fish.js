import React, { useEffect, useState } from 'react'
import FishDetails from '../../Categories/Fish/FishDetails';

function Fish() {
    const [allFishes, setAllFishes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addedProduct")
            .then(res => res.json())
            .then(data => setAllFishes(data.filter(pd => pd.product_category === "fish")))
    }, []);

    return (
        <div className='pl-5 pt-4 mb-10 grid grid-cols-4 grid-auto-rows-1/3'>
            {
                allFishes.map(pd => <FishDetails key={pd._id} allFishesCollection={pd} />)
            }
        </div>
        
    ) 
}

export default Fish;
