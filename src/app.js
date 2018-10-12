import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import configureStore from './store/configureStore';
import { Provider } from "react-redux";

import AppRouter from './routers/AppRouter';
import {addTest} from './actions/testActions';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();



store.dispatch(addTest());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById("app"));
