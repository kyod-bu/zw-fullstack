const Vue = require('vue');
const Router = require('vue-router');

const component1 = require('../components/component-1');
const component2 = require('../components/component-2');

const config = {
    mode: 'history',
    routes: [
        { path: '/component-1', component: component1 },
        { path: '/component-2', component: component2 }
    ]
};

Vue.use(Router);

module.exports = function() {
    const instance = new Router(config);
    return instance;
}
