import React, { Component } from 'react';
// import { cloneDeep } from 'lodash';
// import { fromJS } from 'immutable';
import { produce } from 'immer'
import './App.css';

// 简单版本的 immer 实现
// class Store {
//     constructor(state) {
//         this.modified = false; // 是否改动
//         this.source = state; // 记录原来的值
//         this.copy = null; // 记录改动之后的值
//     }

//     get(key) {
//         // 如果【未改动】，返回原来的值
//         if (!this.modified) return this.source[key];
//         // 否则，返回改动之后的值
//         return this.copy[key];
//     }

//     set(key, value) {
//         // 如果【未改动】，前去变更
//         if (!this.modified) this.modifing();
//         // 否则，设置变更后的值为value
//         return this.copy[key] = value;
//     }

//     modifing() {
//         if (this.modified) return;
//         // 如果【未改动】，进行变更操作
//         this.modified = true;
//         this.copy = Array.isArray(this.source)
//             ? this.source.slice()
//             : { ...this.source };
//     }
// }

// const PROXY_FLAG = '@@SYMBOL_PROXY_FLAG'; // 全局的 symbol 常量
// const handler = {
//     get(target, key) {
//         if (key === PROXY_FLAG) return target;
//         return target.get(key);
//     },
//     set(target, key, value) {
//         return target.set(key, value);
//     },
// };

// /**
//  * @description 将输⼊的对象转为 proxy 对象，在 proxy 对象内部进⾏对象读写劫持的同时，获取最终的结果
//  * @param {*} state 需要操作的对象
//  * @param {*} producer
//  * @returns
//  */
// function produce(state, producer) {
//     const store = new Store(state); // 新建了一个 store 实例
//     const proxy = new Proxy(store, handler);

//     // proxy.xxx 进入 handler 的 get 方法，劫持了【读操作】
//     // proxy.xxx = 123; 进入 handler 的 set 方法，劫持了【写操作】
//     producer(proxy);
//     const newState = proxy[PROXY_FLAG];
//     if (newState.modified) return newState.copy;
//     return newState.source;
// }

class RenderText extends Component {
    shouldComponentUpdate(prevProps) {
        console.log('【未变更部分】的引用有变化？？ :>> ', this.props.store.key2 === prevProps.store.key2);
        return true;
    }

    render() {
        return (
            <div>
                <div>{this.props.store.key1}</div>
                <div>{this.props.store.key2.value}</div>
            </div>
        );
    }
}

const object = {
    key1: 'object.key1.value',
    key2: { value: 'object.key2.value', value2: 'object.key2.value2' }
};
window.object = object

class App extends Component {
    sendRandomText = () => {
        console.log('全局的 object.key1 ::', object.key1);
        this.forceUpdate(); // 触发一次当前组件的render
    }

    render() {
        // const obj = object;
        // const obj = cloneDeep(object);
        // obj.key1 = Math.random(0, 1);
        // 使用 immutable 库 immer.produce
        const obj = produce(object, (draft) => {
            draft.key1 = Math.random(0, 1);
        });

        return (
            <div className="App">
                <button onClick={this.sendRandomText}>重新渲染App</button>
                <RenderText store={obj} />
            </div>
        );
    }
}

export default App;

/**
 * 笔记：
 * 把 object 挂到 window 上（全局对象），对象指向相同的引用
 * 当一处引用发生变化后，所有的都会变化👎
 *
 * 💡 解决方案：断开引用
 * 方法一：深拷贝
 * 存在问题：当 key2 对应的值是引用类型，每次都会新建。从而导致新的引用触发重新渲染
 * 内存开销会增大，性能不好👎
 *
 * 方法二：使用 immutable 库 immer.produce
 * 当改变一部分的引用时，未更新的部分其`引用`仍然保持不变，即 this.props.store.key2 === prevProps.store.key2 为true
 * 优势：断开引用的同时，节省内存开销，性能优化👍
 * 1、全局的 object.key1 的值没有变
 * 2、变更部分(key1)，断开引用
 * 3、未变更部分(key2)，引用保持连接，即 引用相等
 */
