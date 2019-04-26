import React, { useState, useEffect } from 'react';
import { resize, container } from '../util/resize';
import { inter } from '../util/inter';
import Title from '../shared/title/Title';
import Footer from '../shared/footer/Footer';
import Left from '../components/public/inter/Left';
import Intro from '../components/public/inter/Intro';
import List from '../components/public/inter/List';

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
            <Title title='Internacionalización' />
            <div className={cont}>
                <div className="row justify-content-center align-items-center mt-3">
                    <Intro info={inter.intro} />
                </div>
                <hr />
                <div className="row justify-content-center align-items-center mt-3">
                    <Left
                        title='Universidad de Ciencias Médicas de la Habana.'
                        info={inter.ucmh}
                        img='imagen1.jpg'
                        order1='1'
                        order2='2'
                    />
                </div>
                <hr />
                <div className="row justify-content-center align-items-center">
                    <Left
                        title='Universidad Marta Abreu de las Villas.'
                        info={inter.umav}
                        img='imagen2.jpg'
                        order1={width <= 768 ? '1' : '2'}
                        order2={width <= 768 ? '2' : '1'}
                    />
                </div>
                <hr />
                <div className="row justify-content-center align-items-center">
                    <List
                        title='Universidad de Ciencias Médicas de las Villas.'
                        info={inter.ucmv}
                        list={inter.ucmv[2].li}
                        img='imagen3.jpg'
                        order1='1'
                        order2='2'
                    />
                </div>
                <hr />
                <div className="row justify-content-center align-items-center mb-3">
                    <Left
                        title='Universidad de Ciego de Ávila.'
                        info={inter.umav}
                        img='imagen4.jpg'
                        order1={width <= 768 ? '1' : '2'}
                        order2={width <= 768 ? '2' : '1'}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}