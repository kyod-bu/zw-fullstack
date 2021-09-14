import React from 'react';
import { Route, Link } from './routerComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/'>首页</Link>
      <Link to='/about/test'>关于test</Link>
      <Link to='/about/about'>关于about</Link>

      <Route path='/' component={Home} />
      <Route path='/about/test' component={About} />
      <Route path='/about/:id' render={(props) => { return (<About {...props} />); }} />
    </div>
  );
}

function Home({match}) {
  return (
    <div>Home</div>
  );
}

function About({match}) {
  return (
    <div>About {match.params.id}</div>
  );
}

export default App;
