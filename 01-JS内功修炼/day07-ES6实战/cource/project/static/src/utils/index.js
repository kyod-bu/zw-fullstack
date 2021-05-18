/**
 * @description 封装一下 fetch 方法
 * @param {*} params 
 * @returns 
 */
export const request = params => {
    params.method = params.method || 'GET'; // 默认情况下，GET 请求
    return fetch(
        params.url,
        params
    )
    .then(res => res.json()); // 如果有返回，结果解析一下
};

/**
 * @description 节流（不停的 丢弃 后来者）
 * @param {*} timeout 阈值
 * @returns 
 */
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
