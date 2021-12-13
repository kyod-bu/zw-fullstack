function less(a, b) {
    return a - b < 0;
}

// 归并排序
function mergeSort(a) {
    const aux = a.slice();
    _sort(a, aux, 0, a.length-1);
}

function _sort(a, aux, lo, hi) {
    if (hi <= lo) {
        return;
    }
    let mid = lo + (hi - lo) / 2;
    _sort(a, aux, lo, mid);
    _sort(a, aux, mid+1, hi);
    _merge(a, aux, lo, mid, hi);
}

/**
 * 归并代码实现
 *
 * @param {*} a 要排序的数组
 * @param {*} aux 辅助数组
 * @param {*} lo 低位
 * @param {*} mid 中位
 * @param {*} hi 高位
 */
function _merge(a, aux, lo, mid, hi) {
    for(let k=lo; k<=hi; k++) {
        aux[k] = a[k];
    }

    let i = lo;
    let j = mid + 1;
    for(let k=lo; k<=hi; k++) {
        if (i > mid) {
            a[k] = aux[j++];
        } else if (j > hi) {
            a[k] = aux[i++];
        } else if (less(aux[j], aux[i])) {
            a[k] = aux[j++];
        } else {
            a[k] = aux[i++];
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

mergeSort(arr);

console.log('after::::', arr);
