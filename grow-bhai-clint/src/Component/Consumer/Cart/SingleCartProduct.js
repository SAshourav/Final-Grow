import React from 'react';

const SingleCartProduct = ({pd}) => {
    const {account,_id,name, quantity, price} = pd;
    const singleCartDelete = () =>{
        fetch(`http://localhost:5000/cart/${account}/${_id}`, {
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log("Deleted")
            })
            .catch(err => console.error(err));
    }
    const tPrice = quantity*price;
    return (
        <div className="flex items-center border-2 border-gray-200 p-2 rounded-lg">
            <div className="w-20 h-20">
                <p>{name}</p>
                <button onClick={singleCartDelete} className='btn btn-outline btn-primary'>X</button>
            </div>
            <div className="ml-3">
                <p className="text-gray-500">Quantity: {quantity}</p>
                <p className="text-gray-500">Price: {tPrice}</p>
            </div>
        </div>
    );
};

export default SingleCartProduct;