import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {url} from '../../util/config';
import SpinnerWaith from '../../shared/private/SpinnerWaith';

class Login extends Component{
    emailRef = new React.createRef();
    passRef = new React.createRef()

    state = {
        token: this.props.token,
        spinner: false
    }

    componentWillMount(){
        if(localStorage.length !== 0){
            this.authenticate();
        }
    }

    signIn = (e) => {
        this.setState({spinner: true})
        e.preventDefault();
        let body = {
            email: this.emailRef.current.value,
            pass: this.passRef.current.value
        }
        this.props.signIn(body);
        // setTimeout(() => {
        //     this.setState({spinner: false})
        //     this.props.history.push('dashboard/home');
        // }, 2000);
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
                    <form className='form'>
                        <input 
                            type="text"
                            ref={this.emailRef}
                            className='form-control'
                            placeholder='User (email)'/>
                        <input 
                            type="password"
                            ref={this.passRef}
                            className='form-control'
                            placeholder='Password'/>
                        <div className='text-center'>
                            <button
                                className='btn btn-sm btn-dark'
                                onClick={this.signIn}>
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
                {this.state.spinner ? <SpinnerWaith/> : ''}
            </div>
        )
    }

}

export default withRouter(Login);