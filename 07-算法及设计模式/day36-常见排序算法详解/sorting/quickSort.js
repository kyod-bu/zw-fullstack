function less(a, b) {
    return a - b < 0;
}

function swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j]
    a[j] = temp;
}

// 快速排序
function quickSort(a) {
    sort(a, 0, a.length - 1);
}

function sort(a, lo, hi) {
    if (hi <= lo) {
        return;
    }
    let j = partition(a, lo, hi);
    sort(a, lo, j - 1);
    sort(a, j + 1, hi);
}

/**
 * 分区过程
 *
 * @param {*} a 要排序的数组
 * @param {*} lo 低位
 * @param {*} hi 高位
 * @returns
 */
function partition(a, lo, hi) {
    let i = lo;
    let j = hi + 1;
    while (true) {
        // 确定 i
        while (less(a[++i], a[lo])) {
            if (i == hi) {
                break;
            }
        }
        // 确定 j
        while (less(a[lo], a[--j])) {
            if (j == lo) {
                break;
            }
        }

        // 处理完毕 跳出
        if (i >= j) {
            break;
        }
        swap(a, i, j); // 交换 a[i] a[j]
    }
    swap(a, lo, j); // 交换a[lo] a[j]
    return j;
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

quickSort(arr);

console.log('after::::', arr);
