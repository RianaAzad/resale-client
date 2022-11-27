import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.displayName],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellerProducts?seller=${user.displayName}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl text-secondary'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Publish Date</th>
                            <th>Status</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            products?.map((product,i) => <tr className="hover" key={product._id}>
                            <th>{i+1}</th>
                            <td><img className='mask mask-circle w-12' src={product.image} alt="" /></td>
                            <td>{product.productName}</td>
                            <td>{product.resalePrice}</td>
                            <td>{product.postedOn}</td>
                            {
                                product.available? <td><button className='btn btn-primary btn-sm'>Available</button></td>
                                : <td><button className='btn btn-accent btn-sm'>Not Available</button></td>
                            }
                            {
                                product.advertise || <td><button className='btn btn-primary btn-sm'>Advertise</button></td>
                            }
                        </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;