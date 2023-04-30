import React from 'react';
import Modal from './Modal';

const SingleProduct = ({product}) => {
    const {img,product_name,quantity,unit,price,description,sold} = product;
    const income = sold*price;
    return (
        <div className=" bg-white card card-compact w-96 bg-base-100 shadow-xl mr-2">
            <figure><img src={img} alt="Shoes" /></figure>
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
                    <Modal></Modal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;