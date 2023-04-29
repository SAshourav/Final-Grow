import React from 'react';

const Checkout = () => {
    return (
        <div>
            <h2 className='mt-5 mb-5 text-3xl'>Time to checkout your items !</h2>
            <div className='py-10 mb-18  w-3/4 mx-auto border-2 shadow-lg'>
                <form className=' grid grid-cols-2'>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Enter Your Name</label>
                        <input  type="text" placeholder="Type here" className="mb-2 input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Your Number</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Your Mail</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Your Address</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full input-lg max-w-xs" />
                    </div>
                </form>
                <div className='mt-4'>
                    <p className='mt-5 mb-5 text-lg font-bold'>Payment Method</p>
                    <div className='ml-52 w-40 flex items-center border-2 shadow-md p-2 rounded-md'>
                        <input type="radio" name="paymentMethod" className="mr-2" checked />
                        <p>Online Payment</p>
                    </div>
                    <div className='ml-52 w-52 flex items-center mt-2 border-2 shadow-md p-2 rounded-md'>
                        <input type="radio" name="paymentMethod" className="mr-2" />
                        <p>Cash on Delivery</p>
                    </div>
                </div>
                <a href='http://localhost/payment/payment.php' type="submit" class="mt-5 btn btn-primary">Pay Now</a>
            </div>
            
        </div>
    );
};

export default Checkout;
