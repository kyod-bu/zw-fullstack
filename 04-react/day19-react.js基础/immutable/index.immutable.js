/**
 * 解决深拷贝存在的问题：
 * 通过深拷贝，两个对象之间的引用是断开的
 *
 * 当只改变 b.key1 的值时，immutable.js 能确保 a.key2 === b.key2 为true
 */

const immutable = require('immutable');

// 声明一个嵌套对象
const data = {
    key1: { key1key1: 'valuekey1' },
    key2: { key2key2: 'valuekey2' },
};

// 使用 JS 对象构建 Immutable Maps
const a = immutable.fromJS(data);

// b.key1 = 'valueb';
const b = a.set('key1', 'valueb');

// 查看结果
console.log('a.key1 :>> ', a.get('key1'));
console.log('b.key1 :>> ', b.get('key1'));
console.log('a.key2 === b.key2 :>> ', a.key2 === b.key2); // false

/**
 * 总结一下：
 * 使用 immutable.js ，修改了 key1 对应的值，key2 的引用仍然保持一致
 *
 * immutable.js 的优势：【节省内存开销】
 * 当改变一部分的引用时，未更新的部分其`引用`仍然保持不变，即 aa.key2 === bb.key2 为true
 */
