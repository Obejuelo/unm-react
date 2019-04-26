import React from 'react';

export default function ({ info }) {
    return ([
        <div className={`col-12`} key={1}>
            {info.map((text, idx) => (
                <p className='text-justify text-muted' key={idx}>{text.p}</p>
            ))}
        </div>
    ])
}