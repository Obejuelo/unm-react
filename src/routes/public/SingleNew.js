import React, {useState, useEffect} from 'react';
import { resize, container } from '../../util/resize';
import {url} from '../../util/config';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';

export default function() {
    const [id] = useState(window.location.pathname.split('/')[2]);
    const [singleNew, setSingleNew] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [cont, setCont] = useState('');
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        fetch(`${url}news/${id}`)
        .then(res => res.json())
        .then(data=>{
            setSingleNew(data)
            const pnew = data.info.split('. ');
            setInfo(pnew);
        }).catch(err=>{
            console.log(err);
        });

        function updateWidth() { resize(setWidth); }
        setCont(container(width));
        window.addEventListener('resize', updateWidth);
        
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    },[]);

    return(
        <div>
            <Navbar/>
            <div className='page'>
                <div className={cont}>
                    <div className="row mt-1">
                        <div 
                            className="col-12 text-center">
                            <img src={singleNew.image} alt="notice" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            {info.map((text, idx)=>(
                                <p className="text-justify" key={idx}>{text}.</p>
                            ))}
                        </div>
                    </div>
                </div>,
                <Footer/>
            </div>
        </div>
    )
}