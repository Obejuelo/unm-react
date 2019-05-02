import React from 'react';
import Title from '../shared/title/Title';
import Footer from '../shared/footer/Footer';
import InfoText from '../components/public/infoText/InfoText';
import Req from '../components/public/Req';

import {plan, req} from '../util/spam';

export default function({container}) {
    return(
        <div className="page">
            <Title title='Secundaria Abierta'/>
                <div className={container}>
                    <div className="row align-items-center mt-3">
                        <div className="col-12 col-md-4 text-center">
                            <img src="assets/images/spam/secu.jpg" alt="spam" className='img-fluid'/>
                        </div>
                        <div className="col-12 col-md-8">
                            <InfoText
                                title='Información general'
                                text='Quienes quieren superarse y desean estudiar su secundaria, pueden encontrar el apoyo total en la Secundaria Abierta México, la cual es una institución educativa seria, con un gran prestigio y con una amplia experiencia cultural y pedagógica en el estado de Oaxaca; además cuenta con los mejores asesores, instructores y maestros del sistema abierto, por lo que garantiza que el estudiante recibe un servicio de asesoría y enseñanza abierta de altísima calidad, a fin de que cuente con una preparación de excelencia para afrontar los exámenes que se apliquen para evaluarlo y, así, cumpliendo con el plan de estudios completo, obtener merecidamente su certificado de secundaria.'/>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-12 col-md-10 col-lg-8">
                            <InfoText
                                title='Validez oficial del certificado de estudios'
                                text='Al concluir tus estudios puede estar seguro que el certificado que obtengas cuenta con validez oficial, pues es expedido por el Instituto Estatal para la Educación de los Adultos (IEEA, SEP), y es reconocido plenamente en la República Mexicana por cualquier Institución Educativa de Nivel Medio Superior (PREPARATORIA).'/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <h2 className='text-center'>Plan de estudios interno</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <InfoText
                                text='El plan de estudios propio de la Secundaria Abierta México, se ha creado buscando facilitarte el estudio y aprendizaje en el tiempo más corto posible, 6 MESES o menos, y además para que alcances el mejor nivel de preparación.'
                                text2='Para terminar tu secundaria debes aprobar 12 materias (módulos).'/>
                        </div>
                        <div className="col-12 col-md-6">
                            <Req
                                title='Materias que cursas (2 mensuales):'
                                req={plan}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-6">
                            <Req
                                title='Requisitos'
                                req={req}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <InfoText
                                title='Revalidación o Equivalencia de Estudios'
                                text='Si ya realizaste estudios de secundaria, pero no los terminaste y cuentas con boletas de calificaciones de algún grado, se te pueden considerar para que termines más rápido.'
                                text2='Te apoyamos y orientamos en este aspecto.'/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}