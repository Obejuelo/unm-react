import React from 'react';

export default function() {
    return(
        <div 
            className="alert alert-warning text-center mt-3" 
            role="alert"
            style={{
                position: 'absolute',
                top: '0'
            }}>
            Usuario o contraseña incorrectos
        </div>
    )
}