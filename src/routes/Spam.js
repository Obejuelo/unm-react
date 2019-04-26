import React from 'react';
import Title from '../shared/title/Title';
import Footer from '../shared/footer/Footer';

export default function({container}) {
    return(
        <div className="page">
            <Title title='Secundaria y Preparatoria Abierta'/>
                <div className={container}>
                    <h2>Secundaria y Preparatoria Abierta</h2>
                </div>
            <Footer/>
        </div>
    )
}