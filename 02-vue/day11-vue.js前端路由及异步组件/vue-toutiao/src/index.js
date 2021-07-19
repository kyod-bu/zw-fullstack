/**
 * @file 
 * @author kyod
 */

 import Vue from 'vue';
 import Main from './pages/main.vue';
 import VueRouter from './my-router'; // 使用自己写的 vue-router
//  import VueRouter from 'vue-router';
 import Detail from './pages/detail.vue';
 import Setting from './pages/setting.vue';
 import Login from './pages/login.vue';
 import Video from './components/detail-contents/video.vue';
 import Text from './components/detail-contents/text.vue';
 import { reachBottomNotify, functionalTool } from './utils';
 
 // 1. 以插件的方式使用之
//  想要use一个插件，该插件必须有一个install方法，即，Vue.install(XXX),
 Vue.use(VueRouter);
 Vue.use(reachBottomNotify);
 Vue.use(functionalTool);
 
 // 2. 用自己的组件配置之----children 可以配置嵌套路由
 const routes = [
     {
       path: '/page',
       component: Main,
      //  meta: { requiresAuth: true } // 路由元信息
     },
     {
       path: '/login',
       component: Login
     },
     {
       path: '/page/detail/:id',
       component: Detail,
       children: [
         {
           path: 'video',
           component: Video
         },
         {
           path: 'text',
           component: Text
         }
       ]
     }
 ];
 
 // 3. 用自己的配置文件创建之
 const router = new VueRouter({
     routes,
    //  // 滚动行为
    //  scrollBehavior(to, from, savedPosition) {
    //   //  借助 window.pageXOffset 和 window.pageYOffset
    //   // return 期望滚动到哪个的位置
    //   return {x: 0, y: 200};
    //  }
 });
 
// //  导航守卫------每次跳转路由时，做一些事情（比如拦截，或者跳转到login）
//  router.beforeEach((to, from, next) => {
//    console.log('每次路由发生之前，会来到这里==', to, from, next);
//    if (
//      (!/\/login/.exec(to.path) || /\/login/.exec(from.path))
//      && !/uid=[^;]+/g.exec(document.cookie)
//    ) {
//     // 如果 to 对应的 path 不是login，或者是从 login from 的
//     // 如果用户未能验证身份，则 `next` 进入 login
//     // 当你登陆成功之后，回跳到某个path， 用query设置
//     next({path: '/login', query: {back: to.path}});
//     return;
//    }
//    next();
//  });
 
 // 4. 将router给应用根部组件传入值
 const vm = new Vue({
 
     el: '#app',
 
     router,
 
     render(createElement) {
       return createElement('router-view');

      //  // 返回页面的时候，不希望重新加载数据。需要借助`keep-alive`缓存一下之前的信息
      //  return createElement('keep-alive', [
      //   createElement('router-view')
      //  ]);
     }
 
 });
 