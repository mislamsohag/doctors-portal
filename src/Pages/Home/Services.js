import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'


const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluroide Treatment",
            img: fluoride

        },
        {
            _id: 2,
            name: "Visit Our Location",
            img: cavity

        },
        {
            _id: 3,
            name: "Teeth WhiteningFluroide Treatment",
            img: whitening

        }
    ]
    return (
        <>
            <div className='text-center mt-5'>
                <h3 className='text-2xl text-primary font-bold'>Our Services</h3>
                <h2 className='text-3xl'>Service We Provide</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        services.map(service => <Service key={service._id} service={service} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;