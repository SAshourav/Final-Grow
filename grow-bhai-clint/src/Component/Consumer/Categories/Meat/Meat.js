import React, { useEffect, useState } from 'react'
import MeatDetails from './MeatDetails';

function Meat() {
    const[allMeats,setAllMeats]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/addedProduct")
        .then(res=>res.json())
        .then(data=>setAllMeats(data.filter(pd=>pd.product_category ==="meat")))
    },[]);
    console.log(allMeats);
  return (
    <div>
        <p>Product Category: Meats</p>
        {
            allMeats.map(pd=><MeatDetails key={pd._id} allMeatCollection={pd}/>)
        }
    </div>
  )
}

export default Meat
