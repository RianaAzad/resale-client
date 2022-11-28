
import { useLoaderData } from 'react-router-dom';
import AllProductCard from './AllProductCard';

const AllProducts = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(product => <AllProductCard
                key={product._id}
                product = {product}
                ></AllProductCard>)
            }
        </div>
    );
};

export default AllProducts;