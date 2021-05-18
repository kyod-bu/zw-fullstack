const module = require('./module');
console.log('this is index.js', module.var1);

// 推荐：在自己的项目里，手动实现异步加载
import('./module')
    .then(result => {
        console.log('result::', result, 'result.var1::', result.var1);
    });
