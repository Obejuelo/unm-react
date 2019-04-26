import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

export default function (props) {
    const [showDrop, setShowDrop] = useState(false)

    function showDropMenu() {
        if (showDrop) {
            return (
                <div className="links">
                    {props.links.map((link, idx) => (
                        <li key={idx}>
                            <Link
                                to={`/${link.url}`}
                                onClick={() => {
                                    props.show()
                                    setShowDrop(!showDrop)
                                }}
                                style={{ fontSize: '14.1px' }}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </div>
            )
        }
        return
    }

    return (
        <div className="dropdown-side">
            <p onClick={() => setShowDrop(!showDrop)}>{props.title}<IoIosArrowDown /></p>
            {showDropMenu()}
        </div>
    )
}