function less(a, b) {
    return a - b < 0;
}

function swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j]
    a[j] = temp;
}

// 插入排序
function insertionSort(a) {
    const len = a.length;
    for(let i=0; i<len; i++) {
        for(let j=i; j>0; j--) {
            if (less(a[j], a[j-1])) {
                swap(a, j, j-1);
            } else {
                break;
            }
        }
    }
}

// 归并排序
function mergeSort(a) {
    const aux = a.slice();
    _sort(a, aux, 0, a.length-1);
}



// ============== demo ===================
const arr = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
];

console.log('before::::', arr);

insertionSort(arr);

console.log('after::::', arr);
