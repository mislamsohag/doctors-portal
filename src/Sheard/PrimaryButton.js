import React, { Children } from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='btn btn-primary uppercase bg-gradient-to-r from-primary to-secondary mt-3'>{children}</button>
        </div>
    );
};

export default PrimaryButton;