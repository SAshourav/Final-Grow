import React, { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import SingleProduct from './SingleProduct';
import { Navigate, useLocation } from 'react-router-dom';

const HomeF = () => {
    const location = useLocation();
    const loggedInUser = location.search ? JSON.parse(decodeURIComponent(location.search.split('=')[1])) : null;

    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addedproduct')
            .then(res => res.json())
            .then(data => setProduct(data.filter((pd) => pd.farmer_id === loggedInUser)));
    }, [loggedInUser]);



    if (!loggedInUser) {
        return <Navigate to="/loginF" />;
    }

    return (
        <div>
            <h2 className='text-xl font-semibold font-mono'>Add Product To Your Store</h2>
            <div className='ml-32 mt-10 mb-10'>
                <AddProduct loggedInUser={loggedInUser}></AddProduct>
            </div>
            <h2 className='text-xl font-semibold font-mono'>Product Available In Your Store</h2>
            <div className='ml-5 mt-10 grid md:grid-cols-2 lg:grid-cols-3'>
                {products.map(product => (
                    <SingleProduct key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomeF;
