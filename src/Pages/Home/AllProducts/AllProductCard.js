import React from 'react';
import BookingModal from '../../Products/BookingModal/BookingModal';

const AllProductCard = ({product, setProduct}) => {
        const {image, productName, category, resalePrice, originalPrice, company, yearsUser, location} = product;
        console.log(product)
        
        return (
            <div className="card bg-base-100 shadow-xl mx-6 md:mx=16">
                <figure><img className='w-full' src={image} alt="ProductImage" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>Category: {category}</p>
                    <p>Resale Price: {resalePrice}</p>
                    <p>Original Price: {originalPrice}</p>
                    <p>Company: {company}</p>
                    <p>Years Used: {yearsUser}</p>
                    <p>Location: {location}</p>
    
                    <div className="card-actions justify-end">
                    <label htmlFor="booking-modal" className="btn" onClick={()=> setProduct(product)}>Book Now</label>
                    </div>
                </div>
                {
                product && <BookingModal
                product={product}
                setProduct= {setProduct}
                ></BookingModal>
            }
            </div>
        );
};

export default AllProductCard;