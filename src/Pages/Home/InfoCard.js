import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    // const { clock, marker, phone } = img;
    // console.log(img);
    return (
        <div>
            <div className={`card lg:card-side shadow-xl ${bgClass}`}>
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