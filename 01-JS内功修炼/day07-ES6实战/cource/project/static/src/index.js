/**
 * @description 业务逻辑
 */
import { request, throttle } from './utils/index';
import * as components from './items';
import regenRumtime from 'regenerator-runtime/runtime'; // 这里是补充 polyfill
// react
class Manager {
    constructor($container) {
        this.$container = $container;
    }

    async init() {
        // // 没有依赖关系，停!
        // const dirs = await this.getDirs();
        // // console.log('after dirsTask');
        // const list = await this.getList();
        // console.log('dirs::', dirs, 'list::', list);

        // // 上面的写法等价于：(串行执行)
        // new Promise(() => {
        //     fetch('/tabs').then(resolve);
        // })
        //     .then(() => {
        //         fetch('/list').then(resolve);
        //     });

        // // 上面的2个请求(串行执行)之间没有依赖关系，不用等待一个请求响应之后，再发送另一个请求
        // // 解决方案一：Promise.all (并行执行)
        // // this.getDirs, this.getList 的本质就是 2个 promise
        // Promise.all([this.getDirs(), this.getList()])
        //     .then(([res1, res2]) => {
        //         console.log('dirs::', res1, 'list::', res2);
        //     });

        // // 稍作优化一下：(并行执行，2个请求一起发出，直到2个都返回以后，我们的 await 才决议出来结果)
        // // 这样写实现没有问题，但是我们都已经用 async 包装好了，这样的话，又引入了 Promise.all ，看起来不爽
        // const [res1, res2] = await Promise.all([
        //     this.getDirs(), 
        //     this.getList()
        // ]);
        // console.log('dirs::', res1, 'list::', res2);

        // Promise.all 的写法，实现没有问题，只是看起来比较难受

        // 解决方案二：async/await (并行执行，推荐！！！)
        const dirsTask = this.getDirs(); // 没有 await， 就没有 停
        const listTask = this.getList(); // 顺序无关，最终等待时间 取决于 等待时间长的那个
        const dirs = await dirsTask;
        const list = await listTask;
        // console.log('dirs::', dirs, 'list::', list);


        // 渲染界面
        this.renderList(list);
        // 实现一个功能：下拉加载
        this.listenScroll();
    }

    async getDirs() {
        // request({url: '/tabs'})
        //     .then(res => {
        //         console.log('res::', res);
        //     });
        // 上面的写法挺费劲的，下面我们用 async/await 方法来写
        // 注意：await 方法，必须包含在 async 函数中 (async 函数返回的是一个promise)
        // await 被编译之后，是 generator + promise
        // generator 有个特性：会挡住后面的逻辑执行
        const {data: dirs} = await request({url: '/tabs'});
        // console.log('tabs had gotten!!!');
        return dirs;
    }

    async getList() {
        // console.log('list-send!!!');
        const {data: list} = await request({url: '/list'});
        return list;
    }

    renderList(list) {
        // 注意： const prefer，优先使用 const，只有在值可能被改的情况下，才使用 let
        // 一个黑洞, "type" is read-only
        //  const type = 'MultiplePic'; 
        //  type = type.replace(/^\w/, w => w.toUpperCase());
        
        // const convertedList = [0, 1, 2, 3];
        // convertedList[0] = 2; // 不会报错，但是这种东西修改了引用，不应该这样做
        // // 既然用 const 声明，就不要修改，容易误导别人
        // console.log("====", convertedList);

        // console.log('====', components, 
        //     '拿到MultiplePic模板::', components['MultiplePic'],
        //     '拿到SinglePic模板::', components['SinglePic'],
        //     '拿到Tabs模板::', components['Tabs'],
        // );

        // 用list的值 拼接 界面
        list.forEach(item => {
            // 开头的第一个字母 转换为 大写
            const itemType = item.type.replace(/^\w/, w => w.toUpperCase());
            // 从 components 里面 找出 相对应的组件
            const Component = components[itemType];
            // console.log('itemType::', itemType, Component);
            // 将相对应的组件渲染到页面上
            (new Component(item)).mount(this.$container);
        });
    }

    listenScroll() {
        const THRET_HOLD = 100; // 设置一个阀值，加载 list 数据
        window.addEventListener('scroll', () => {
            // 看看有没有滑动到 底部
            const scrollY = window.scrollY; // 文档在垂直方向已滚动的像素值
            const screenHeight = window.screen.height; // 屏幕的高度
            const documentHeight = document.documentElement.offsetHeight; // 文档的高度
            // 滚动上去的距离 + 屏幕的高度 => 到底了
            if (documentHeight - (screenHeight + scrollY) < THRET_HOLD) {
                // console.log('scroll::', scrollY);
                this.appendList();
            }
        });
    }

    // 降速（2s 之间不允许多次执行）
    @throttle(2000)
    async appendList() {
        console.log('append-actions');
        const listData = await this.getList();
        this.renderList(listData);
    }
}

const $container = document.getElementById('container');
const manager = new Manager($container);
manager.init();
