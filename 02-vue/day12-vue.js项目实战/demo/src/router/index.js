import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/page/Home'
// import Test1 from '@/page/Test1'

Vue.use(Router)

export default new Router({
  // mode: 'hash', // 默认值
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home,
      component: resolve => require(['@/page/Home'], resolve),
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
