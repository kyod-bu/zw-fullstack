import React from 'react';
import './App.css';

import { TodoApp } from './components/TodoApp';
import { Todos } from './mobx/todo';

const todos = new Todos();
// const todos2 = new Todos();

function App() {
  return <TodoApp todos={todos} />;
}

export default App;
