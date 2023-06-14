import React, { useEffect, useState } from 'react'
import MeatDetails from './MeatDetails';
import { Link } from 'react-router-dom';

function Meat() {
    const[allMeats,setAllMeats]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/addedProduct")
        .then(res=>res.json())
        .then(data=>setAllMeats(data.filter(pd=>pd.product_category ==="meat")))
    },[]);
    const limitedMeat = allMeats.slice(0, 6);
  return (
    <div>
        <div className='t-4 mb-10 grid grid-cols-3 grid-auto-rows-1/3'>
          {
              limitedMeat.map(pd=><MeatDetails key={pd._id} allMeatCollection={pd}/>)
          }
      </div>
      <Link className='border py-2 px-5 font-bold bg-green-300 rounded-lg hover:bg-slate-300' to='/meat'>See All</Link>
    </div>
    
  )
}

export default Meat
