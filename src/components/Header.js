import React from 'react';
import {NavLink} from 'react-router-dom';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

import {startLoggedUser }from '../actions/userActions';




class Header extends React.Component {
    
    componentDidMount() {
        // if (Cookies.get('x-auth')) {
        //     console.log('je tam');
        //     this.props.checkWhoIsLogged();
            
        // } else {
        //     console.log('neni tam');
            
        // }
        this.props.checkWhoIsLogged();
        

        
    }
    
    render() {
        return (
            <header>
                <h1>Lab SNO</h1>
                <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
                <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
                <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
                <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
                <NavLink to='/login' activeClassName='is-active'>Login</NavLink>
            </header>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkWhoIsLogged: () => {
            dispatch(startLoggedUser())
        },
        justTellNoOneLogged: () => {
            dispatch(loggedUserSuccess())
        }
    };
};

export default connect(undefined, mapDispatchToProps)(Header);