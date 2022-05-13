import React from 'react';

const Review = ({ review }) => {
    const { name, img, country, city, feedback } = review;
    return (
        <div>
            <div class="card lg:lg bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{ }</h2>
                    <p>{feedback}</p>

                    <div className='flex'>
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
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