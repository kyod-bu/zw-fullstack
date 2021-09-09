import React from 'react';
import './App.css';

import { TodoApp } from './components/TodoApp';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <h1>Redux-demo: TodoApp</h1>
            <TodoApp />
        </Provider>
    );
}

export default App;
