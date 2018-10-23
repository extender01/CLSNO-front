import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import {startLogin, startLogout} from '../actions/userActions';
import LoginForm from './CredentialsForm';
import LogoutForm from './LogoutForm';
import CredentialsForm from './CredentialsForm';



class LoginPage extends React.Component {
    
    

        

    
//defautlstate mit loading na true, az se zjisti prihlaseny uzivatel tak v success tak loading: false, tim se zobrazi prihlaseny uzivatel
    
    isPageLoaded = () => {
        if (this.props.isLogged) {
            return (
                <h2>jsi prihlasen</h2>
            )
        } else {
            return (
                <h2>nejsi prihlasen</h2>
            )
        }
    };
    
    render() {
        return (
              <div>

                {this.isPageLoaded()}
               <CredentialsForm formSubmit={this.props.startLogin}/>
                <LogoutForm />
                
              
            </div>
        )
    }
};




const mapStateToProps = (state) => {
    
    
    return {
        isLogged: state.users.isLogged,
        loading: state.users.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (credentials) => {
            dispatch(startLogin(credentials))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


