import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function () {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/about"><About /></Route>
                <Route path="/"><Index /></Route>
            </Switch>
        </Router>
    );
}

function Header() {
    return (
        <nav>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">关于我</Link></li>
            </ul>
        </nav>
    )
}

function About() {
    return (
        <h2>这个是 about 组件</h2>
    )
}

function Index() {
    return (
        <h2>这个是 index 组件</h2>
    )
}
