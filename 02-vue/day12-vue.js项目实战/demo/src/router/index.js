import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/page/Home'
// import Test1 from '@/page/Test1'

// 采用 import XXX from 'xxx' 引入的形式，后面打包的话，会将所有模块打包到一个文件中去

Vue.use(Router)

export default new Router({
  // mode: 'hash', // 默认值
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home,
      component: resolve => require(['@/page/Home'], resolve),
      // 采用上面这种方式加载模块，只有路由到了，才会加载，并不会一次性把所有的都搞进来
      children: [{
        path: 'newlist',
        component: resolve => require(['@/page/ChildrenList'], resolve)
      }],
      redirect: '/newlist'
    }, {
      path: '/channels',
      component: resolve => require(['@/page/Channels'], resolve)
    }, {
      path: '/search',
      component: resolve => require(['@/page/Search'], resolve)
    }
  ]
})
