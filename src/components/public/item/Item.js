import React from 'react';
import './item.css';
import { IoMdSchool } from "react-icons/io";

export default function (props) {
    return (
        <div className='item-section'>
            <div className='icon'><IoMdSchool className='ionicon' /></div>
            <div className='info'>
                <h5 className='text-center'>{props.title}</h5>
            </div>
        </div>
    )
}
