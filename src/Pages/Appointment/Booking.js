import React from 'react';


const Booking = ({ booking, setTreatment }) => {
    const { name, slots } = booking;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date please</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(booking)}
                        class="btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>

            </div>
        </div>

    );
};

export default Booking;