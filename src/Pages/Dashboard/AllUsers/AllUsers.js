import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-server-rianaazad.vercel.app/users');
            const data = await res.json();
            setDisplayUsers(users)
            return data;
        }
    })
    const [displayUsers, setDisplayUsers] = useState(users);
    
    const handleRemove = user => {
        const agree = window.confirm(`Are you sure you want to delete: ${user.displayName}`)
        if(agree){
            fetch(`https://resale-server-rianaazad.vercel.app/users/${user._id}`, {
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast.error("User is deleted successfully!");
                    const remainingUsers = displayUsers.filter(u => u._id !== user._id)
                    setDisplayUsers(remainingUsers);
                }
            })
        }
    }

    const handleAdmin = (id)=>{
        fetch(`https://resale-server-rianaazad.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                toast.success('The User is New Admin Now!');
                refetch();
            }
        })
    }

    

    return (
        <div className='my-16'>
            <h2 className='text-3xl text-cyan-900 font-bold my-5'>All Users List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                        displayUsers.map((user, i)=> 
                        <tr key={user._id} className="hover">
                        <th>{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className='font-bold text-blue-900'>{user.role}</td>
                        <td>{user.role !== "admin" && <button onClick={()=> handleAdmin(user._id)} className='btn btn-primary btn-sm'>Make Admin</button>}</td>
                        
                        <td><button onClick={()=>handleRemove(user)} className='btn btn-accent btn-sm'>Remove</button></td>
                    </tr>
                        )
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;