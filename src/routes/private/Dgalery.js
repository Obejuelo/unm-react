import React, { Component } from 'react';
import SideBar from '../../shared/private/SideBar';
import {url} from '../../util/config';
import NewImage from '../../components/private/NewImage';

class Dgalery extends Component {
    state = {  }

    componentDidMount(){
        this.verifyStorage()
    }

    verifyStorage = () => {
        if(localStorage.length !== 0)
            this.authenticate();
        else
            this.props.history.push('../login');
    }

    logOut = () => {
        localStorage.clear();
        this.props.history.push('/');
    }

    authenticate = () => {
        let store = JSON.parse(localStorage.getItem('user'));
        let body = {token: store.token};

        fetch(`${url}api/session`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=>res.json())
        .then(data => {
            // console.log(data);
            if(!data.ok) 
                this.props.history.push('/login');
        }).catch(err=>{
            console.log(err);
        });
    }

    render() { 
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                    <SideBar/>
                    <NewImage/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Dgalery;