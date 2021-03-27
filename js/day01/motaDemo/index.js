/**
 * kyod
 */
// 先来一个闭包，var的变量不会跑到window上去
// (function () {
//     // 小茗同学：准备资源
//     const context = document.getElementById('content').getContext('2d');
//     const heroImg = new Image();

//     // 小花同学：画图
//     heroImg.onload = function () {
//         // 定义英雄的位置
//         var imgPos = {
//             x: 0,
//             y: 0,
//             width: 30,
//             height: 30
//         };

//         // 定义英雄
//         var rect = {
//             x: 0,
//             y: 0,
//             width: 40,
//             height: 40
//         };

//         context
//             .drawImage(
//                 heroImg,
//                 imgPos.x,
//                 imgPos.y,
//                 imgPos.width,
//                 imgPos.height,
//                 rect.x,
//                 rect.y,
//                 rect.width,
//                 rect.height
//             );
//     };

//     heroImg.src = './hero.png';
// })();

// 上面的实现方式，在多人合作的时候，多人编辑同一个文档，会显得不是那么合理
// 下面重构一下
(function () {
    // 我是小茗同学：准备资源
    function prepare() {
        const context = document.getElementById('content').getContext('2d');
        const heroImg = new Image();
        let loaded = false;
        return {
            /**
             * @param {Function} [callback] - 但准备好了资源以后，要调用的回调函数
             */
            getResource(callback) {
                // 若图片已经加载过了，直接执行回调函数就好，不用多次加载（这个时候，闭包的优势就很明显了）
                if (loaded) {
                    callback && callback(context, heroImg);
                    return;
                }
                heroImg.onload = function() {
                    callback && callback(context, heroImg);
                    loaded = true; // 加载过资源之后，将loaded置为true
                };
                heroImg.src = './hero.png';
            }
        };
    }

    // 我是小花同学：画图
    function drawHero(context, heroImg, {initX, initY}) {
        // 定义英雄的位置
        var imgPos = {
            x: 0,
            y: 0,
            width: 42,
            height: 41
        };

        // 定义英雄
        var rect = {
            x: initX,
            y: initY,
            width: 40,
            height: 40
        };

        context
            .drawImage(
                heroImg,
                imgPos.x,
                imgPos.y,
                imgPos.width,
                imgPos.height,
                rect.x,
                rect.y,
                rect.width,
                rect.height
            );
    };

    console.log('okokok');
    // 连接两位同学的工作结果
    const resourceManager = prepare();
    resourceManager.getResource(function (context, heroImg) {
        drawHero(context, heroImg, {initX: 0, initY: 0});
    });

    document.getElementById('create').addEventListener('click', function() {
        resourceManager.getResource(function (context, heroImg) {
            drawHero(context, heroImg, {initX: Math.random()*200, initY: Math.random()*200});
        });
    });
})();