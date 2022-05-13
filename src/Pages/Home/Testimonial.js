import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

import quote from '../../assets/icons/quote.svg'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            country: 'America',
            city: 'California',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus voluptatem aliquam quaerat quia modi. Omnis ab ipsam laboriosam cum.',
            img: people1,
        },
        {
            _id: 2,
            name: 'Winson Herry',
            country: 'Singapure',
            city: 'Singapur City',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus voluptatem aliquam quaerat quia modi. Omnis ab ipsam laboriosam cum.',
            img: people2,
        },
        {
            _id: 3,
            name: 'Winson Herry',
            country: 'LosssAngels',
            city: 'Diago',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus voluptatem aliquam quaerat quia modi. Omnis ab ipsam laboriosam cum.',
            img: people3,
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="quote picture" />
                </div>
            </div>
            <div>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        reviews.map(review => <Review key={review._id} review={review} ></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;