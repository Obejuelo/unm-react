import React from 'react';

const TextInfo = ({title, info}) => {
    return (
        <div>
            <h3 className='text-center text-muted' key={1}>{title}</h3>
            {info.map((text, idx) => (
                <p className='text-justify' key={idx}>{text.p}</p>
            ))}
        </div>
    )
};

TextInfo.defaltProps = {
    title: 'Mi título',
    info: [{p:'parrafo'}]
}

export default TextInfo;