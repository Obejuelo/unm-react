import React from 'react';

export default function ({ title, info, list, img, order1, order2 }) {
    return ([
        <div className={`col-12 col-md-6 order-${order1}`} key={1}>
            <h3 className='text-muted'>{title}</h3>
            {info.map((text, idx) => (
                <p className='text-justify text-muted' key={idx}>{text.p}</p>
            ))}
            {list.map((item, idx) => (
                <li key={idx} className='text-muted text-justify'>{item.p}</li>
            ))}
        </div>,
        <div className={`col-12 col-md-6 order-${order2}`} key={2}>
            <img
                src={`assets/images/inter/${img}`}
                alt="inter"
                className='img-fluid'
                style={{ borderRadius: '8px' }}
            />
        </div>
    ])
}