/**
 * 将一个 字符串 转换为 可执行函数
 */
const vm = require('vm');
const path = require('path');
const fs = require('fs');

// 自定义 require
function customRequire(filename) {
    const pathToFile = path.resolve(__dirname, filename);
    const content = fs.readFileSync(pathToFile, 'utf-8');

    // 给可执行函数 注入参数
    const wrapper = [
        '(function(require, module, exports, __dirname, __filename, zhuawa) {',
        '})'
    ];

    // 字符串包裹
    const wrappedContent = wrapper[0] + content + wrapper[1];

    // 字符串变为可执行函数
    const script = new vm.Script(wrappedContent, {
        filename: 'index.js'
    });

    const module = {
        exports: {}
    };

    // 执行函数
    const result = script.runInThisContext();
    result(customRequire, module, module.exports, null, null, '大家好');
    return module.exports;
}

// 挂到全局对象上去
global.r = customRequire;
