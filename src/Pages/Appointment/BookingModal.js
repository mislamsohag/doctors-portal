import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        console.log(slot, name, email, phone)
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Book : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Mobile Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;