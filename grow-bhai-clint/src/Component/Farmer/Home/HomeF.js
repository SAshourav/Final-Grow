import React, { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import SingleProduct from './SingleProduct';
import { useUserAuth } from '../../../Context/UserAuthContext';

const HomeF = () => {
    const { user } = useUserAuth();
    const [products, setProduct] = useState([]);

    const fetchProducts = () => {
        fetch('http://localhost:5000/addedproduct')
            .then(res => res.json())
            .then(data => setProduct(data.filter((pd) => pd.farmer_id === user.email)));
    };

    useEffect(() => {
        fetchProducts();
    }, [user.email]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchProducts();
        }, 5000); // Adjust the polling interval as needed

        return () => {
            clearInterval(interval);
        };
    }, [user.email]);

    return (
        <div>
            <h2 className='text-xl font-semibold font-mono'>Add Product To Your Store</h2>
            <div className='ml-32 mt-10 mb-10'>
                <AddProduct user={user.email}></AddProduct>
            </div>
            <h2 className='text-xl font-semibold font-mono'>Product Available In Your Store</h2>
            <div className='ml-5 mt-10 grid md:grid-cols-3 lg:grid-cols-3'>
                {products.map(product => (
                    <SingleProduct key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomeF;

