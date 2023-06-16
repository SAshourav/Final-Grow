import React from 'react';
import { useUserAuth } from '../../../Context/UserAuthContext';
import Profiles from '../../../Profiles';
import Calander from './Calander';


const Profile = () => {
    const { user } = useUserAuth();
    return (
        <div className="">
            <div className='grid gap-3 grid-cols-2'>
                <div>
                    <Profiles></Profiles>
                    <div className='mt-10'>
                        <h2 className='font-bold text-3xl font-mono'>Welcome, {user.displayName} !</h2>
                        <p className='font-semibold'>Registerd Email : {user.email}</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl mb-10 font-bold'>Income Details</h2>
                    <Calander></Calander>
                </div>
            </div>
        </div>
    );
};

export default Profile;