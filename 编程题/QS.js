function swap(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
}
function divide(A, p, r) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j <a.length;j++){

        }
}
    swap(A, i + 1, r - 1);
    return i + 1;
}
function qsort(A, p = 0, r) {
    r = r || A.length;
    if (p < r - 1) {
        const q = divide(A, p, r);
        qsort(A, p, q);
        qsort(A, q + 1, r);
    }
    return A;
}
let a=[3,54,4,46,234,12,52,2134,53421,2,34,6,21];
let b=qsort(a,0,a.length-1)
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