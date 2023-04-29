import React from 'react';

const Profile = () => {
    const user = {
        name: "James Bond",
        member: "2-july-2022",
        income: 200000,
        Order: 10,
        Farms: ["Cow", "Rice", "Fish", "Poultry"]
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.guim.co.uk/img/media/ac3a7be3d4cdc0b7ed07b2eeb41c03df9e1887c6/1810_1937_3427_2056/master/3427.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=025145ce6c9529fef3075f8c0cb136d3" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='mr-10'>
                    <h2 className='font-bold text-3xl font-mono'>Welcome, {user.name} !</h2>
                    <p className='font-semibold'>Member Since : {user.member}</p>
                    <div className='mt-5 shadow-sm border-black border-2 p-4 items-center'>
                        <h2 className='text-xl'>List Of Farms: </h2>
                        <div className='flex '>
                            {
                                user.Farms.map(name => <h2 className='btn btn-outline ml-3'>{name}</h2>)
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;