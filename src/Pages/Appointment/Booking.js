import React from 'react';
import PrimaryButton from '../../Sheard/PrimaryButton';

const Booking = ({ booking }) => {

    const { name, slots } = booking;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{booking.name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date please</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
                <div className="card-actions justify-center">
                    <button className='btn btn-secondary uppercase text-white'
                        disabled={slots.length === 0}>Book Appointment</button>
                </div>
            </div>
        </div>

    );
};

export default Booking;