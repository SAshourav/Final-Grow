import React from 'react';
import Modal from './Modal';

const SingleProduct = ({product}) => {
    const {img,name,Quantity,Unit,UnitPrice,Sold} = product;
    const income = Sold*UnitPrice;
    return (
        <div className=" bg-white card card-compact w-96 bg-base-100 shadow-xl mr-2">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Stock: {Quantity} {Unit}</p>
                <p>Per Unit Price: {UnitPrice}</p>
                <p>Item Sold: {Sold}</p>
                <p>Income Generated: {income}</p>
                <p>If a dog chews shoes whose shoes does he choose?</p>
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