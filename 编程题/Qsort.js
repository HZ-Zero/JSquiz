function swap(arr, i, j) {
    let flag = arr[i];
    arr[i] = arr[j];
    arr[j] = flag;
}
function dividearr(arr, left, right) {
    const x = arr[right - 1];
    let i = left - 1;
    for (let j = left; j < right - 1; j++) {
        if (arr[j] <= x) {// 前面的值比中枢值小
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right - 1);
    return i + 1;
}
function quicksort(arr, left, right) {
    if (left < right - 1) {
        const q = dividearr(arr, left, right);
        quicksort(arr, left, q);
        quicksort(arr, q + 1, right);
    }
    return arr;
}
let a=[3,54,4,46,234,12,52,2134,53421,2,34,6,21];
let b=quicksort(a,0,a.length)
console.log(a)
// readInt，readDouble
//print(a + ' ' + b + ' ' + c);
// 1. Set容器 : 无序不可重复的多个value的集合体
// * Set()
// * Set(array)
// * add(value)
// * delete(value)
// * has(value)
// * clear()
// * size
// 2. Map容器 : 无序的 key不重复的多个key-value的集合体
// * Map()
// * Map(array)
// * set(key, value)//添加
// * get(key)
// * delete(key)
// * has(key)
// * clear()
// * size
//
