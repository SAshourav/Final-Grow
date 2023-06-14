import React from 'react';
import { useUserAuth } from '../../../Context/UserAuthContext';

const Profile = () => {
    const { user } = useUserAuth();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {user && user.photoURL && <img src={user.photoURL} alt="" />}
                <div className='mr-10'>
                    <h2 className='font-bold text-3xl font-mono'>Welcome, {user.displayName} !</h2>
                    <p className='font-semibold'>Registerd Email : {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;