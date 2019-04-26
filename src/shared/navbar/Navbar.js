import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { somos, oferta } from '../../util/Dropdowns';
import Dropdown from '../../components/public/dropdown/Dropdown';
import Sidebar from '../../components/public/sidebar/Sidebar';
import { IoMdMenu } from 'react-icons/io';

// util
import { resize, container } from '../../util/resize';

export default function () {
    const [width, setWidth] = useState(window.innerWidth);
    const [showSide, setShowSide] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            resize(setWidth)
        })

        return () => {
            window.removeEventListener('resize', () => {
                resize(setWidth)
            })
        }
    }, [width])

    function showSideMenu() {
        if (showSide)
            return 'translateX(0px)'
        return 'translateX(-254px)'
    }

    function changeSideMenu() {
        setShowSide(!showSide)
    }

    function renderItems() {
        if (width < 926) {
            return ([
                <IoMdMenu
                    key={1}
                    className='menu-bar'
                    onClick={() => setShowSide(!showSide)}
                />,
                <Sidebar
                    key={2}
                    translate={showSideMenu()}
                    show={changeSideMenu}
                    opacity={showSide} />
            ])
        }
        return (
            <div className="links">
                <li><Link to='/'>Inicio</Link></li>
                <Dropdown
                    links={somos}
                    title='¿Quienes somos?'
                    width='163px' />
                <Dropdown
                    links={oferta}
                    title='Oferta Académica'
                    width='251px' />
                <li><Link to='/news'>Noticias</Link></li>
                <li><Link to='/galery'>Galería</Link></li>
                <li><Link to='/contact'>Contacto</Link></li>
                <li><a href='https://www.sesweb.mx'>Plataforma</a></li>
            </div>
        )
    }

    return (
        <div className="nav-container">
            <nav className={`navbar ${container(width)}`}>
                <div className='toolbar'>
                    <h1>Universidad Nacionalista México</h1>
                </div>
                {renderItems()}
            </nav>
        </div>
    )
}