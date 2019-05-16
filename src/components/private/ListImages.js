import React from 'react';

export default function({images, idDelete, getImage, setModal, setOption}) {
    const deleteImage = (id) => {
        setModal(true);
        idDelete(id);
    }

    return(
        <div className="columna col-lg-5">
            <div className="widget estadisticas">
                <h3 className="titulo">Entradas</h3>
                <div className="contenedor">
                    {images.map(img => (
                        <div 
                            className="caja" 
                            key={img._id}
                            style={{
                                backgroundImage: `url('${img.image}')`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                height: '100px'
                            }}>
                            <div className='text-center'>
                                <button 
                                    className="btn btn-sm btn-secondary m-1"
                                    onClick={()=>getImage(img._id)}
                                    >
                                    Editar
                                </button>
                                <button 
                                    className="btn btn-sm btn-danger m-1"
                                    onClick={()=>deleteImage(img._id)}
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