// 单例模式的典型应用：redux store
// `模块级别`的单例

// store.js
import reducer form './reducer';
import { configureStore } from 'redux';

const store = configureStore({ reducer });

export {
    store,
};

// app-a.js
import { store } from './store';

// app-b.js
import { store } from './store';

// a文件 和 b文件 引入的 store 应该是同一个
