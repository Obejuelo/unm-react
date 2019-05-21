import React, {useState} from 'react';
import '../cardLic/cardLic.css';
import ModalPost from '../modalLic/ModalPost';

export default function({image, title, data, req}) {
    const img = `assets/images/postgr/${image}`;
    const [modal, setModal] = useState(false);

    function changeModal(value) {
        setModal(value)
    }

    return([
        <div className='card card-lic mb-3' key={1}>
            <div className='card-img' style={{backgroundImage: img}}>
                <img src={img} alt="lic" className='img-fluid'/>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <button onClick={()=> changeModal(!modal)} className='btn btn-lic btn-sm'>Ver más</button>
            </div>
        </div>,
        <ModalPost key={2}
            showModal={modal}
            hideModalFunction={changeModal}
            data={data}
            req={req}
            />
    ])
}