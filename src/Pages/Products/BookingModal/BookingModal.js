import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';


const BookingModal = ({ product }) => {
    const { name, resalePrice, company } = product;
    const {user} = useContext(AuthContext);
    

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-outline btn-error btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    
                    <form>
                        <div className='grid gap-2 grid-cols-2'>
                            <input type="text" value={user?.email}  disabled className="input input-bordered input-primary w-full my-2" />
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full my-2" />
                        </div>
                        <div className='grid gap-2 grid-cols-3'>
                            <input type="text" disabled value={name} className="input input-bordered input-primary w-full my-2" />
                            <input type="text" disabled value={`Price: $${resalePrice}`} className="input input-bordered input-primary w-full my-2" />
                            <input type="text" disabled value={company} className="input input-bordered input-primary w-full my-2" />
                        </div>
                        <input type="text" placeholder="Meeting Location" className="input input-bordered input-primary w-full my-2" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full my-2" />
                        <button className="btn btn-primary btn-block my-3">Button</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;