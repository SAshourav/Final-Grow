import React, { useEffect, useState } from 'react'
import FishDetails from './FishDetails';

function Fish() {
    const[allFishes,setAllFishes]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/addedProduct")
        .then(res=>res.json())
        .then(data=>setAllFishes(data.filter(pd=>pd.product_category ==="fish")))
    },[]);
    console.log(allFishes);
  return (
    <div>
        <p>Product Category: Fishes</p>
        {
            allFishes.map(pd=><FishDetails key={pd._id} allFishesCollection={pd}/>)
        }
    </div>
  )
}

export default Fish

