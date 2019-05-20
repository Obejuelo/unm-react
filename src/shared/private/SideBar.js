import React, {Component} from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {
    IoIosPaper, 
    IoIosImages, 
    IoIosPersonAdd, 
    IoIosLogOut} from 'react-icons/io';

class SideBar extends Component {

    logout = () => {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="barra-lateral col-12 col-sm-auto p-0">
                <div className="logo">
                    <h2>Dashboard</h2>
                </div>
                <nav className="menu d-flex d-sm-block justify-content-center flex-wrap">
                    <Link to="/dashboard/home"><IoIosPaper/><span>Noticias</span></Link>
                    <Link to="/dashboard/galery"><IoIosImages/><span>Galería</span></Link>
                    <Link to="/dashboard/users"><IoIosPersonAdd/><span>Usuarios</span></Link>
                    <div className='logOut' onClick={this.logout}><IoIosLogOut className='logout'/><span>Salir</span></div>
                    
                </nav>
            </div>
        )
    }
}

export default withRouter(SideBar);