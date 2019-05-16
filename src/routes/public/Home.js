import React from 'react';
import Header from '../../components/public/header/Header';
import Section from '../../components/public/sections/Section';
import CardSection from '../../components/public/cardSection/CardSection';
import Convenios from '../../components/public/convenios/Convenios';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';

export default function ({container}) {
    
    return (
        <div>
            <Navbar/>
            <div className='page'>
                <Header />
                <Section container={container} />
                <CardSection container={container} />
                <Convenios container={container} />
                <Footer container={container} />
            </div>
        </div>
    )
}