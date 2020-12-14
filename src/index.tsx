import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './componants/app/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Helmet} from "react-helmet";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename='/'>
            <Helmet title={"Harry's Demo"}/>
            <App/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
