import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import ServiceDetails from './ServiceDetails';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
            <div className='px-12'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <ServiceDetails></ServiceDetails>
            </div>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;