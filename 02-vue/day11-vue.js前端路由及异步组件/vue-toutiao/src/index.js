/**
 * @file 
 * @author kyod
 */

 import Vue from 'vue';
 import Main from './pages/main.vue';
//  import VueRouter from './yx-router';
 import VueRouter from 'vue-router';
 import Detail from './pages/detail.vue';
 import Setting from './pages/setting.vue';
 import Login from './pages/login.vue';
 import Video from './components/detail-contents/video.vue';
 import Text from './components/detail-contents/text.vue';
 import { reachBottomNotify, functionalTool } from './utils';
 
 // 1. 以插件的方式使用之
 Vue.use(VueRouter);
 Vue.use(reachBottomNotify);
 Vue.use(functionalTool);
 
 // 2. 用自己的组件配置之
 const routes = [
     {
       path: '/page',
       component: Main
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
     routes
 });
 
 // ,
 //     scrollBehavior(to, from, savedPosition) {
 //       return {x: 0, y: 200};
 //     }
 
 // router.beforeEach((to, from, next) => {
 //   if (
 //     (!/\/login/.exec(to.path) || /\/login/.exec(from.path))
 //     && !/uid=[^;]+/g.exec(document.cookie)
 //   ) {
 //     next({path: '/login', query: {back: to.path}});
 //     return;
 //   }
 //   next();
 // });
 
 // 4. 将router给应用根部组件传入值
 const vm = new Vue({
 
     el: '#app',
 
     router,
 
     render(createElement) {
       return createElement('router-view');
       // createElement('keep-alive', [
         
       // ]);
     }
 
 });
 