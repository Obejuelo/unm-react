import React from 'react';
import './dashboard.css';

export default function() {
    const passRef = new React.createRef();
    const newRef = new React.createRef();
    const confRef = new React.createRef();

    const changePass = (e) => {
        e.preventDefault();
        let body = {
            pass: passRef.current.value,
            newPass: newRef.current.value,
            confPass: confRef.current.value,
        }
        console.log(body);
    }
    return(
        <div className='main col' key={1}>
            <div className="row">
                <div className="columna col-lg-7">
                    <div className="widget nueva_entrada">
                        <h3 className="titulo">Cambiar contraseña</h3>
                        <form onSubmit={changePass}>
                            <input 
                                type="text" 
                                ref={passRef}
                                placeholder='Contraseña actual' 
                                required/>
                            <input 
                                type="text" 
                                ref={newRef}
                                placeholder='Nueva contraseña' 
                                required/>
                            <input 
                                type="text" 
                                ref={confRef}
                                placeholder='Confirmar contraseña' 
                                required/>
                            <button>Cambiar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}