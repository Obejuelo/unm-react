import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import Dropside from '../dropside/Dropside';
import { somos, oferta } from '../../../util/Dropdowns';

export default function (props) {

    function showOpacity() {
        if (props.opacity) {
            return (
                <div
                    key={2}
                    className="opacity"
                    onClick={props.show}></div>
            )
        }
    }

    return ([
        <div
            key={1}
            className='sidebar'
            style={{
                transform: props.translate,
                transitionDuration: '.3s'
            }}>
            <li><Link to='/' onClick={props.show}>Inicio</Link></li>
            <Dropside
                title='¿Quienes Somos?'
                links={somos}
                show={props.show}
            />
            <Dropside
                title='Oferta Académica'
                links={oferta}
                show={props.show}
            />
            <li><Link to='/news' onClick={props.show}>Noticias</Link></li>
            <li><Link to='/galery' onClick={props.show}>Galería</Link></li>
            <li><Link to='/contact' onClick={props.show}>Contacto</Link></li>
            <li><a href='https://www.sesweb.mx'>Plataforma</a></li>
        </div>,
        showOpacity()
    ])
}