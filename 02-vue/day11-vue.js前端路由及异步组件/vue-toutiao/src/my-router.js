/**
 * @file 自己尝试一下 vue-router 插件
 * @author kyod 
 */

 class History {

    // 监听路由变化，hash版
    listen(callback) {
        window.addEventListener('hashchange', () => {
            callback && callback(window.location.hash);
        });
    }

    // 改 hash
    push(path) {
        window.location.hash = '#' + path;
    }

    static getPath() {
        const curHash = window.location.hash;
        return curHash.replace(/^\#/, ''); // 修饰毛边, 去掉hash中开头的`#`
    }
}

const convert = (route, parent) => {
    const path = route.path;
    // console.log('path::::', path);
    const normalPath = '/' + path.split('/')
        .filter(item => item !== '')
        .join('/');
    // console.log('normalPath:::', normalPath);

    // 更换 变量 为正则表达式
    // 如：/page/detail/:id 里面的 :id 替换为正则 `非/的东西`
    const regexStr = normalPath
        .replace(/(\:\w+)/g, '([^\/]+)')
        .replace(/\//g, () => '\\/') + '$';

    const pathRegx = new RegExp(regexStr);
    return {
        ...route,
        regx: pathRegx,
        parent
    };
};

// 这里用 栈（stack） 或 队列（queue） 都行
// 栈（stack）：不停的往前面 推
// 队列（queue：不停的在后面 追加
const getComponentsStack = route => {
    let routeStack = [];
    while (route) {
        routeStack.unshift(route);
        route = route.parent;
    }
    return routeStack;
};

// 分装一个工具函数（根据routes返回一个matcher，之后matcher将会掌管大权）
const createMatcher = routesConfig => {
    // 序列化一下routes
    // const pathMap = routesConfig.map(route => {
    //     return convert(route);
    // });

    // 考虑到上面的方式，只能序列化 单层路由，碰到嵌套路由就傻眼了
    // 下面我们处理一下 嵌套路由（这里借助了“递归”的思路）
    // 实现的思路：将下面的“嵌套路由结构”拍平为：{ path: '/page/detail/:id/video', component: Video }
    // {
    //     path: '/page/detail/:id',
    //     component: Detail,
    //     children: [
    //       {
    //         path: 'video',
    //         component: Video
    //       }
    //     ]
    // }
    const formatRoutes = (routes, basePath = '', parent = null) => {
        return routes.reduce((flatternArr, route) => {
            if (route.children) {
                flatternArr = flatternArr.concat(formatRoutes(route.children, route.path + '/', route));
            }
            route.path = basePath + route.path;
            flatternArr.push(convert(route, parent));
            return flatternArr;
        }, []);
    }

    const pathMap = formatRoutes(routesConfig);
    console.log('pathMap::', pathMap);

    // 根据传进来的path，经过处理，返回一个route
    const match = curPath => {
        return pathMap.find(route => {
            return route.regx.exec(curPath);
        });
    };

    return {
        match
    };
};

export default class VueRouter {

    constructor(options) {
        // 存一份配置路由表，方便之后渲然组件的时候使用
        this.routes = options.routes;
        // 可以检测路由的变化
        this.history = new History();
        // 路由真的变了的时候，可以刷新组件
        this.history.listen(newHash => {
            // console.log('hash变了，新的hash::', newHash);
            // 一会儿等到路由变了之后，刷新一下我的组件
            this.vm.$forceUpdate();
        });
        this.matcher = createMatcher(this.routes);
    }

    getRoute(path) {
        // return this.routes.find(item => item.path === path);

        // 上面的 === 看上去很傻，也不能完全匹配得到，因此我们考虑采用“正则匹配”
        // const gettedRoute = this.matcher.match(path);
        // console.log('gettedRoute::', gettedRoute);
        // return gettedRoute;
        return this.matcher.match(path);
    }

    back() {
        window.history.back();
    }

    push({path}) {
        this.history.push(path);
    }

    // 静态方法 install，供 Vue.use() 使用
    static install(Vue, options) {
        // mixin 进来一个生命周期
        // 让每个组件，都可以拥有一个 this.$router
        Vue.mixin({
            created() {
                if (this.$options.router) {
                    // 如果根组件的options里面有router，挂到this上面
                    this.$router = this.$options.router;
                    // 把我们的`router`记录一下，vm一会要用
                    this.$router.vm = this;
                    this._routerRoot = this;
                }
                else {
                    // 否则，往上找，在父组件、爷爷组件……去找
                    this.$router = this.$parent.$router;
                    this._routerRoot = this.$parent._routerRoot;
                }
            }
        });

        // 创建一个组件，组件，functional
        Vue.component('router-view', {

            functional: true, 

            // 渲染
            render(createElement, {data, props, children, parent}) {
                const router = parent.$router;
                data.routeView = true;
                const currentPath = History.getPath(); // 获取当前的path，即window.location.hash，不包含hash头部的`#`
                // console.log('currentPath::', currentPath);
                // 先找到孩子
                const singleRoute = router.getRoute(currentPath); // 这里拿到的其实就是一个route对象，如 {path: '/page', component: Main}
                // console.log('singleRoute::', singleRoute);

                // 根据孩子的线索，找到自己所有的祖先，排成一排
                const componentsStack = getComponentsStack(singleRoute);
                // console.log('componentsStack::', componentsStack);
                
                // 根据自己在第几层，决定，要那个祖先
                let depth = 0;
                while (parent) {
                    const vNodedata = parent.$vnode ? parent.$vnode.data : {};
                    if (vNodedata.routeView) {
                        depth++;
                    }
                    parent = parent.$parent;
                }
                const finalRoute = componentsStack[depth]; // 直接找到对应层的，渲染之即可
                if (!finalRoute) {
                    return null;
                }
                // return createElement('span', 'this is span'); // 测试一下渲染
                // 但是我们真正需要渲染的应该是根据 route.path 渲染出来的组件
                // return createElement(singleRoute.component, data);
                return createElement(finalRoute.component, data);
            }
        });

        // 这个组件，每次渲然的时候，根据当前页面的path，找到要渲然的界面
    }
}
