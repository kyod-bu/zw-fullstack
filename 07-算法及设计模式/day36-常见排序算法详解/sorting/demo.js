const selectionSort = require("./selectionSort");

function compare(a, b) {
    return a - b;
}

function less(a, b) {
    return a - b < 0;
}

function swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j]
    a[j] = temp;
}

// ============== demo ===================
console.log('======排序算法======');
const arr = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
];
console.log('before::::', arr);
// 1、选择排序
selectionSort(arr);

// 2、插入排序
// insertionSort(arr);

// 3、归并排序
// mergeSort(arr);

// 4、快速排序
// quickSort(arr);

console.log('after::::', arr);
