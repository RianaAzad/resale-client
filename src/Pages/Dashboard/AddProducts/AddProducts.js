import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProducts = () => {
    const {user} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageKey = process.env.REACT_APP_img_key;
    const date = new Date();
    const navigate = useNavigate();

    const handleAddProduct = data => {
        const image = data.picture[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    productName: data.name,
                    company: data.company,
                    category: data.categoryName,
                    resalePrice: data.resalePrice,
                    originalPrice: data.originalPrice,
                    condition: data.condition,
                    location: data.location,
                    mobileNumber: data.mobileNumber,
                    description: data.description,
                    yearPurchased: data.yearPurchased,
                    seller: user.displayName,
                    postedOn: date,
                    image: imgData.data.url,
                    available: true,
                    verified: true,
                    advertise: false
                }

                // add product info in DB
                fetch('https://resale-server-rianaazad.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    console.log(product);
                    toast.success("Product added successfully!");
                    navigate('/dashboard/myProducts')
                })
            }
        })
    }
   

    return (
        <div className='w-3/4 mx-auto mt-8'>
            <h1 className='text-2xl text-primary font-bold mt-5'>Add a Product</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Product's Name</span></label>
                    <input type="text" {...
                        register("name", { required: "Please provide product's name" })
                    } className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div  className='grid grid-cols-1 gap-4 md:grid-cols-2 my-5'>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Company</span></label>
                    <input type="company" {...
                        register("company", { required: "company is required" })
                    } className="input input-bordered w-full" />
                    {errors.company && <p className='text-red-600'>{errors.company.message}</p>}
                </div>
                <div>
                <label className="label"><span className="label-text">Please Select Category</span></label>
                <select className="select select-info w-full max-w-xs" {...register("categoryName", { required: "Please provide" })}>
                    <option>Convertible</option>
                    <option>Sedan</option>
                    <option>Tesla</option>
                </select>
                </div>
                </div>


                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Resale Price</span></label>
                    <input type="text" {...
                        register("resalePrice", { required: "Price is required" })
                    } className="input input-bordered w-full" />
                    {errors.price && <p className='text-red-600'>{errors.price.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Original Price</span></label>
                    <input type="text" {...
                        register("originalPrice", { required: "Price is required" })
                    } className="input input-bordered w-full" />
                    {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice.message}</p>}
                </div>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 my-5'>
                <div>
                <label className="label"><span className="label-text">Product Condition</span></label>
                <select className="select select-info w-full max-w-xs" {...register("condition", { required: "Please provide the condition of the product" })}>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
                </div>

                <div>
                <label className="label"><span className="label-text">Your Area</span></label>
                <select className="select select-info w-full max-w-xs" {...register("location", { required: "Please provide" })}>
                    <option disabled>Please Select Your Location</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Sylhet</option>
                    <option>Barisal</option>
                    <option>Dinajpur</option>
                    <option>Rajshahi</option>
                </select>
                </div>
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Mobile Number</span></label>
                    <input type="mobileNumber" {...
                        register("mobileNumber", { required: "Mobile Number is required" })
                    } className="input input-bordered w-full" />
                    {errors.mobileNumber && <p className='text-red-600'>{errors.mobileNumber.message}</p>}
                </div>

                
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Please add a description of the Product</span></label>
                    <input type="description" {...
                        register("description", { required: "Please add a description" })
                    } className="input input-bordered w-full textarea textarea-info" />
                    {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">In which year the product was first bought?</span></label>
                    <input type="yearPurchased" {...
                        register("yearPurchased", { required: "Please add the year of purchase" })
                    } className="input input-bordered w-full" />
                    {errors.yearPurchased && <p className='text-red-600'>{errors.yearPurchased.message}</p>}
                </div>
                {/* Image file */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Please provide the product image</span></label>
                    <input type="file" {...
                        register("picture", { required: "Product photo is required" })
                    } className="input input-bordered w-full" />
                    {errors.picture && <p className='text-red-600'>{errors.picture.message}</p>}
                </div>

                <input className='btn btn-primary w-full mt-5' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;