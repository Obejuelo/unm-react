import React, {useState} from 'react';
import './teacher.css';
import ModaTeacher from './ModaTeacher';

export default function({name, info}){
    const [showModal, setShowModal] = useState(false);
    
    function changeShowModal(){
        setShowModal(!showModal)
    }

    return([
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={1}>
            <div className="teacher-content text-center">
                <img src="assets/images/teachers/not-found.jpg" alt="teacher" className='img-teacher'/>
                <h6 className='text-muted mt-2'>{name}</h6>
                <button 
                    className='btn btn-dark btn-sm'
                    onClick={changeShowModal}>
                    Ver más
                </button>
            </div>
        </div>,
        <ModaTeacher 
            key={2}
            show={showModal}
            close={changeShowModal}
            info={info}/>
    ])
}