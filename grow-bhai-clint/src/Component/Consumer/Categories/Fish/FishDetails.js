import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../../../../Context/UserAuthContext';

function FishDetails({ allFishesCollection }) {
  const { product_name, description, _id, price, farmer_id,image } = allFishesCollection;

  var filename = image;
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch the data URL for the image
    const url = `http://localhost:5000/image/${filename}`
    console.log(url)
    fetch(url)
      .then(response => response.text())
      .then(dataUrl => {
        setImageUrl(dataUrl);
      })
      .catch(error => {
        console.error(error);
      });
  }, [filename]);

  const [quantity, setQuantity] = useState(1);

  const {user} = useUserAuth();

  const [cart, setCart] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/cart")
        .then((res) => res.json())
        .then((data) => setCart(data.filter((pd) => pd.account === user.email)));
    }, []);


  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const addToCart = () =>{
    if(cart.length !== 0){
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
    <div className="bg-white card card-compact w-96 bg-base-100 shadow-xl mr-2 mb-4">
      <figure>
        <img src={imageUrl} alt={product_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <div className="text-lg font-bold mb-2">Tk. {price}</div>
        <p>{description}</p>
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

export default FishDetails;
