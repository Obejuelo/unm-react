import React from 'react';
import './cards.css';
import { Link } from 'react-router-dom';

export default function (props) {
    const image = `url('assets/images/home/${props.image}')`;
    return (
        <div className='card card-container mt-3'>
            <div
                className="card-img"
                style={{ backgroundImage: image }}>
            </div>
            <div className="card-content">
                <h5 className='card-title'>{props.title}</h5>
                <p className='text-justify'>{props.info}</p>
                <Link to={`/${props.link}`} className='btn btn-sm'>Ver más</Link>
            </div>
        </div>
    )
}