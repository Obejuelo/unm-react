import React, {useState, useEffect} from 'react';
import { resize, container } from '../../util/resize';
import {url} from '../../util/config';
import Title from '../../shared/title/Title';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';
import CardNew from '../../components/public/cardNew/CardNew';

export default function () {
    const [news, setNews] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [cont, setCont] = useState('');

    useEffect(()=>{
        fetch(`${url}news`)
            .then(res => res.json())
            .then(data => {
                setNews(data.reverse())
            }).catch(err => {
                console.log(err);
            });

        function updateWidth() { resize(setWidth); }
        setCont(container(width));
        window.addEventListener('resize', updateWidth);
        
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [width, cont]);

    return (
        <div>
            <Navbar/>
            <div className='page'>
                <Title title='Noticias' />
                <header className={cont}>
                    <div className="row d-flex justify-content-center my-3">
                    {
                        (news.length !== 0)
                        ?  news.map(notice => (
                            <div key={notice._id} className='col-12 col-sm-6 col-md-5 col-lg-4'>
                                <CardNew 
                                    title={notice.title}
                                    info={notice.info}
                                    image={notice.image}
                                    _id={notice._id}/>
                            </div>
                        ))
                        :   <div className="progress-bar">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
                    </div>
                </header>
                <Footer />
            </div>
        </div>
    )
}