import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Covid19  from './components/covid/Covid19'
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login'

ReactDOM.render(
  <React.StrictMode>
    <Covid19 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
