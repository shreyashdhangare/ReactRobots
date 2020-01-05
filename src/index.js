import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import App from './App.js';
import CardList from './CardList.js';
import * as serviceWorker from './serviceWorker';
//import 'tachyons';
import {robots} from './robots.js';

ReactDOM.render(<App></App>,document.getElementById('root'));
                 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
