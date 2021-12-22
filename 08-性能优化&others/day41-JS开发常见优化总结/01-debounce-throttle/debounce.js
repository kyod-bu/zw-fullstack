// debounce 防抖
function debounce(fn, time) {
    var timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        var self = this;
        var args = arguments;
        timer = setTimeout(() => {
            fn.apply(self, args);
        }, time);
    }
}

window.debounce = debounce;
