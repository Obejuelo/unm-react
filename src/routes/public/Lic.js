import React, {useState, useEffect} from 'react';
import { resize, container } from '../../util/resize';
import Title from '../../shared/title/Title';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';
import CardLic from '../../components/public/cardLic/CardLic';

export default function() {
    const [width, setWidth] = useState(window.innerWidth);
    const [cont, setCont] = useState('');
    const [data, setData] = useState([]);

    useEffect(()=>{
        // Obtener datos con fetch
        async function getData() {
            const res = await fetch('assets/data/lic.json');
            const json = await res.json();
            setData(json);
        }
        getData();
        
        // Actualizar el container
        function updateWidth() { resize(setWidth); }
        setCont(container(width));
        window.addEventListener('resize', updateWidth);

        // Remover listeners al desmontar
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    },[width, cont]);
    return(
        <div>
            <Navbar/>
            <div className='page'>
                <Title title='Licenciaturas'/>
                <div className={cont}>
                    <div className="row justify-content-center my-3">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='admon.jpg'
                                title='Administración'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='pedag.jpg'
                                title='Pedagogía'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='sistem.jpg'
                                title='Sistemas Comput..'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='psic.jpg'
                                title='Psicología Social'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='conta.jpg'
                                title='Contaduría Pública'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='fisica.jpg'
                                title='Educación Física'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='nutricion.jpg'
                                title='Nutrición'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='derecho.jpg'
                                title='Derecho'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='filo.jpg'
                                title='Filosofía'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='crim.jpg'
                                title='Criminología'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <CardLic 
                                image='gastro.jpg'
                                title='Gastronomía'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                    </div>
                </div>    
                <Footer/>
            </div>
        </div>
    )
}