import React from 'react';
import AddProduct from './AddProduct';
import SingleProduct from './SingleProduct';

const products = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRyhPwFeDekvLZlMo1JEht6DPseTNRj7FYf_hcEXphKcaLZ0yBFE-KTt4CUop5799F7KA&usqp=CAU',
        name: "Fish",
        Quantity: 5,
        Unit: "Kg",
        Sold: 10,
        UnitPrice: 200
    },
    {
        img: 'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
        name: "Beef",
        Quantity: 5,
        Unit: "Kg",
        Sold: 10,
        UnitPrice: 200
    }
]

const HomeF = () => {
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
                    product = {product}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default HomeF;