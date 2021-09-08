/**
 * immer.js 和 immutable.js ，这2个库解决的问题本质上是相同的
 *
 * 当只改变 b.key1 的值时，确保 a.key2 === b.key2 为true
 * 简而言之：没有改变的引用是相等的
 */

const { produce } = require('immer');

const state = {
    key1: { key1key1: 'valuekey1' },
    key2: { key2key2: 'valuekey2' },
};

// b.key1 = 'valueb';
// 值变的时候，引用才断开
const newState = produce(state, (draft) => {
    draft.key1 = 'newKey1';
});

// 查看结果
console.log('state :>> ', state);
console.log('newState :>> ', newState);
 console.log('a.key2 === b.key2 :>> ', state.key2 === newState.key2); // true

/**
 * 总结一下：
 * immer.js 和 immutable.js ，这2个库解决的问题本质上是相同的
 * 当改变一部分的引用时，未更新的部分其`引用`仍然保持不变，即 aa.key2 === bb.key2 为true
 *
 * immer.js 的优势：api 比较简单【推荐使用 immer.js】
 */
