import React from 'react';

const AddProduct = () => {
    const addProduct = () => {
        
    }
    return (
        <div>
            <div className='mb-18 w-3/4 mx-auto '>
                <form className=' gap-4 grid grid-cols-3'>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Product Name</label>
                        <input  type="text" placeholder="Type here" className="mb-2 input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Product Category</label>
                        <select className="select select-warning w-full max-w-xs">
                            <option disabled selected>Select Category</option>
                            <option>Vegetable</option>
                            <option>Fruits</option>
                            <option>Meat</option>
                            <option>Fish</option>
                            <option>Cooking</option>
                        </select>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Quantity</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Unit</label>
                        <select className="select select-warning w-full max-w-xs">
                            <option disabled selected>Select Unit</option>
                            <option>KG</option>
                            <option>Liter</option>
                            <option>Piece</option>
                            <option>Dorzon</option>
                        </select>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Unit Price</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Description</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                </form>
                <button onClick={addProduct} type="submit" class="mt-5 btn btn-primary">Add Now</button>
            </div>
        </div>
    );
};

export default AddProduct;