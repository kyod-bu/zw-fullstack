/**
 * @author kyod
 * @description 执行上下文/闭包
 */
/* 执行上下文学习 */
function outser() {
    // executionContext -> scopeChain, variableObject, this
    function executionFunc() {
    
    }
}

/* 闭包 */
function getListDataManager() {
    // 外层scope中定义一个变量
    let localData = null;

    return {
        getData() {
            // 里面的函数使用外层的变量，而且是反复使用
            if(localData) {
                return Promise.resolve(localData);
            }
            return fetch('https://www.baidu.com/')
                .then(data => localData = data.json());
        }
    };
}
// 用的时候
const listDataManager = getListDataManager();
button.onclick = () => {
    // 每次都会去获取数据，但是有可能是获取的缓存的数据
    text.innerHTML = listDataManager.getData();
};
window.onscroll = () => {
    // 每次都会去获取数据，但是有可能是获取的缓存的数据
    text.innerHTML = listDataManager.getData();
};
