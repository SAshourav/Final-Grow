import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCartProduct from './SingleCartProduct';
import { useUserAuth } from '../../../Context/UserAuthContext';

const Cart = () => {
    const { user } = useUserAuth();
    const [cart, setCart] = useState([]);
    const [farmer_id, setFarmerId] = useState('');

    const fetchCart = () => {
        fetch("http://localhost:5000/cart")
            .then((res) => res.json())
            .then((data) => setCart(data.filter((pd) => pd.account === user.email)));
    };
    
    useEffect(() => {
        fetchCart();
    }, [user.email]);

    useEffect(() => {
        if (cart.length > 0) {
            setFarmerId(cart[0].farmer_id);
        }
    }, [cart]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchCart();
        }, 5000); // Adjust the polling interval as needed

        return () => {
            clearInterval(interval);
        };
    }, [user.email]);

    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice += item.quantity * item.price;
        });
        return totalPrice;
    };

    return (
        <div className="cart mt-4 rounded-lg mr-2 p-4">
            <h2 className="font-mono text-2xl mb-4">Cart</h2>

            <div className="grid grid-cols-2 gap-2">
                {cart.map((pd) => (
                    <SingleCartProduct key={pd._id} pd={pd}></SingleCartProduct>
                ))}
            </div>

            {cart.length > 0 && (
                <div className="mt-6">
                    <p className="text-xl mb-4 font-semibold">Total price: {getTotalPrice()}</p>
                    <Link
                        to={`/checkout?total=${getTotalPrice()}&farmer_id=${farmer_id}`}
                        className="btn btn-primary"
                    >
                        Checkout
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
