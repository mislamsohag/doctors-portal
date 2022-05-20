import React from 'react';
import Footer from '../../Sheard/Footer';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import ServiceDetails from './ServiceDetails';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceDetails></ServiceDetails>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </>
    );
};

export default Home;