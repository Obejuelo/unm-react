import React from 'react';
import {Link} from 'react-router-dom';
import './cardnew.css';

export default function CardNew({title, info, image, _id}) {
    const url = `url('${image}')`;
    const desc = info.substr(1 - 200);
    return(
        <div className="card card-news">
            <div className="card-img" style={{backgroundImage: url}}></div>
            <div className="card-body text-center">
                <h5>{title}</h5>
                <p className='text-justify'>{desc}</p>
                <Link 
                    to={`single-new/${_id}`}
                    className="btn btn-dark btn-sm">
                    Ver más
                </Link>
            </div>
        </div>
    )
}

CardNew.defaulProps = {
    image: 'https://res.cloudinary.com/obejuelo/image/upload/v1556648256/criawjgt7dcpq8gctyx0.jpg'
}