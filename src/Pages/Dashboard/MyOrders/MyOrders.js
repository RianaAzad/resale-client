import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://resale-server-rianaazad.vercel.app/bookings?email=${user.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings)


    return (
        <div>
            <h2 className='text-2xl text-primary m-10'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {bookings &&
                            bookings.map((booking, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking.productName}</td>
                                    <td>${booking.resalePrice}</td>
                                    {
                                        booking.resalePrice && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><td><button className='btn btn-outline btn-primary btn-sm'>Pay</button></td></Link>
                                    }
                                    {
                                        booking.resalePrice && booking.paid && <span className='text-primary'>Paid</span>
                                    }
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;