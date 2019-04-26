import React, {useState} from 'react';
import './cardLic.css';
import ModalLic from '../modalLic/ModalLic';

export default function({image, title, data, req}) {
    const [modal, setModal] = useState(false);
    const img = `assets/images/lic/${image}`;

    function changeModal(value) {
        setModal(value)
    }
    
    return([
        <div className='card card-lic mb-3' key={1}>
            <div className='card-img'>
                <img src={img} alt="lic" className='img-fluid' onClick={() => changeModal(!modal)}/>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <button 
                    className='btn btn-lic btn-sm'
                    onClick={() => changeModal(!modal)}>Ver más</button>
            </div>
        </div>,
        <ModalLic
            key={2}
            showModal={modal}
            hideModalFunction={changeModal}
            data={data}
            req={req}/>
    ])
}