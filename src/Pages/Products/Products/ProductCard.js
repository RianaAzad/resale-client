import React from 'react';


const ProductCard = ({product, setProduct}) => {
    const {picture, name, categoryName, resalePrice, originalPrice, company, yearsUser, location} = product;
    return (
        <div className="card bg-base-100 shadow-xl mx-6 md:mx=16">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Category: {categoryName}</p>
                <p>Resale Price: {resalePrice}</p>
                <p>Original Price: {originalPrice}</p>
                <p>Company: {company}</p>
                <p>Years Used: {yearsUser}</p>
                <p>Location: {location}</p>

                <div className="card-actions justify-end">
                <label htmlFor="booking-modal" className="btn" onClick={()=> setProduct(product)}>Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;