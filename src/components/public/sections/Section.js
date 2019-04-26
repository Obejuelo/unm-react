import React from 'react';
import './section.css';
import Item from '../item/Item';

export default function ({ container }) {

    return (
        <section className='section'>
            <div className={container}>
                <div className="row justify-content-around pt-5">
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 col-item">
                        <Item title='1 Especialidad' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 col-item">
                        <Item title='5 Maestrías' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 col-item">
                        <Item title='11 Licenciaturas' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 col-item">
                        <Item title='Bachillerato General' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 col-item">
                        <Item title='Preparatoria Abierta' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 col-item">
                        <Item title='Secundaria Abierta' />
                    </div>
                </div>
            </div>
        </section>
    )
}