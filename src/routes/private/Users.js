import React, { Component } from 'react';
import {url} from '../../util/config';
import SideBar from '../../shared/private/SideBar';
import ChangePass from '../../components/private/ChangePass';

class Users extends Component {

    componentDidMount(){
        this.verifyStorage()
    }

    verifyStorage = () => {
        if(localStorage.length !== 0)
            this.authenticate();
        else
            this.props.history.push('../login');
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
            <div className=''>
                <div className="container-fluid">
                    <div className="row">
                        <SideBar/>
                        <ChangePass/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Users;