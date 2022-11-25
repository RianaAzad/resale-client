import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';


const BookingModal = ({ product }) => {
    const { name, resalePrice, company } = product;
    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const meetingLocation = form.meetingLocation.value;
        const mobileNumber = form.mobileNumber.value;
        console.log(meetingLocation,mobileNumber)

        const booking = {
            buyer : user.displayName,
            buyerEmail: user.email,
            productName: name,
            resalePrice,
            productImage: product.picture
        }
        console.log(booking)

        toast.success('Your Meeting is confirmed!')
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
                            <input type="text" disabled value={user?.displayName} className="input input-bordered input-primary w-full my-2" />
                            <input type="text" disabled value={user?.email} className="input input-bordered input-primary w-full my-2" />
                        </div>
                        <div className='grid gap-2 grid-cols-3'>
                            <input type="text" disabled value={name} className="input input-bordered input-primary w-full my-2" />
                            <input type="text" disabled value={`Price: $${resalePrice}`} className="input input-bordered input-primary w-full my-2" />
                            <input type="text" disabled value={company} className="input input-bordered input-primary w-full my-2" />
                        </div>
                        <input type="text" name="meetingLocation" placeholder="Meeting Location" className="input input-bordered input-primary w-full my-2" />
                        <input type="text" name='mobileNumber' placeholder="Phone Number" className="input input-bordered input-primary w-full my-2" />
                        <button className="btn btn-primary btn-block my-3">Confirm Meeting</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;