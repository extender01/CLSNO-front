import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import configureStore from './store/configureStore';
import { Provider } from "react-redux";

import AppRouter from './routers/AppRouter';


import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById("app"));
