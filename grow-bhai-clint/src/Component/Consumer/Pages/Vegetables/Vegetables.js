import React, { useEffect, useState } from 'react';
import VegetablesDetails from '../../Categories/Vegetables/VegetablesDetails';

function Vegetables() {
  const [allVegetables, setVegetables] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addedProduct")
      .then(res => res.json())
      .then(data => setVegetables(data.filter(pd => pd.product_category === "vegitable")))
  }, []);


  return (
        <div className='mt-10 mb-10 grid grid-cols-4 grid-auto-rows-1/3'>
          {allVegetables.map(pd => <VegetablesDetails key={pd._id} allVegetablesCollection={pd} />)}
        </div>
  );
}

export default Vegetables;

