import React from 'react';
import '../cardLic/cardLic.css';

export default function({image, title}) {
    const img = `assets/images/postgr/${image}`;

    return(
        <div className='card card-lic mb-3'>
            <div className='card-img' style={{backgroundImage: img}}>
                <img src={img} alt="lic" className='img-fluid'/>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <button className='btn btn-lic btn-sm'>Ver más</button>
            </div>
        </div>
    )
}