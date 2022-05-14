import React from 'react';

const Service = ({ service }) => {
    const { name, img } = service;
    return (
        <>
            {/* <div className="card lg:max-w-96 bg-base-100 shadow-xl"> */}
            <div className="card bg-base-100 shadow-xl my-5">
                <figure className="pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>If need spacialist Doctors? then book this</p>
                </div>
            </div>
        </>
    );
};

export default Service;