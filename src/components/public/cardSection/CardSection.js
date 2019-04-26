import React from 'react';
import CardSection from '../cards/CardSection';
import './cardSection.css';

export default function (props) {

    return (
        <div className={props.container}>
            <div className="row justify-content-around">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 card-section">
                    <CardSection
                        image='colegio.jpg'
                        title='Educación superior'
                        info='La Universidad Nacionalista México, en nivel superior, ofrece la posibilidad de realizar estudios de Licenciatura asistiendo de lunes a viernes o sábados únicamente, y de posgrado, asistiendo un solo día a la semana.'
                        link='lic'
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 card-section">
                    <CardSection
                        image='crim.jpg'
                        title='Bachillerato General'
                        info='Nuestro programa de estudios, con preparación profesional en Traductor de Inglés, tiene como finalidad formar íntegralmente personas que transmitan y promuevan los conocimientos científicos y técnicos.'
                        link='bach'
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 card-section">
                    <CardSection
                        image='slider.jpg'
                        title='Secundaria y Preparatoria Abierta'
                        info='Quienes quieren superarse y desean estudiar su secundaria o preparatoria, pueden encontrar el apoyo total en nuestra institución, que cuenta con más de 22 años de experiencia y prestigio.'
                        link='spam'
                    />
                </div>
            </div>
        </div>
    )
}