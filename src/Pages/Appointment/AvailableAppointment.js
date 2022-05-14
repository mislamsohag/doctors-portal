import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';

const AvailableAppointment = ({ date }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (
        <div>
            <p className='text-secondary font-bold text-center'>You picked {format(date, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mb-5'>
                {bookings.map(booking => <Booking key={booking._id} booking={booking} />)}
            </div>
        </div>
    );
};

export default AvailableAppointment;