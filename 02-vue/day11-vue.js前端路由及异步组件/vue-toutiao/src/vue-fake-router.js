/**
 * @file router
 * @author kyod
 */

 const createRouteStack = route => {
	let routeStack = [];
	while (route) {
		routeStack.unshift(route);
		route = route.parent;
	}
	return routeStack;
};

// 转换path成为正则表达式
const converter = route => {
	const path = route.path;
	const params = [];
	const regex = path
	.replace(/(\:\w*)/g, (allPath, param) => {
		params.push({
			name: param
		});
		return '([^\/]+)';
	})
	.replace(/\//g, () => '\\/') + '$';
	const pathRegx = new RegExp(regex, 'ig');
	return {
		pathRegx,
		params,
		raw: path,
		component: route.component,
		parent: route.parent
	};
}

const createMatcher = routesConfig => {
	const pathMap = routesConfig
		.reduce((pathMap, route) => {
			const pathInfo = converter(route);
			if (route.children) {
				route.children
					.forEach(subRoute => {
						const fullPath = route.path + '/' + subRoute.path;
						const normalPath = '/' + fullPath.split('/').filter(item => item !== '').join('/');
						const subPathInfo = converter({
							...subRoute,
							path: normalPath,
							parent: pathInfo
						});
						pathMap[subPathInfo.raw] = subPathInfo;
					});
			}
			pathMap[pathInfo.raw] = pathInfo;
			return pathMap;
		}, {});
	const match = curPath => {
		for (let path in pathMap) {
			const pathInfo = pathMap[path];
			const pathRes = pathInfo.pathRegx.exec(curPath);
			if (pathRes) {
				return pathInfo;
			}
		}
	};
	return {
		match
	};
};

const matcher = (path, routesConfig) => {
	const matcher = createMatcher(routesConfig);
	return matcher.match(path);
};

class History {

	listen(callback) {
		window.addEventListener('hashchange', () => {
			callback && callback(window.location.hash);
		});
	}

	push(path) {
		window.location.hash = '#' + path;
	}
}

export default class VueRouter {

	constructor(options) {
		// 记录一下配置项
		this.routes = options.routes;
		// 工具
		this.history = new History();
		this.history.listen(newHash => {
			this.vm.$forceUpdate();
		});
	}

	push({path}) {
		console.log('pathhhhhh:', path);
		this.history.push(path);
	}

	static install(Vue, options) {

		Vue.mixin({
			created() {
				// 自查
				if (this.$options.router) {
					// 把自己挂到router上，方便调用
					this.$options.router.vm = this;
					// 
					this.$router = this.$options.router;
					this._routerRoot = this;
				}
				else {
					// 否则自己身上的router就是paretn传过来的
					this.$router = this.$parent.$router;
					this._routerRoot = this.$parent.$router._routerRoot;
				}
			}
		});

		Vue.component('router-view', {

			functional: true,

			render(createElement, {props, children, parent, data}) {

				data.routerView = true;
				const currentHash = location.hash;
				const router = parent.$router;
				let depth = 0;
				while (parent) {
					const vnodeData = parent.$vnode ? parent.$vnode.data : {}
					if (vnodeData.routerView) {
						depth++
					}
					parent = parent.$parent;
				}
				const currentRoute = matcher(currentHash, router.routes);
				const routeStack = createRouteStack(currentRoute);
				const matchRoute = routeStack[depth];
				if (!matchRoute) {
					return null;
				}
				// this.$parent.$options.router.routes
				// 拿到当前路径下应该对应的component
				return createElement(matchRoute.component, data);
			}

		});

		Vue.component('router-link', {
			render(createElement) {
				return createElement('span', {
					on: {
						click: this.clicking
					}
				}, this.$slots.default);
			},

			methods: {
				clicking() {
					window.history.back();
					//this.$parent.$router.back();
				}
			}
		});
	}

}
