import React from 'react';
import Title from '../../shared/title/Title';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';
import CardM from '../../components/public/cardM/CardM';

export default function({container}) {
    return(
        <div>
            <Navbar/>
            <div className='page'>
                <Title title='Maestrías'/>
                <div className={container}>
                    <div className="row justify-content-center my-3">
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='fiscal.jpg'
                                title='Administración'/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='mae3.jpg'
                                title='Docencia'/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='fiscal.jpg'
                                title='Fiscal'/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='mae2.jpg'
                                title='Derecho Const. y Amparo'/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='mercadotecnia.jpg'
                                title='Dirección y Mercadotecnia'/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}