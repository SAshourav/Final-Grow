import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../Context/UserAuthContext';

const Checkout = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const total = queryParams.get('total');

    const {user} = useUserAuth();

    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState('online');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    }

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const number = form.number.value;
        const email = user.email;
        const address = form.address.value;
        const amount = total;

        const order = {
            name,
            number,
            email,
            address,
            paymentMethod,
            amount
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    deleteCartProducts(email);
                    if(paymentMethod === 'online'){
                        window.location.href = `http://localhost/payment/payment.php?total=${total}`;
                    }else{
                        alert("Order Placed Successfully !")
                        navigate('/home');
                        form.reset();
                    }  
                }
            })
            .catch(err => console.error(err))
    }

    const deleteCartProducts = (email) => {
        fetch(`http://localhost:5000/cart/${email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2 className='mt-5 mb-5 text-3xl'>Time to checkout your items !</h2>
            <div className='py-10 mb-18  w-3/4 mx-auto border-2 shadow-lg'>
                <form onSubmit={handleOrder} className=' grid grid-cols-2'>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Enter Your Name</label>
                        <input name='name' type="text" placeholder="Type here" className="mb-2 input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Your Number</label>
                        <input name='number' type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Your Address</label>
                        <input name='address' type="text" placeholder="Type here" className="input input-bordered input-warning w-full input-lg max-w-xs" />
                    </div>

                    <div className='mt-4'>
                        <p className='mt-5 mb-5 text-lg font-bold'>Payment Method</p>
                        <p className='font-medium'>Ammount Pay : {total}</p>
                        <div className='ml-52 w-40 flex items-center border-2 shadow-md p-2 rounded-md'>
                            <input type="radio" name="paymentMethod" value="online" checked={paymentMethod === 'online'} onChange={handlePaymentMethodChange} className="mr-2" />
                            <p>Online Payment</p>
                        </div>
                        <div className='ml-52 w-52 flex items-center mt-2 border-2 shadow-md p-2 rounded-md'>
                            <input type="radio" name="paymentMethod" value="cash" checked={paymentMethod === 'cash'} onChange={handlePaymentMethodChange} className="mr-2" />
                            <p>Cash on Delivery</p>
                        </div>
                    </div>

                    <button type="submit" class="mt-5 btn btn-primary">Pay Now</button>
                </form>
                
                
            </div>
            
        </div>
    );
};

export default Checkout;
