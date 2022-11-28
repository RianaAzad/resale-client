import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData();
    const {productName, resalePrice, buyerName} = data;
    console.log(data)
    return (
        <div>
            <h3 className='text-2xl text-primary my-5'>Payment</h3>
            <p>Hello {buyerName}!</p>
            <p>Payment of {resalePrice} for {productName}</p>
        </div>
    );
};

export default Payment;