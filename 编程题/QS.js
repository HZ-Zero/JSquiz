function swap(arr, i, j) {

    const flag = arr[i]
    arr[i] = arr[j]
    arr[j] = flag
}
// 数组元素交换
function divide(arr, left, right) {
    const flag = arr[right-1]
    let index = left
    for (let i = left; i < right-1;i++){
        if (arr[i] < flag ){
            swap(arr, index, i)
            index++;
        }
    }
    swap(arr ,index ,right-1)
    return index
}
// 数组元素划分
function qsort(arr, left, right) {
    if(left<right){// *
        let index = divide(arr, left, right)
        qsort(arr, index+1, right)
        qsort(arr, left, index-1)

    }

}
let a=[3,54,4,46,234,12,52,2134,53421,2,34,6,21];
let b=qsort(a,0,a.length)
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
