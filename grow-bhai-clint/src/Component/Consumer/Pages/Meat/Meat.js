import React, { useEffect, useState } from 'react'
import MeatDetails from '../../Categories/Meat/MeatDetails';

function Meat() {
    const[allMeats,setAllMeats]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/addedProduct")
        .then(res=>res.json())
        .then(data=>setAllMeats(data.filter(pd=>pd.product_category ==="meat")))
    },[]);
  return (
    <div>
        <div className='pl-5 mt-10 mb-10 grid grid-cols-4 grid-auto-rows-1/3'>
          {
              allMeats.map(pd=><MeatDetails key={pd._id} allMeatCollection={pd}/>)
          }
      </div>
    </div>
    
  )
}

export default Meat
