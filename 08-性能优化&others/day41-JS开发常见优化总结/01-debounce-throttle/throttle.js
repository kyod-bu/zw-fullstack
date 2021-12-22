// throttle 节流
function throttle(fn, time) {
    var timer = null; // 闭包变量
    var lastTriggerTimeStamp = null;
    return function () {
        var self = this;
        var args = arguments;
        var currentTimeStamp = +new Date();

        if (lastTriggerTimeStamp && currentTimeStamp < lastTriggerTimeStamp + time) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                lastTriggerTimeStamp = currentTimeStamp;
                fn.apply(self, args);
            }, time);
        } else {
            // 超过 time 时间，还没有执行过 fn
            lastTriggerTimeStamp = currentTimeStamp;
            fn.apply(self, args);
        }
    }
}

window.throttle = throttle;
