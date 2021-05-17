/**
 * 支持一个新语法
 * @param {*} babel 
 * @returns 
 */
// 另外， polyfill 也是一种解决方案
// myplugin 本质上就是一个函数
module.exports = function (babel) {
    // 我们看看，这里都能拿到什么
    return {
        visitor: {
            // CallExpression() {
            //     console.log(arguments);
            // }
            // CallExpression(path) {
            //     console.log(path.node);
            // }
            // 并不是所有的函数调用，都有node
            // CallExpression(path) {
            //     if (path.node.callee.property && path.node.callee.property.name === '最终') {
            //         console.log('path.node.callee.property::', path.node.callee.property);
            //         path.node.callee.property.name = 'finally';
            //     }
            // }

            // 在这里完全可以拿到 【整棵 AST 树】
            CallExpression(path, state) {
                if (path.node.callee.property && path.node.callee.property.name === '最终') {
                    console.log('path.node.callee.property::', path.node.callee.property);
                    path.node.callee.property.name = 'finally';
                    state.file.ast.push('core-js/Promise-polyfill');
                }
            }
        }
    };
};

// js
// AST 树
// plugin
// 我们的插件能干什么呢？
// --能修改plugin插件

// babel 会先将 JS 转换成 AST，然后再逐个遍历 AST，遍历的过程中，会调用我们的 plugin，，，，修改对象上的引用，修改完之后，会用 AST 尝试。。。



// 举个例子
// mpvue ，写的时候是 vue, 运行的时候是 小程序

// 前端实现，当前分为 两派 
// 第一派：你写代码的时候，还是用 view/text 这类的标签【动态】
class View extends Component {
    render() {
        return <div></div>;
    }
}
class Text extends Component {
    render() {
        return <span></span>
    }
}

// 第二派：（其实就是 mpvue 这一派系）【静态，理论上来讲：性能要好一点，但是转换的错误率也会高一点】你写的代码，既能在H5上跑，又能在小程序上跑
// 写代码的时候，还是用 div/span 这类的标签。在自己的编译过程中，转换成小程序的标签
// 写的时候 template
<div>
    <span></span>
</div>
// 转换之后，即 运行的时候 wxml
<view>
    <text></text>
</view>

// 袁鑫 公开课：
// 公开课1--vue3
// 公开课2--面试
// 公开课3--ts与vue (mpvue-source-code/mpvue-master)


// 面试
