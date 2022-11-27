import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';


const Products = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null);
console.log(products)
    return (
        <div className='mx-auto my-16'>
            <h2 className='text-center text-3xl font-bold'>All <span className='text-primary'>{products[0].category} </span>Cars</h2>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;