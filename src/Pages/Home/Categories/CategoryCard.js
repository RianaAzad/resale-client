import { Link } from 'react-router-dom';

const CategoryCard = ({ categoryItem }) => {
    const { category, image } = categoryItem;
    const sendName =(category)=>{
        return category;
    }

    return (
        <div className="card glass mx-auto">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                
                <div className="card-actions justify-end">
                    <Link to={`/products/${category}`}>
                    <button onClick={()=> sendName(category)} className="btn btn-primary">See Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;