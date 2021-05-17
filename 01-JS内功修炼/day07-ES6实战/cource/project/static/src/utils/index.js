export const request = params => {
    params.method = params.method || 'GET';
    return fetch(
        params.url,
        params
    )
    .then(res => res.json());
};

export const throttle = (timeout = 1000) => (targetPrototype, propName) => {
    const oldMethod = targetPrototype[propName];
    let prevTime = 0;
    targetPrototype[propName] = function () {
        // 开始计时
        const curTime = +new Date();
        if (curTime - prevTime > timeout) {
            oldMethod.call(this);
            prevTime = curTime;
        }
    }
    return targetPrototype;
};
