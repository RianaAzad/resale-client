import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const url = 'http://localhost:5000/categories';
    
    const {data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async()=>{
            const res= await fetch(url)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='my-24'>
            <p className='text-3xl text-primary font-bold text-center my-12 italic'>Categories</p>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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