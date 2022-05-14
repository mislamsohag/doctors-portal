import React, { useState } from 'react';
import Footer from '../../Sheard/Footer';
import AppointMentBanner from './AppointMentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointMentBanner date={date} setDate={setDate}></AppointMentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;