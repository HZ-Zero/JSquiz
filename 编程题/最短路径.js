function generArr(N) {
    let arr = new Array(N)
    for (let i =0 ;i<N;i++) {
        arr[i]=new Array(N).fill(0)
    }
    return arr
}
let arr = generArr(5)
let nodeArr = []
console.log(arr)
