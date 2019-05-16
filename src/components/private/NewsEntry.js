import React from 'react';
import './dashboard.css';

export default function({news, getNotice, modal, idDelete}) {
    const setParams = (id) => {
        idDelete(id);
        modal(true);
    }

    return(
        <div className="columna col-lg-5">
            <div className="widget estadisticas">
                <h3 className="titulo">Entradas</h3>
                <div className="contenedor">
                    {news.map(notice => (
                        <div className="caja" key={notice._id}>
                            <h4>{notice.title}</h4>
                            <div className='text-center'>
                                <button 
                                    className="btn btn-sm btn-secondary m-1"
                                    onClick={()=>getNotice(notice._id)}
                                    >
                                    Editar
                                </button>
                                <button 
                                    className="btn btn-sm btn-danger m-1"
                                    onClick={()=>setParams(notice._id)}
                                    >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}