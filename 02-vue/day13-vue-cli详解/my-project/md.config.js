module.exports = {
    src: 'docs/**/*.md', // 注意：这里并不是正则表达式，而是`glob`表达式
    output: {
        dir: 'src/docs/',
        filename: '[name].vue' // 支持重命名
    },
    format: 'vue' // 转换成`vue组件`
};
