import React, { useState, useEffect } from 'react';
import { resize, container } from '../../util/resize';
import { history } from '../../util/history';
import Title from '../../shared/title/Title';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';

export default () => {
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
        <div>
            <Navbar/>
            <div className='page'>
                <Title title='Historia' />
                <div className={cont}>
                    <div className="row my-3">
                        <div className="col-12">
                            {history.map((info, idx) => (
                                <p className='text-justify' key={idx}>{info.p}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}