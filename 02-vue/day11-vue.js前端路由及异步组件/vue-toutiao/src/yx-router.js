/**
 * @author kyod 
 */

 class History {

    listen(callback) {
        window.addEventListener('hashchange', () => {
            callback && callback(window.location.hash);
        });
    }

    push(path) {
        window.location.hash = '#' + path;
    }

    static getPath() {
        const curHash = window.location.hash;
        return curHash.replace(/^\#/, '');
    }
}

const convert = (route, parent) => {
    const path = route.path;
    const normalPath = '/' + path.split('/')
        .filter(item => item !== '')
        .join('/');
    const regexStr = normalPath
        .replace(/(\:\w+)/g, '([^\/]+)')
        .replace(/\//g, () => '\\/') + '$'
    const pathRegx = new RegExp(regexStr);
    return {
        ...route,
        regx: pathRegx,
        parent
    };
};

const getComponentsStack = route => {
    let routeStack = [];
    while (route) {
        routeStack.unshift(route);
        route = route.parent;
    }
    return routeStack;
};

const createMatcher = routesConfig => {

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
        // 存一份配置表，方便之后渲然组件的时候使用
        this.routes = options.routes;
        // 可以检测路由的变化
        this.history = new History();
        // 路由真的变了的时候，可以刷新组件
        this.history.listen(newHash => {
            console.log('变了hash::', newHash);
            // 一会儿等到路由变了之后，刷新一下我的组件
            this.vm.$forceUpdate();
        });
        this.matcher = createMatcher(this.routes);
    }

    getRoute(path) {
        return this.matcher.match(path);
    }

    back() {
        window.history.back();
    }

    push({path}) {
        this.history.push(path);
    }

    static install(Vue, options) {
        // 让每个组件，都可以拥有一个this.$router
        Vue.mixin({
            created() {
                if (this.$options.router) {
                    this.$router = this.$options.router;
                    // vm一会要用
                    this.$router.vm = this;
                    this._routerRoot = this;
                }
                else {
                    this.$router = this.$parent.$router;
                    this._routerRoot = this.$parent._routerRoot;
                }
            }
        });

        // 创建一个组件，组件，functional
        Vue.component('router-view', {

            functional: true,

            render(createElement, {data, props, children, parent}) {
                const router = parent.$router;
                data.routeView = true;
                const currentPath = History.getPath();
                // 先找到孩子
                const singleRoute = router.getRoute(currentPath);
                // 根据孩子的线索，找到自己所有的祖先，排成一排
                const componentsStack = getComponentsStack(singleRoute);
                // 根据自己在第几层，决定，要那个祖先
                let depth = 0;
                while (parent) {
                    const vNodedata = parent.$vnode ? parent.$vnode.data : {};
                    if (vNodedata.routeView) {
                        depth++;
                    }
                    parent = parent.$parent;
                }
                const finalRoute = componentsStack[depth];
                if (!finalRoute) {
                    return null;
                }
                return createElement(finalRoute.component, data);
            }
        });
        // 这个组件，每次渲然的时候，根据当前页面的path，找到要渲然的界面
    }

}
