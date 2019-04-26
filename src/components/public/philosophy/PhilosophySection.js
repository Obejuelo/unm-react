import React from 'react';

export default ({ title, text }) => {
    return (
        <div className='col-12'>
            <h3 className='text-muted'>{title}</h3>
            {text.map((parrafo, idx) => (
                <p className='text-justify' key={idx}>{parrafo.p}</p>
            ))}
        </div>
    )
}