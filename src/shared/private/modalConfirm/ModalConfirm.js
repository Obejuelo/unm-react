import React from 'react';
import './confirm.css';
import { IoMdWarning } from "react-icons/io";

export default function ({idDelete, deleteItem, setModal}) {
    return (
        <div className='modal-confirm'>
            <div className="confirm">
                <h4 className='text-center mt-1'>Estas a punto de eliminar un registro</h4>
                <div className="text-center">
                    <IoMdWarning size='3em' color='red'/>
                </div>
                <div className='text-center buttons mt-1'>
                    <button 
                        className='btn btn-sm btn-success'
                        onClick={()=>deleteItem(idDelete)}
                        >
                        Aceptar
                    </button>
                    <button 
                        className='btn btn-sm btn-danger'
                        onClick={()=>setModal(false)}
                        >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}