import React, { useState, useEffect } from 'react';
import { resize, container } from '../util/resize';
import Title from '../shared/title/Title';
import Footer from '../shared/footer/Footer';

export default function () {
    const [width, setWidth] = useState(window.innerWidth);
    const [cont, setCont] = useState('');

    useEffect(() => {
        function updateWidth() { resize(setWidth); }
        setCont(container(width));
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [width, cont])

    return (
        <div className='page'>
            <Title title='Aviso de Privacidad' />
            <div className={cont}>
                <h2>Privacidad</h2>
            </div>
            <Footer />
        </div>
    )
}