import React from 'react';
import Title from '../../shared/title/Title';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';
import InfoText from '../../components/public/infoText/InfoText';

export default function({container}) {
    return(
        <div>
            <Navbar/>
            <div className='page'>
                <Title title='Preparatoria Abierta'/>
                    <div className={container}>
                        <div className="row">
                            <div className="col-12 text-center my-4">
                                <img src="assets/images/spam/spam.jpg" alt="spam" className='img-fluid'/>
                            </div>
                            <div className="col-12 col-md-6">
                                <InfoText
                                    title='Información general'
                                    text='El Subsistema de Preparatoria abierta es una alternativa de la Secretaría de Educación Pública para quienes desean iniciar o concluir sus estudios de nivel medio superior, y que lo ofrece la Preparatoria Abierta México como servicio de asesoría y enseñanza abierta, preparando a los estudiantes para afrontar con éxito los exámenes que elabora, aplica y califica la SEP - CGEMSySCyT.'/>
                            </div>
                            <div className="col-12 col-md-6">
                                <InfoText
                                    title='Información académica'
                                    text='Al concluir tus estudios puedes estar seguro que el certificado de bachillerato general que obtienes, cuenta con validez oficial, pues es expedido por la Secretaría de Educación Pública, CGEMSySCyT y es reconocido por cualquier institución de Educación Superior.'/>
                            </div>
                            <div className="col-12 col-md-6">
                                <InfoText
                                    title='Importante'
                                    text='La Preparatoria Abierta México te proporciona tu material didáctico, en formato digital, sin costo alguno, de cada uno de los módulos (materias) que tomas por bimestre.'/>
                            </div>
                            <div className="col-12 col-md-6">
                                <InfoText
                                    title='Plan de estudios interno'
                                    text='El plan de estudios está organizado en 4 periodos, cada uno de 5 o 6 módulos (materias), lográndose cursar cada periodo en 2 meses (Bimestre).'/>
                            </div>
                            <div className="col-12 mt-3">
                                <h5 className='text-center'>Para considerar acreditada la preparatoria debes aprobar un total de 22 módulos</h5>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}