import React from 'react';

const BackButton = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-primary my-5' onClick={handleGoBack}>Back to Home</button>
        </div>
    );
};

export default BackButton;