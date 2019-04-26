import React from 'react';
import Modal from 'react-responsive-modal';

export default function({show, close, info}) {
    
    return (
        <Modal
            open={show} 
            onClose={()=>{close()}}
            blockScroll={false}
            showCloseIcon={false}>
            <p className='text-justify' id='p-info'>{`${info}`}</p>
            <div className="text-center">
                <button 
                    className="btn btn-dark btn-sm"
                    onClick={()=>close()}>
                    Cerrar
                </button>
            </div>
        </Modal>
    )
}