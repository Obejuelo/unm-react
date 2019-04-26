import React from 'react';
import './footer.css';
import { IoMdMail, IoIosPin } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function (props) {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className={props.container}>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className='center'>
                            <p> <IoIosPin className='icon' />Camino Nacional Núm. 99, Tlalixtac de Cabrera <small className='d-none d-md-inline'>(Campus Central)</small></p>
                            <p><IoMdMail className='icon' />vinculacion@universidadmexico.edu.mx</p>
                            <p><FaPhone className='icon' />(951) 133 20 87</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className='spam'>
                            <p> <IoIosPin className='icon' />Monte Albán Núm.311 <small className='d-none d-md-inline'>(Faccionamiento San José La Noria)</small></p>
                            <p><IoMdMail className='icon' />secundariaypreparatoriamexico@gmail.com</p>
                            <p><FaPhone className='icon' />(951) 51 6 09 41</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className='social text-center'>
                            <div><a href='/'><FaFacebookF className='facebook' /></a></div>
                            <div><a href='/'><FaTwitter className='twitter' /></a></div>
                            <div><a href='/'><FaYoutube className='youtube' /></a></div>
                            <div><a href='/'><FaInstagram className='instagram' /></a></div>
                        </div>
                    </div>
                </div>
                <div className='copy'>
                    <p>&copy; Universidad Nacionalista México {year}</p>
                    <Link to='/privacity' className='text-white mb-3 privacity'>Aviso de privacidad</Link>
                </div>
            </div>
        </footer>
    )
}