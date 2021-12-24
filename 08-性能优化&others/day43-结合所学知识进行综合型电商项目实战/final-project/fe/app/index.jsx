import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'; // HashRouter 兼容性好很多
import App from './App';
import './index.less';

render(
    <HashRouter basename='/'>
        <App />
    </HashRouter>,
    document.body.appendChild(document.createElement('div'))
);
