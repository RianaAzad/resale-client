import React from 'react';

const CategoryCard = ({ category }) => {
    const { categoryName, image } = category;

    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Products</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;