import React from 'react';
import './header.css';

export default function () {
    return (
        <div
            className='header'
            style={{ backgroundImage: "url('assets/images/home/colegio.jpg')" }}>
            <div className="info">
                <h1>Tu mejor elección</h1>
                <h4><em>#FamiliaEducativaMéxico</em></h4>
            </div>
            <div className="header-opacity"></div>
        </div>
    )
}