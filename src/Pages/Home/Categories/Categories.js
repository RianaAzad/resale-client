import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const categories= [
    {
        cid: 1,
        categoryName: 'Sedan',
        image: 'https://i.ibb.co/DDx1Q7v/img4.jpg'
    },
    {
        cid: 2,
        categoryName: 'Convertible',
        image: 'https://i.ibb.co/DDx1Q7v/img4.jpg'
    },
    {
        cid: 3,
        categoryName: 'Hatchback',
        image: 'https://i.ibb.co/DDx1Q7v/img4.jpg'
    }
]
    return (
        <div>
            <p className='text-3xl text-primary font-bold text-center my-12 italic'>Categories</p>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category => <CategoryCard
                key={category.cid}
                category={category}
                ></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default Categories;