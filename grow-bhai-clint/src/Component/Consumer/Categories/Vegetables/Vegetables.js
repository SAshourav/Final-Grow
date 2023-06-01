import React, { useEffect, useState } from 'react';
import VegetablesDetails from './VegetablesDetails';
import { Link } from 'react-router-dom';

function Vegetables() {
  const [allVegetables, setVegetables] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addedProduct")
      .then(res => res.json())
      .then(data => setVegetables(data.filter(pd => pd.product_category === "vegitable")))
  }, []);

  const limitedVegitable = allVegetables.slice(0, 6);

  return (
    <div>
        <div className='pt-4 mb-10 grid grid-cols-2 grid-auto-rows-1/3'>
          {limitedVegitable.map(pd => <VegetablesDetails key={pd._id} allVegetablesCollection={pd} />)}
        </div>
        <Link className='border py-2 px-5 bg-green-500 rounded-lg hover:bg-slate-300' to='/vegitable'>See All</Link>
    </div>
    
  );
}

export default Vegetables;

