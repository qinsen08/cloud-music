/*
 * @Author: qinsensen
 * @Date: 2020-06-15 14:10:02
 * @LastEditors: qinsensen
 * @LastEditTime: 2020-06-15 19:02:26
 * @Description: 
 */
import React from 'react';
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle></GlobalStyle>
                <IconStyle></IconStyle>
                {/* <i className="iconfont">&#xe768;</i> */}
                {renderRoutes(routes)}
            </BrowserRouter>
        </Provider>
    );
}

export default App;
