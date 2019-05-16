import React from 'react';
import Title from '../../shared/title/Title';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';

export default function({container}) {
    return(
        <div>
            <Navbar/>
            <div className='page'>
                <Title title='Instalaciones'/>
                <Footer/>
            </div>
        </div>
    );
}