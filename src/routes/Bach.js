import React from 'react';
import {bach} from '../util/bach';
import Title from '../shared/title/Title';
import Footer from '../shared/footer/Footer';
import TextInfo from '../components/public/text/TextInfo';
import TableBach from '../components/public/table/TableBach';

export default function({container}) {
    
    return(
        <div className="page">
            <Title title='Bachillerato General'/>
                <div className={container}>
                    <div className="row my-3 align-items-center">
                        <div className="col-12 col-sm-4 col-md-5">
                            <img src="assets/images/home/bachillerato.png" alt="bach" className='img-fluid'/>
                        </div>
                        <div className="col-12 col-sm-8 col-md-7">
                            <TextInfo
                                title='Objetivo General'
                                info={bach.objetivo}/>
                        </div>
                        <div className="col-12 col-sm-6">
                            <TextInfo
                                title='Perfil de ingreso'
                                info={bach.perfil_i}/>
                        </div>
                        <div className="col-12 col-sm-6">
                            <TextInfo
                                title='Perfil de egreso'
                                info={bach.perfil_e}/>
                        </div>
                    </div>
                    <div className="row text-center my-5">
                        <div className="col-12">
                            <TableBach/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <TextInfo
                                title='Formación como traductor de inglés:'
                                info={bach.formacion}/>
                        </div>
                        <div className="col-12 col-sm-6">
                            <TextInfo
                                title='También tenemos:'
                                info={bach.mas}/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}