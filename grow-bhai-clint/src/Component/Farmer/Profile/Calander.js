import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Stats from './Stats';
import { useUserAuth } from '../../../Context/UserAuthContext';

const Calander = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [allOrders , setAllOrders] = useState([]);
    const [order, setOrders] = useState([]);
    const { user } = useUserAuth();
    useEffect(() => {
        fetch("http://localhost:5000/order")
          .then((res) => res.json())
          .then((data) => setAllOrders(data.filter((pd) => pd.farmer_id === user.email)));
      }, []);


      const handleSelect = (date) => {
        let filtered = allOrders.filter((pd) => {
          let productDate = new Date(pd.date); 
          console.log(productDate);
          return (
            productDate >= date.selection.startDate && productDate <= date.selection.endDate
          );
        });
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setOrders(filtered);
      };
      

      const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }
    return (
        <div>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <Stats order={order}></Stats>
        </div>
    );
};

export default Calander;