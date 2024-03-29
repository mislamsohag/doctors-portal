import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../../Sheard/PrimaryButton';

const ServiceDetails = () => {
    return (

        <>
            <div className="flex card md:card-side lg:card-side bg-base-100 shadow-xl mb-10">
                <figure className='flex-1 content-center py-10'>
                    <img className='object-cover h-80 w-96 rounded-xl ' src={treatment} alt="Album" />

                </figure>
                <div className="flex-1 card-body justify-center items-center">
                    <h2 className="card-title text-3xl">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-start">
                        <PrimaryButton>Service Book</PrimaryButton>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ServiceDetails;