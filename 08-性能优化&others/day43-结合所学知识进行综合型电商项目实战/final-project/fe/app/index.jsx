import React from 'react';
import { render } from 'react-dom';

render(
    <div>hello world</div>,
    document.body.appendChild(document.createElement('div'))
);
