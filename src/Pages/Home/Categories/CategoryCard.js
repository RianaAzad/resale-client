import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { categoryName, image } = category;
    const sendName =(categoryName)=>{
        return categoryName;
    }

    return (
        <div className="card glass mx-auto">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                
                <div className="card-actions justify-end">
                    <Link to={`/products/${categoryName}`}>
                    <button onClick={()=> sendName(categoryName)} className="btn btn-primary">See Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;