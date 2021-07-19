// 0. 如果使用模块机制编程，导入 Vue 和 VueRouter ，要调用 Vue.use(VueRouter)
// 1. 定义（路由）组件-------可以从其他文件 import 进来

// import Home from './Home.vue';

const Home = { template: `<div>Home</div>` };
const User = { template: `<div>User {{ $route.params.id }}</div>` };
const Foo = { template: `<div>foo</div>` };
const Bar = { template: `<div>bar</div>` };
const Test = { template: `<div>test</div>`}

// 2. 定义路由
// 每个路由应该映射到一个组件。
// 其中 component 可以是通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象
const routes = [
    // 动态路径参数 以冒号开头
    // 现在访问像 /user/foo 和 /user/bar 都可以映射到相同的路由
    { path: '/home', component: Home },
    { path: '/user/:id', component: User },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/test', component: Test }
];
            
// 3. 创建 router 实例，然后传 routes 配置（还可以传入别的配置哦）
const router = new VueRouter({
    routes
});

// 4. 创建和挂载根实例
// 记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app');
