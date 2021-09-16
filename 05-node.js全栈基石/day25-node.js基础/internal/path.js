const path = require('path');

// resolve 返回绝对路径 👍
const resolvePath = path.resolve('..', 'a', '..', 'b', 'c/');
// join 拼接一个路径
const joinPath = path.join('..', 'a', '..', 'b', 'c/');

console.log('resolvePath:::', resolvePath);
console.log('joinPath:::', joinPath);

// 路径处理 常用变量
console.log('__dirname::', __dirname);
console.log('__filename::', __filename);

path.extname(__filename);
path.basename(__filename);
path.dirname(__filename);
