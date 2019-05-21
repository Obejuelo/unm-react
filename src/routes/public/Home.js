import React, {useEffect, useState} from 'react';
import { resize, container } from '../../util/resize';
import Header from '../../components/public/header/Header';
import Section from '../../components/public/sections/Section';
import CardSection from '../../components/public/cardSection/CardSection';
import Convenios from '../../components/public/convenios/Convenios';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';

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
                <Header />
                <Section container={cont} />
                <CardSection container={cont} />
                <Convenios container={cont} />
                <Footer container={cont} />
            </div>
        </div>
    )
}