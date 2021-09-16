(function (global) {
    // 把 element 渲染到 container 上
    const render = (element, container) => {
        Reconciler.updateContainer(element, container);
    };

    global.ReactDOM = {
        render
    };
})(window);
