import React, { useState } from 'react';
import ProductDetails from './ProductDetails';

const OrderSingle = ({ pd }) => {
    const { _id, amount, DetailedProduct, paymentMethod} = pd;
    const [status, setStatus] = useState(pd.status);

    const handleUpdateStatus = async () => {
        try {
            const response = await fetch(`http://localhost:5000/order/${pd._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });
    
            if (response.ok) {
                console.log('Order status updated successfully');
            } else {
                console.log('Failed to update order status');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Order Id: {_id}</h2>
                <p>Total Amount: {amount}</p>
                <div className='border-2 rounded'>
                    <h2>Product Details</h2>
                    {DetailedProduct && DetailedProduct.length > 0 ? (
                        <ProductDetails detailedProduct={DetailedProduct} />
                    ) : (
                        <p>No detailed product available.</p>
                    )}
                </div>
                <p>Payment Method : {paymentMethod}</p>
                <div className="card-actions justify-end">
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="select select-bordered"
                    >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="send">Send</option>
                    </select>
                    <button className="btn btn-primary" onClick={handleUpdateStatus}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSingle;


