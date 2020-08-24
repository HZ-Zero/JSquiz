// var nodes=readline().split(' ')
var nodes='1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21'.split(' ')
function solution(){
    let arr = new Array()
    arr.push([])
    let i = 0
    let count = 0
    while(nodes.length>0){
        arr[i].push(nodes.shift())
        count++
        if(count === Math.pow(2,i) ){
            count=0
            arr.push([])
            i++
        }
    }
    return arr
}
function generStr(arr) {
    let str = ''
    let i = 0
    let j = arr.length-1
    for (let ind = i;ind < j;inde++){
        str = str + arr[ind].shift()
    }
    return str

}
let arr = solution()
// console.log(arr)
let str = generStr(arr)
console.log(str)
