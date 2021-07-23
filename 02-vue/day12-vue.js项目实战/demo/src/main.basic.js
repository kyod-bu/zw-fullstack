// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
Vue.use(Router)
// import router from './router

// Vue.config.productionTip = false

const Foo = { template: `<div>foo</div>` }
const Bar = { template: `<div>bar</div>` }
const Fail = { template: `<div>404</div>` }
const A = { template: `<div>a</div>` }

// 2. 定义路由
// 每个路由应该映射到一个组件。其中 “component” 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user-a', component: A },
  {
    // 会匹配 ‘/user-’ 开头的任意路径
    path: '/user-*',
    component: Fail
  }
]

const router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement('router-view')
  }
})
