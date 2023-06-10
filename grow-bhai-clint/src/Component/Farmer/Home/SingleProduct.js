import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const SingleProduct = ({ product }) => {
  const { product_name, quantity, unit, price, description, sold, image, _id } = product;
  const income = sold * price;
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch the data URL for the image
    const url = `http://localhost:5000/image/${image}`;
    fetch(url)
      .then(response => response.text())
      .then(dataUrl => {
        setImageUrl(dataUrl);
      })
      .catch(error => {
        console.error(error);
      });
  }, [image]);

  const deleteProduct = () => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      fetch(`http://localhost:5000/deleteProduct/${_id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => console.error(err));
    }
  };


  return (
    <div className="bg-white card card-compact w-96 bg-base-100 shadow-xl mr-2 mb-3">
      <figure>
        <img src={imageUrl} alt={product_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <p>Stock: {quantity} {unit}</p>
        <p>Per Unit Price: {price}</p>
        <p>Item Sold: {sold}</p>
        <p>Income Generated: {income}</p>
        <p>{description}</p>
        <div className="rating">
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
        </div>
        <div className="card-actions justify-end">
          <button onClick={deleteProduct} className="btn btn-outline btn-success">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
