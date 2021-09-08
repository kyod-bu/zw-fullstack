// 待解决问题1：为什么不建议在 render 里面使用 bind ????
// 例如：<button onclick=this.handleClick.bind(this)>点我</button>
// autobind 解决...
// 待解决问题2：引用相关的问题------对象在引用过程中，会发生改变！！！

// 声明一个数组
const a = [{val: 1}];
const b = a.map(item => item.val = 2); // 这样操作，会存在一个问题

console.log('a::', a); // [ { val: 2 } ]
console.log('b::', b); // [ 2 ]

// #########################################################

/**
 * 很容易想到的解决方案1：深拷贝
 * 但是，深拷贝会存在一个问题
 * 如下，写一个深拷贝的方法：
 */

// 声明一个嵌套对象
const aa = {
    key1: { key1key1: 'valuekey1' },
    key2: { key2key2: 'valuekey2' },
};
// 通过深拷贝，把aa对象拷贝一份
const bb = cloneDeep(aa);
// 修改b.key1
bb.key1 = 'valueb'
// 查看结果
console.log('aa :>> ', aa);
console.log('bb :>> ', bb);
console.log('aa.key2 === bb.key2 :>> ', aa.key2 === bb.key2); // false

function cloneDeep(obj) {
    const keys = Object.keys(obj);
    return keys.reduce((memo, current) => {
        // 如果是一个引用类型，我们再递归的遍历一遍
        const value = obj[current];
        if (typeof obj[current] === 'object') {
            return {
                ...memo,
                [current]: cloneDeep(value)
            };
        }
        return {
            ...memo,
            [current]: value
        };
    }, {});
}

/**
 * 总结一下：
 * 通过深拷贝，两个对象（aa和bb）之间的引用是断开的
 * 修改 bb 的引用值，并不会影响原来的对象 aa
 *
 * 存在一个问题：
 * 引用被断开后，不能保证引用的是同一个，即 aa.key2 === bb.key2 为false
 * 深拷贝会引发一个性能问题：。。。
 */
