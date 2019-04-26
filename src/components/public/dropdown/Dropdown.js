import React from 'react';
import './dropdown.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown(props) {

    return (
        <div className="dropdown">
            <p>{props.title}<IoIosArrowDown className='arrow-icon' /></p>
            <div className="link" style={{ width: props.width }}>
                {props.links.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <Link
                                to={`/${link.url}`} id='drop-display'>
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}
