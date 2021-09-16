// 可以导出
// exports.key = 'hello world';
// exports.key2 = 'hello key2';
// module.exports = 'hello world';

// 不可以导出
// exports = 'hello world';

const obj = {
    key: {}
};

// 可以变更 obj
// 通过 obj 的引用，去变更
// obj.key = 'hello keykey';

// 可以变更 obj【原因：保持了相同的引用】
// 将obj的引用赋值给变量`key`，去变更key的值
const key = obj.key;
key.key1 = 'hello key11111';

// 💡 不可以变更 obj
// 原因：obj 的引用已经断掉了
// key = 'hello world';

console.log('obj::', obj);
