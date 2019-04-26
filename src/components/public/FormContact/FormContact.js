import React from 'react';
import './formContact.css';

export default function ({ container }) {
    return (
        <div className={container}>
            <form className='form'>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input id='name' type="text" className='form-control' placeholder='Nombre completo' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input id='email' type="text" className='form-control' placeholder='@' />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id='message' className='form-control textarea' placeholder='Escribe tu mensaje' />
                </div>
            </form>
        </div>
    )
}