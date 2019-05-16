import React, { useState, useEffect } from 'react';
import { resize, container } from '../../util/resize';
import { philosophy } from '../../util/philosophy';
import Title from '../../shared/title/Title';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';
import PhilosophySection from '../../components/public/philosophy/PhilosophySection';

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
        <div>
            <Navbar/>
            <div className='page'>
                <Title title='Filosofía Institucional' />
                <div className={cont}>
                    <div className={`row justify-content-center align-items-center mt-3`}>
                        <div className="col-12 col-sm-4 col-md-3 text-center">
                            <img src="assets/images/logo/logo.png" alt="logo" className='img-fluid' />
                        </div>
                        <div className="col-12 col-sm-8 col-md-9">
                            <h3 className='text-center text-muted'>Objetivo.</h3>
                            <p className='text-justify'>La tarea de la Universidad Nacionalista México es formar profesionistas que transmitan y promuevan los conocimientos científicos, técnicos y de estructura profesional, con un alto sentido humano; que protejan y acrecienten los valores nacionales; así como la incorporación y aplicación de ideas éticas y la adquisición de las virtudes que hacen bueno al hombre por antonomasia.</p>
                            <p className='text-justify'>Propiciar los cambios pertinentes en el estudiante a fin de que participe en la búsqueda de un país igualitario y de respeto donde prevalezcan la verdad, la justicia y la libertad, y donde se tenga la capacidad y exista la posibilidad de decidir el propio destino y el de la patria.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <PhilosophySection
                            title='Misión.'
                            text={philosophy.mision} />
                        <PhilosophySection
                            title='Visión.'
                            text={philosophy.vision} />
                        <PhilosophySection
                            title='Valores.'
                            text={philosophy.valores} />
                        <PhilosophySection
                            title='Escudo.'
                            text={philosophy.escudo} />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}