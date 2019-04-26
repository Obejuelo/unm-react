import React from 'react';

export default ({plain, title}) => (
    <div className="col-12 col-sm-6 mb-3">
        <h4 className='text-muted text-center'>{title}</h4>
        {plain.map((item, index) => (
            <li key={index}>{item.c}</li>
        ))}
    </div>
)