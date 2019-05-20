import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {url} from '../../util/config';
import AlertErr from '../../shared/private/AlertErr';
import SpinnerLogin from '../../shared/private/SpinnerLogin';

class Login extends Component{
    emailRef = new React.createRef();
    passRef = new React.createRef()

    componentWillMount(){
        if(localStorage.length !== 0){
            this.authenticate();
        }
    }

    signIn = (e) => {
        e.preventDefault();
        let body = {
            email: this.emailRef.current.value,
            pass: this.passRef.current.value
        }
        this.props.signIn(body);
    }

    authenticate = () => {
        let storage = JSON.parse(localStorage.getItem('user'));
        let body = {token: storage.token};

        fetch(`${url}api/session`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=>res.json())
        .then(data => {
            if(data.ok){
                this.props.history.push('/dashboard/home');
            }
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
        return(
            <div className='login'>
                <div className='card-login'>
                    <h4 className='text-muted'>Login</h4>
                    <form className='form' onSubmit={this.signIn}>
                        <input 
                            type="email"
                            ref={this.emailRef}
                            className='form-control'
                            placeholder='User (email)'
                            required/>
                        <input 
                            type="password"
                            ref={this.passRef}
                            className='form-control'
                            placeholder='Password'
                            required/>
                        <div className='text-center'>
                            <button
                                className='btn btn-sm btn-dark'>
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
                {this.props.sp ? <SpinnerLogin/> : ''}
                {this.props.al ? <AlertErr/> : ''}
            </div>
        )
    }

}

export default withRouter(Login);