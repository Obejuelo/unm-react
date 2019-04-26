import React from 'react';
import './dropLic.css';

export default function ({close, lic}) {
    return(
        <div className="text-center drop-container">
            <div className="dropdown-lic">
                <p onClick={()=>{close(false); lic('administracion')}}>Administración</p>
                <p onClick={()=>{close(false); lic('derecho')}}>Derecho</p>
                <p onClick={()=>{close(false); lic('fisica')}}>Educación Física</p>
                <p onClick={()=>{close(false); lic('filosofia')}}>Filosofía</p>
                <p onClick={()=>{close(false); lic('nutricion')}}>Nutrición</p>
                <p onClick={()=>{close(false); lic('pedagogia')}}>Pedagogía</p>
                <p onClick={()=>{close(false); lic('psicologia')}}>Psicología Social</p>
                <p onClick={()=>{close(false); lic('sistemas')}}>Sistemas</p>
            </div>
        </div>
    )
}