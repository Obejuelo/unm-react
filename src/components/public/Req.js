import React from 'react';

export default ({req, title}) => ([
    <h3 className='text-muted text-center' key={10}>{title}</h3>,
    req.map((item, index) => (
        <li key={index} className='text-justify'>{item.p}</li>
    ))
]);