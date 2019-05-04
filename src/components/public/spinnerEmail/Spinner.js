import React from 'react';
import Modal from 'react-responsive-modal';
import './spinner.css';

export default function({message, show, close}) {
    return(
        <Modal 
            open={show} 
            onClose={close}
            blockScroll={false}
            showCloseIcon={false}>
            {(message.length === 0)
            ?   <div className='spinner-email'>
                    <div 
                        className="spinner-border text-danger" 
                        role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            :   <div 
                    className="d-flex spinner-email"
                    style={{height: '100px'}}>
                    <h3>{message}</h3>
                </div>}
            
        </Modal>
    )
}