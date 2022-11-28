import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div className='mx-12 lg:my-24 md:my-12 border border-zinc-900 md:p-10'>
          <h1 className='text-xl text-primary'>User Information</h1>
          <p>User Name: {user.displayName}</p>
          <p>User Email: {user.email}</p>
        </div>
    );
};

export default Dashboard;