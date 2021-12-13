function less(a, b) {
    return a - b < 0;
}

function swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j]
    a[j] = temp;
}

// 选择排序
function selectionSort(a) {
    const len = a.length;
    for(let i=0; i<len; i++) {
        let min = i;
        for(let j=i+1; j<len; j++) {
            if (less(a[j], a[min])) {
                min = j;
            }
            swap(a, i, min);
        }
    }
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

selectionSort(arr);

console.log('after::::', arr);

// module.exports = selectionSort;
