import React from 'react';

const ProductDetails = ({ detailedProduct }) => {
    return (
        <div >
            {detailedProduct.map((product, index) => (
                <div className='flex' key={index}>
                    <p>Product Name: {product.name}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductDetails;
