import React from 'react';
import { useUserAuth } from '../../../Context/UserAuthContext';

const Stats = ({orders}) => {
    const {user} = useUserAuth();
    var total = 0;
    var count=0;
    var complete = 0;
    orders.forEach(element => {
        total = total + parseFloat(element.amount)
        count++;
        if(element.status === "recived"){
            complete++;
        }
    });
    var Remaining = count - complete;
    return (
        <div className="stats shadow bg-white mt-10">
  
            <div className="stat">
                <div className="stat-figure text-primary">
                </div>
                <div className="stat-title">Total Orders</div>
                <div className="stat-value text-primary">{count}</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                </div>
                <div className="stat-title">Total Income</div>
                <div className="stat-value text-primary">{total} Tk </div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                    <img src={user.photoURL} alt='profile'/>
                    </div>
                </div>
                </div>
                <div className="stat-value">{complete}</div>
                <div className="stat-title">Order Completed</div>
                <div className="stat-desc">{Remaining} Order Remaining</div>
            </div>
            
        </div>
    );
};

export default Stats;