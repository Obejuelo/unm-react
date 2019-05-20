import React from 'react';

export default function() {
    return(
        <div 
            className='text-center my-4'
            style={{
                position: 'absolute',
                top: '0'
            }}>
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}