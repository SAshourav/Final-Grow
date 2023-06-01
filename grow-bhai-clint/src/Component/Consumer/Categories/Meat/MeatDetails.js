import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../../../../Context/UserAuthContext';

function MeatDetails({ allMeatCollection }) {
  const { product_name, description, _id ,price,farmer_id } = allMeatCollection;

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  const {user} = useUserAuth();

  const [cart, setCart] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/cart")
        .then((res) => res.json())
        .then((data) => setCart(data.filter((pd) => pd.account === user.email)));
    }, []);

  const addToCart = () =>{
    if(cart){
      if(cart[0].farmer_id !== farmer_id){
        alert("Must be from the same Provider/ farmer");
      }else{
        let productToAdd = {
          name: product_name,
          product_id: _id,
          account: user.email,
          quantity: quantity,
          price: parseFloat(price),
          farmer_id 
        }
    
        fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(productToAdd)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(user);
                    if(data.acknowledged){
                        alert("Added To cart");
                    }
                })
                .catch(err => console.error(err))
      }
    }else{
      let productToAdd = {
        name: product_name,
        product_id: _id,
        account: user.email,
        quantity: quantity,
        price: parseFloat(price),
        farmer_id 
      }
  
      fetch('http://localhost:5000/cart', {
              method: 'POST',
              headers: {
                  'content-type' : 'application/json'
              },
              body: JSON.stringify(productToAdd)
          })
              .then(res => res.json())
              .then(data => {
                  console.log(user);
                  if(data.acknowledged){
                      alert("Added To cart");
                  }
              })
              .catch(err => console.error(err))
    }
    
  }

  return (
    <div className="bg-white card card-compact w-96 bg-base-100 shadow-xl mr-2">
      <figure>
        <img
          src="https://distan.sukabumikota.go.id/wp-content/uploads/2016/01/buah-tomat.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <div className="text-lg font-bold mb-2">Tk. {price}</div>
        <p>{description}</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
            checked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
          />
        </div>
        <div className="form-control">
          <label className="label">
            Quantity:
            <input
              type="number"
              className="input input-bordered"
              value={quantity}
              min="1"
              max="10"
              onChange={handleQuantityChange}
            />
          </label>
        </div>
        <div className="card-actions justify-end">
          <button onClick={addToCart} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MeatDetails;

