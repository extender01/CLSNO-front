import React from 'react';
import {startLogin, startLogout} from '../actions/userActions';
import { connect } from 'react-redux';

import Cookies from 'js-cookie';



class LoginPage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            password: ''
        };
    };

        

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.name, value);
        this.setState(() => {
            return ({[name]: value})
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.startLogin({nick: this.state.nick, password: this.state.password});
    };

    logout = (e) => {
        e.preventDefault();
        this.props.startLogout();
        Cookies.remove('x-auth');

    };

    
    render() {
        return (
            <div>Ahoj
            <form onSubmit={this.onSubmit}>
            <input type='text' name='nick' placeholder='Prihlasovaci jmeno' value={this.state.nick} onChange={this.onChange}/>
            <input type='text' name='password' placeholder='Heslo' value={this.state.password} onChange={this.onChange} />
                <button>LOGIN</button>
            </form>

            <form onSubmit={this.logout}>
                <button>LOGOUT</button>
            </form>
            </div>
        )
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (credentials) => {
            dispatch(startLogin(credentials))
        },
        startLogout: () => {
            dispatch(startLogout())
        }
    };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);


