import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import HomePage from '../components/HomePage';
import AddTestPage from '../components/AddTestPage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import SignupPage from '../components/SignupPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/create' component={AddTestPage}/>
                <Route path='/signup' component={SignupPage} />
                <Route patth='/login' component={LoginPage} />
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;