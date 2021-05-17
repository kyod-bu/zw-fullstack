import {request, throttle} from './utils/index';
import * as components from './items';
import regenRumtime from 'regenerator-runtime/runtime';
// react
class Manager {
    constructor($container) {
        this.$container = $container;
    }

    async init() {
        // 没有依赖关系，停!
        const dirsTask = this.getDirs();
        const listTask = this.getList();
        const dirs = await dirsTask;
        const list = await listTask;
        this.renderList(list);
        this.listenScroll();
    }

    async getDirs() {
        const {data: dirs} = await request({url: '/tabs'});
        return dirs;
    }

    async getList() {
        const {data: list} = await request({url: '/list'});
        return list;
    }

    renderList(list) {
        list.forEach(item => {
            const itemType = item.type.replace(/^\w/, w => w.toUpperCase());
            const Component = components[itemType];
            (new Component(item)).mount(this.$container);
        });
    }

    listenScroll() {
        const THRET_HOLD = 100;
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const screenHeight = window.screen.height;
            const documentHeight = document.documentElement.offsetHeight;
            if (documentHeight - (screenHeight + scrollY) < THRET_HOLD) {
                this.appendList();
            }
        });
    }

    // 降速
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