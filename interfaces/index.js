import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './helpers/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';


$(document).ready(function(){

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root')
    );

})
