/**
 * @description 最早的jquery实现：把选dom，渲染dom化繁为简
 */
 (function () {
    let appData = {
        price: 48,
        info: {
            message: '猪肉价格：'
        }
    };
    let root = '#app';
    
    const refresh = () => {
        document.querySelector(root).innerHTML = `<div title="${appData.info.message}" data-xxx=${appData.price}>价格标签：${appData.price}</div>`;
    }
    // 当想要改变数据的时候
    // 这种写法，每次刷新数据，整个html都会重新渲染
    document.querySelector(root).addEventListener('click', () => {
        appData.price = Math.floor(Math.random() * 100);
        refresh();
    });

    // 正常比较通用的方法是：把刷新的值挂在一个属性上
    document.querySelector(root).addEventListener('click', () => {
        // $('div').html();
        // 通常的业务逻辑
        $.ajax()
            .then(()=>{
                appData.price = Math.floor(Math.random() * 100);
            });
    });
    refresh();
})();
