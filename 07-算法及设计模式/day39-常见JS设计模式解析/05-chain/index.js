/**
 * 职责链模式
 */
// function upload() {
//     if (currentEnvCanUseHTML5Form) {
//         // 当前环境支持 html5 form
//         return runHTML5FormUpload();
//     }

//     if (currentEnvCanUseFlash) {
//         // 当前环境支持 flash
//         return runFlashUpload();
//     }

//     // 否则，使用传统的上传方式
// }

// ====== 上面的 upload 函数，做一个拆分：

// 在 node 里面模拟一下：
const currentEnvCanUseHTML5Form = () => true;
const currentEnvCanUseFlash = () => false;
const runHTML5FormUpload = (args) => console.log('html5::', args);
const runFlashUpload = (args) => console.log('flash::', args);

function useHTML5Form(obj) {
    console.log('run html5 form');
    if (currentEnvCanUseHTML5Form()) {
        return runHTML5FormUpload(obj);
    }
    return 'next';
}

function useFlash(obj) {
    console.log('run flash');
    if (currentEnvCanUseFlash()) {
        return runFlashUpload(obj);
    }
    return 'next';
}

// 然后用一个函数 `链式地` 把它们连接起来
function createChain() {
    Function.prototype.chain = function (nextFunc) {
        // 在每个高阶函数里面执行当前函数的结果
        var self = this;
        return function () {
            var result = self.apply(this, arguments);
            if (result === 'next') {
                return nextFunc.apply(this, arguments);
            }
            return result;
        }
    }
}

createChain();

var upload = useFlash.chain(useHTML5Form); // 先判断 flash

upload({info: 'info'});
