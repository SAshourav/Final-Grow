import React, { useEffect, useState } from 'react';
import VegetablesDetails from './VegetablesDetails';
import { Link } from 'react-router-dom';

function Vegetables() {
  const [allVegetables, setVegetables] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addedProduct")
      .then(res => res.json())
      .then(data => setVegetables(data.filter(pd => pd.product_category === "Vegitable")))
  }, []);


  return (
        <div className=' mb-10 grid grid-cols-3 grid-auto-rows-1/3'>
          {allVegetables.map(pd => <VegetablesDetails key={pd._id} allVegetablesCollection={pd} />)}
        </div>
  );
}

export default Vegetables;

