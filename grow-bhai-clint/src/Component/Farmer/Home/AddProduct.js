import React from 'react';

const AddProduct = ({user}) => {
    const addProduct = (event) => {
        const unitValue = document.getElementById("unit")?.value;
        const categryValue = document.getElementById("category")?.value;
        event.preventDefault();
        const form = event.target;
        const product_name = form.productName.value;
        console.log(product_name);
        const product_category =`${categryValue}`;
        const quantity = form.quantity.value;
        const unit = unitValue;
        const price = form.price.value;
        const description = `${form.description.value}`;
        const farmer_id = user;
        const sold = 10

        const product = {
            farmer_id,
            product_name,
            product_category,
            quantity,
            unit,
            price,
            description,
            sold
        }
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    alert("Order Added");
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className='mb-18 w-3/4 mx-auto '>
                <form onSubmit={addProduct} className='flex'>
                    <div className='mb-10'>
                        <img className='border-2 p-28 mr-10' src="" alt="Upload" />
                        <input type="file" className="mr- mt-2 file-input file-input-bordered file-input-accent file-input-sm " />
                    </div>
                    <div className='gap-4 grid grid-cols-3'>
                        <div className='flex flex-col mx-auto'>
                            <label className='text-xl mb-2' htmlFor="">Product Name</label>
                            <input name='productName'  type="text" placeholder="Type here" className="mb-2 input input-bordered input-warning w-full max-w-xs" />
                        </div>
                        <div className='flex flex-col mx-auto'>
                            <label className='text-xl mb-2' htmlFor="">Product Category</label>
                            <select id='category' className="select select-warning w-full max-w-xs" defaultValue="Select Category">
                                <option value="Select Category" disabled>Select Category</option>
                                <option value="vegitable">Vegetable</option>
                                <option value="fruits">Fruits</option>
                                <option value="meat">Meat</option>
                                <option value="fish">Fish</option>
                                <option value="cooking">Cooking</option>
                            </select>

                        </div>
                        <div className='flex flex-col mx-auto'>
                            <label className='text-xl mb-2' htmlFor="">Quantity</label>
                            <input name='quantity' type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                        </div>
                        <div className='flex flex-col mx-auto'>
                            <label className='text-xl mb-2' htmlFor="">Unit</label>
                            <select id='unit' className="select select-warning w-full max-w-xs" defaultValue="Select Unit">
                                <option value="Select Unit" disabled>Select Unit</option>
                                <option value="kg">KG</option>
                                <option value="liter">Liter</option>
                                <option value="piece">Piece</option>
                                <option value="dorzon">Dorzon</option>
                            </select>
                        </div>
                        <div className='flex flex-col mx-auto'>
                            <label className='text-xl mb-2' htmlFor="">Unit Price</label>
                            <input name='price' type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                        </div>
                        <div className='flex flex-col mx-auto'>
                            <label className='text-xl mb-2' htmlFor="">Description</label>
                            <input name='description' type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                        </div>
                        <button type="submit" className="mt-5 btn btn-primary">Add Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;