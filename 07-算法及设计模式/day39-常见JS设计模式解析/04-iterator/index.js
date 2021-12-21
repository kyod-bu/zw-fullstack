/**
 * 迭代器模式
 * @desc: GitHub上 /tj/co 项目使用的便是这种模式
 */
// var array = [1, 2, 3];
// array.forEach(function (item, index, self) {
//     console.log(item, index, self);
// });

// forEach 的具体实现
function forEach(array, callback) {
    for(var i=0; i<array.length; i++) {
        callback.call(array[i], array[i], i, array);
    }
}

var Iterator = function (obj) {
    var current = 0;
    var next = function () {
        current += 1;
    }
    var isFinish = function () {
        return !!(current >= obj.length);
    }
    var getCurrentItem = function () {
        return obj[current];
    }

    return {
        next,
        isFinish,
        getCurrentItem,
    };
}

var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 2, 3, 4, 5];
var array3 = [2, 3, 4, 5, 6];

// 写一个通用的 对比函数
function compare(iterator1, iterator2) {
    while (!iterator1.isFinish() && !iterator2.isFinish()) {
        if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
            return false;
        }
        iterator1.next();
        iterator2.next();
    }
    return true;
}

// var array1Iterator = Iterator(array1);
// var array2Iterator = Iterator(array2);
// var array3Iterator = Iterator(array3);

// // console.log(compare(array1Iterator, array2Iterator));
// console.log(compare(array2Iterator, array3Iterator));


// ====== 这里除了数组，也支持一些类似于数组的对象
var arrayLike1 = {0: 0, 1: 1, 2: 2, length: 3};
var array4 = [0, 1, 2];

var array1Iterator = Iterator(arrayLike1);
var array4Iterator = Iterator(array4);

console.log(compare(array1Iterator, array4Iterator));
