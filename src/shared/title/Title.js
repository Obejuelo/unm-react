import React, { useState, useEffect } from 'react';
import { resize, container } from '../../util/resize';
import './title.css';

export default function ({ title }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [cont, setCont] = useState('');

    useEffect(() => {
        function updateWidth() { resize(setWidth); }
        setCont(container(width));
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [width, cont])

    const renderTitle = () => {
        if (width >= 576) {
            return (
                <div className='title'>
                    <div className="title-text">
                        <h5>{title}</h5>
                    </div>
                </div>
            )
        }
        return '';
    }

    return renderTitle();
}
