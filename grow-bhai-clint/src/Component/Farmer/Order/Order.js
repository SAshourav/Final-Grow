import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../../../Context/UserAuthContext';

const Order = () => {
    const { user } = useUserAuth();
    const [orders , setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/order")
          .then((res) => res.json())
          .then((data) => setOrders(data.filter((pd) => pd.email === user.email)));
      }, []);
    return (
        <div>
            <h2>This is the order page</h2>
        </div>
    );
};

export default Order;