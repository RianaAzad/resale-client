import React from 'react';

const AdvertiseCard = ({ product }) => {
    const { image, productName, resalePrice } = product;
    if (product.advertise) {
        return (
            <div className="card card-side glass">
                <figure><img className='mask mask-hexagon-2' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <p>Get <span className='text-xl text-accent font-bold'>{productName}</span> at only <span className='text-xl font-bold'>${resalePrice}</span>! </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-xs">Buy now!</button>
                    </div>
                </div>
            </div>
        );
    }

};

export default AdvertiseCard;