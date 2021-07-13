const Vue = require('vue/dist/vue.js');

module.exports = function(router) {
    const app = new Vue({
        router,
        template: `
        <div id="app">
            <div>
                <router-link to="/component-1">点击切换到组件 1</router-link>
                <router-link to="/component-2">点击切换到组件 2</router-link>
                
            </div>
            <router-view></router-view>
        </div>
        `
    });
    return app;
}
