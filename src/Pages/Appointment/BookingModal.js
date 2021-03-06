import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://boiling-plains-67002.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null);
            });
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Book : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Mobile Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;