import { useQuery } from '@tanstack/react-query';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
            
        }
    })
    console.log(products)
    return (
        <div>
            <h1 className='text-2xl font-bold mt-12 mb-6'>Biggest Sales ever!</h1>
            <p>Advertises</p>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {
                products.map(product => <AdvertiseCard
                key={product._id}
                product = {product}
                ></AdvertiseCard>)
            }
        </div>
        </div>
    );
};

export default Advertise;