import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const SingleProduct = ({ product }) => {
  const { product_name, quantity, unit, price, description, sold, image } = product;
  const income = sold * price;
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
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;