//
// function f(fn,timeout) {
//     let lasttime = 0
//     return  () =>{
//         let nowtime = Date.now()
//         if (nowtime  - lasttime > timeout){
//             console.log(nowtime  - lasttime)
//             fn()
//             lasttime = nowtime
//             return lasttime
//         }
//     }
// }
//
// function f2(fn,delay) {
//     let timeCounter = undefined
//     return ()=>{
//         clearTimeout(timeCounter)
//         setTimeout(()=>{
//             fn()
//         },delay)
//     }
// }
//
// function f1() {
//     console.log('调用了')
// }
//moment
// setInterval(()=>{
//     f(f1,2000)()
//
// },500)
//
//
//

String.prototype.mixLength = (str) => {
    let count = 0
    for (let i = 0, len = str.length; i < len; i++) {
        count += str.charCodeAt(i) < 256 ? 1 : 2
    }
    return count
}

// function FF() {
//     return
// }
// let a = FF()
// console.log(a)

let ss = ''
let a = ss.mixLength(ss)
console.log(a)
