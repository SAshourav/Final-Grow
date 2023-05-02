import React, { useEffect, useState } from 'react'
import VegetablesDetails from './VegetablesDetails';

function Vegetables() {
    const[allVegetables,setVegetables]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/addedProduct")
        .then(res=>res.json())
        .then(data=>setVegetables(data.filter(pd=>pd.product_category ==="Vegitable")))
    },[]);
    console.log(allVegetables);
  return (
    <div className='flex ml-2'>
        {
            allVegetables.map(pd=><VegetablesDetails key={pd._id} allVegetablesCollection={pd}/>)
        }
    </div>
  )
}

export default Vegetables
