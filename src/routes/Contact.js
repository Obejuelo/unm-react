import React, { useState, useEffect } from 'react';
import { resize, container } from '../util/resize';
import Footer from '../shared/footer/Footer';
import Title from '../shared/title/Title';
import FormContact from '../components/public/FormContact/FormContact';
import Iframe from '../components/public/iframe/Iframe';

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
            <Title title='Contacto' />
            <div className={cont}>
                <div className="row justify-content-center align-items-center my-5">
                    <div className="col-12 col-md-6">
                        <FormContact container={cont} />
                    </div>
                    <div className="col-12 col-md-6">
                        <Iframe 
                            url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.2337420348276!2d-96.66411188560264!3d17.061215616621798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7226e680383ed%3A0xd58ec2b3403a30c!2sUniversidad+Nacionalista+M%C3%A9xico!5e0!3m2!1ses!2smx!4v1552590376738'/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}