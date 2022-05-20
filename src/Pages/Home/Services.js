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
            <div className='my-28'>
                <div className='text-center'>
                    <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                    <h2 className='text-4xl'>Services We Provide</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;