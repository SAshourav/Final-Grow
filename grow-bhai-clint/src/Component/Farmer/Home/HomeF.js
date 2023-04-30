import React, { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import SingleProduct from './SingleProduct';




const HomeF = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addedproduct')
            .then(res=> res.json())
            .then(data => setProduct(data))
    },[])
    return (
        <div>
            <h2 className='text-xl font-semibold font-mono'>Add Product To Your Store</h2>
            <div className='ml-32 mt-10 mb-10 flex'>
                <div className='mb-10'>
                    <img className='border-2 p-28' src="" alt="Upload" />
                    <input type="file" className="absolute left-28 mt-2 file-input file-input-bordered file-input-accent file-input-sm " />
                </div>
                <div>
                    <AddProduct></AddProduct>
                </div>
            </div>
            <h2 className='text-xl font-semibold font-mono'>Product Available In Your Store</h2>
            <div className='ml-5 mt-10 grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <SingleProduct
                    key={product._id}
                    product = {product}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default HomeF;