import React from 'react';
import './convenios.css';

export default function ({ container }) {
    return (
        <div className={container}>
            <h4 className='text-center mt-4 text-dark'>Autorizaciones y convenios</h4>
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-sm-4 d-none d-sm-block img-convenios">
                    <img src="assets/images/logo/logo.png" alt="logo" className='logo' />
                </div>
                <div className="col-12 col-sm-4 img-convenios">
                    <img src="assets/images/convenios/sep.png" alt="" />
                </div>
                <div className="col-12 col-sm-4 d-none d-sm-block img-convenios">
                    <img src="assets/images/logo/logo.png" alt="logo" className='logo' />
                </div>
            </div>
            <div className='row justify-content-center align-items-center my-3'>
                <div className="col-4 col-sm-3 col-md-2 text-center">
                    <img src="assets/images/convenios/imss.png" alt="" className='img-fluid' />
                </div>
                <div className="col-4 col-sm-3 col-md-2 text-center">
                    <img src="assets/images/convenios/ine.png" alt="" className='img-fluid' />
                </div>
                <div className="col-4 col-sm-3 col-md-2 text-center">
                    <img src="assets/images/convenios/ayuntamiento.png" alt="" className='img-fluid' />
                </div>
                <div className="col-4 col-sm-3 col-md-2 text-center">
                    <img src="assets/images/convenios/estado_oaxaca.png" alt="" className='img-fluid' />
                </div>
                <div className="col-4 col-sm-3 col-md-2 text-center">
                    <img src="assets/images/convenios/ucime.png" alt="" className='img-fluid' />
                </div>
                <div className="col-4 col-sm-3 col-md-2 text-center">
                    <img src="assets/images/convenios/udhi.png" alt="" className='img-fluid' />
                </div>
            </div>
            <div className='row justify-content-center align-items-center my-3'>
                <div className="col-4 col-sm-3 text-center">
                    <img src="assets/images/convenios/cuba1.png" alt="" className='img-fluid' />
                </div>
                <div className="col-4 col-sm-3 text-center">
                    <img src="assets/images/convenios/martha-abreu.png" alt="" className='img-fluid' />
                </div>
                <div className="col-4 col-sm-3 text-center">
                    <img src="assets/images/convenios/cuba.png" alt="" className='img-fluid' />
                </div>
                <div className="col-4 col-sm-3 text-center">
                    <img src="assets/images/convenios/unica.png" alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}