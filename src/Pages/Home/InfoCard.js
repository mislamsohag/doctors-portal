import React from 'react';

const InfoCard = (service) => {
    const { img, cardTitle, bgClass } = service;
    return (
        <div>
            <div className={`card lg:card-side shadow-xl mb-5 ${bgClass}`}>
                <figure className='p-5 pb-0'>
                    <img src={img} />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;