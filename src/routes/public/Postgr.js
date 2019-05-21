import React, {useState, useEffect} from 'react';
import { resize, container } from '../../util/resize';
import Title from '../../shared/title/Title';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';
import CardM from '../../components/public/cardM/CardM';

export default function() {
    const [width, setWidth] = useState(window.innerWidth);
    const [cont, setCont] = useState('');
    const [data, setData] = useState([]);

    useEffect(()=>{
        // Obtener datos con fetch
        async function getData() {
            const res = await fetch('assets/data/post.json');
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
                <Title title='Maestrías'/>
                <div className={cont}>
                    <div className="row justify-content-center my-3">
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='fiscal.jpg'
                                title='Administración'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='mae3.jpg'
                                title='Docencia'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='fiscal.jpg'
                                title='Fiscal'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='mae2.jpg'
                                title='Derecho Const. y Amparo'
                                data={data.administracion}
                                req={data.requisitos}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <CardM 
                                image='mercadotecnia.jpg'
                                title='Dirección y Mercadotecnia'
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