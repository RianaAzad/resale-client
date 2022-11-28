import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';


const BookingModal = ({ product, setProduct }) => {
    const { productName, resalePrice, company } = product;
    const { user } = useContext(AuthContext);
console.log( resalePrice, company)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const meetingLocation = form.meetingLocation.value;
        const mobileNumber = form.mobileNumber.value;

        const booking = {
            buyerName: user.displayName,
            buyerEmail: user.email,
            productName: productName,
            productId: product._id,
            resalePrice,
            productImage: product.picture,
            meetingLocation,
            mobileNumber
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Your Meeting is confirmed!');
                }
            })
    }

 return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative px-10 py-16">
                    <label htmlFor="booking-modal" className="btn btn-outline btn-error btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Please provide meeting details for following product</h3>

                    <form onSubmit={handleBooking}>
                        <div className='grid gap-2 grid-cols-2'>
                            <input type="text" disabled defaultValue={user?.displayName} className="input input-bordered input-primary w-full my-2" />
                            <input type="text" disabled defaultValue={user?.email} className="input input-bordered input-primary w-full my-2" />
                        </div>
                        <div className='grid gap-2 grid-cols-3'>
                            <input type="text" disabled defaultValue={productName} className="input input-bordered input-primary w-full my-2" />
                            <input type="text" disabled defaultValue={`Price: $${resalePrice}`} className="input input-bordered input-primary w-full my-2" />
                            <input type="text" disabled value={company} className="input input-bordered input-primary w-full my-2" />
                        </div>
                        <input type="text" name="meetingLocation" placeholder="Meeting Location" className="input input-bordered input-primary w-full my-2" />
                        <input type="text" name='mobileNumber' placeholder="Phone Number" className="input input-bordered input-primary w-full my-2" />
                        <button className='w-full'>
                            <label htmlFor="booking-modal" className="btn btn-primary btn-block my-3">Confirm Meeting</label>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;