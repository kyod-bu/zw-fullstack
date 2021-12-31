import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import styles from './index.less';

export default class extends React.Component {
    render() {
        const history = createBrowserHistory();
        return (
            <Router>
                <div id={styles['app']}>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/about" component={About}></Route>
                        {/* <Route exact path="/list" component={List}></Route> */}
                        {/* <Route exact path="/detail/:id" component={Detail}></Route> */}
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
};
