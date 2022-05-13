import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../../Sheard/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center p-3 px-12'>

            <div className='flex-1 hidden lg:block'>
                < img className='mt-[-130px]' src={doctor} alt="" />
            </div >
            <div className='flex-1 pr-10 py-5'>
                <h2 className='text-primary text-2xl'>Appointment</h2>
                <h1 className='text-3xl text-white my-2'>Make an appointment Today</h1>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Book an Appointment</PrimaryButton>
            </div>

        </section >
    );
};

export default MakeAppointment;




