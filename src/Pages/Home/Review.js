import React from 'react';

const Review = ({ review }) => {
    const { name, img, country, feedback } = review;
    return (
        <div>
            <div className="card lg:lg bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ }</h2>
                    <p>{feedback}</p>

                    <div className='flex mt-5'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} />
                            </div>
                        </div>
                        <div className='ml-5'>
                            <h5 className='text-xl'>{name}</h5>
                            <h5 className='text-xl'>{country}</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;