import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../../../Context/UserAuthContext';
import OrderSingle from './OrderSingle';

const Order = () => {
    const { user } = useUserAuth();
    const [orders , setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/order")
          .then((res) => res.json())
          .then((data) => setOrders(data.filter((pd) => pd.farmer_id === user.email)));
      }, []);
    return (
        <div className='grid lg: grid-cols-4 ml-10 '>
                {
                    orders.map((pd) => (
                        <OrderSingle key={pd._id} pd={pd}></OrderSingle>
                      ))
                }
        </div>
    );
};

export default Order;