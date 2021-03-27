/**
 * @author kyod
 * @description 接着index.js，继续增加功能，添加更多角色，比如 怪物/精灵/...
 */
(function () {
    // 准备资源
    function prepare() {
        // 图片加载器
        const imgTask = (img, src) => {
            return new Promise(function (resolve, reject) {
                img.onload = resolve;
                img.onerror = reject;
                img.src = src;
            });
        }

        const context = document.getElementById('content').getContext('2d');
        const heroImg = new Image();
        const allSpriteImg = new Image();

        // 加载图片
        const allResourceTask = Promise.all([
            imgTask(heroImg, './hero.png'),
            imgTask(allSpriteImg, './all.png')
        ]);

        return {
            /**
             * @param {Function} [callback] - 但准备好了资源以后，要调用的回调函数
             */
            getResource(callback) {
                allResourceTask.then(function () {
                    callback && callback(context, heroImg, allSpriteImg);
                });
            }
        };
    }

    // 画图
    function drawHero(context, heroImg, allSpriteImg) {
        var draw = function () {
            this.context
                .drawImage(
                    this.heroImg,
                    this.imgPos.x,
                    this.imgPos.y,
                    this.imgPos.width,
                    this.imgPos.height,
                    this.rect.x,
                    this.rect.y,
                    this.rect.width,
                    this.rect.height
                );
        }

        var hero = {
            heroImg: heroImg,
            context: context,
            imgPos: {
                x: 0,
                y: 0,
                width: 42,
                height: 41
            },
            rect: {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            },
            draw: draw
        };

        var monster = {
            heroImg: allSpriteImg,
            context: context,
            imgPos: {
                x: 854,
                y: 729,
                width: 52,
                height: 50
            }, // 图片截取的位置信息
            rect: {
                x: 100,
                y: 100,
                width: 40,
                height: 40
            }, // 出现在网页的位置信息
            draw: draw
        };

        const onkeyup = function () {
            console.log('okokokokokok');
        }

        hero.draw();
        monster.draw();
    };

    const resourceManager = prepare();
    resourceManager.getResource(function (context, heroImg, allSpriteImg) {
        drawHero(context, heroImg, allSpriteImg);
    });
})();

// TODO：让英雄上下左右动起来。监听一下 onkeyup 事件，给英雄一个移动方法，挪完了之后，再重新draw一下
// TODO：算法学习推荐：算法竞赛入门 ｜ ACM ｜ 经典算法