import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as firebase from 'firebase';
import {history} from './routers/AppRouter';

//MDB
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(<AppRouter />, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user) =>{
    if (user) {
        console.log("logged in");
        history.push('/home');
    } else {
       console.log("logged out");
       history.push('/');
    }
  });