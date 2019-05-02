import React from 'react';

export default function InfoText({title, text, text2}) {
    return([
        <h3 className="text-muted text-center" key={1}>{title}</h3>,
        <p className="text-justify" key={2}>{text}</p>,
        text2 ? <p className="text-justify" key={3}>{text2}</p> : ''
    ])
}

InfoText.defaultProps = {
    title: '',
    text: '',
    text2: ''
}