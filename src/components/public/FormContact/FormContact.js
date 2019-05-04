import React, {useState} from 'react';
import './formContact.css';
import {url} from '../../../util/config';
import Spinner from '../spinnerEmail/Spinner';

export default function ({ container }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);
    const [messageSpinner, setMessageSpinner] = useState('');

    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const messageRef = React.createRef();

    const sendMessage = async (e) => {
        e.preventDefault();
        setShowSpinner(!showSpinner);
        let body = {name, email, message}

        fetch(`${url}sendMail`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setMessageSpinner(data.message);
            awaitCloseModal();
            setName('');
            setEmail('');
            setMessage('');
        });
    }

    const _nameChange = () => {
        setName(nameRef.current.value);
    }
    const _emailChange = () => {
        setEmail(emailRef.current.value);
    }
    const _messageChange = () => {
        setMessage(messageRef.current.value);
    }
    const closeModal = () => {
        setShowSpinner(false)
    }
    const awaitCloseModal = () => {
        setTimeout(() => {
            setShowSpinner(false)
        }, 1000);
    }

    return (
        <div className={container}>
            <form className='form'>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input  
                        ref={nameRef}
                        onChange={_nameChange}
                        value={name}
                        type="text"
                        className='form-control' 
                        placeholder='Nombre completo' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input  
                        ref={emailRef}
                        onChange={_emailChange}
                        value={email}
                        type="text"
                        className='form-control' 
                        placeholder='@' />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea 
                        ref={messageRef}
                        onChange={_messageChange}
                        value={message}
                        className='form-control textarea' 
                        placeholder='Escribe tu mensaje' />
                </div>
                <div className="text-right">
                    <button 
                        className='btn btn-dark btn-sm'
                        onClick={sendMessage}>
                        Enviar
                    </button>
                </div>
            </form>
            <Spinner 
                show={showSpinner} 
                close={closeModal}
                message={messageSpinner}/>
        </div>
    )
}