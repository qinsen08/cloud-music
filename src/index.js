/*
 * @Author: qinsensen
 * @Date: 2020-06-15 14:10:02
 * @LastEditors: qinsensen
 * @LastEditTime: 2020-06-15 14:19:00
 * @Description: 
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
