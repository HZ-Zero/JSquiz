// async function async1() {
//     console.log("async1 start"); // 2 同步/主线程
//     await async2();
//     console.log("async1 end"); // 6 异步/微任务
// }
// async function async2() {
//     console.log("async2"); // 3 同步/主线程
// }
// console.log("script start"); // 1 同步/主线程
// setTimeout(function() {
//     console.log("setTimeout"); // 8 异步/宏任务
// }, 0);
// async1();
// new Promise(function(resolve) {
//     console.log("promise1"); // 4 同步/主线程
//     resolve();
// }).then(function() {
//     console.log("promise2"); // 7 异步/微任务
// });
// console.log("script end"); // 5 同步/主线程
/*
用 promise 实现以下功能。
具体： fn1和fn2都是异步函数，f1、fn2同时执行，并且fn1、fn2的结果是 fn3的参数。当fn1或者fn2发生错误时，fn3照常执行，此时的参数为空。
*/

// fn1 = async() => {
//         // 发送请求
//     console.log('2')
//         const data = await sendRquest1();
//         return data;
//     }
// fn2 = async() => {
//
//     console.log('2')
//     // 发送请求
//     const data = await sendRquest2();
//     return data;
// }
// async function fn3() {
//     await fn1()
//     await fn2()
// }
// function sendRquest1() {
//     setTimeout(()=>{
//         console.log('Timeout 1')
//     },1000)
// }
// function sendRquest2() {
//     setTimeout(()=>{
//         console.log('Timeout 2')
//     },2000)
// }
//
// fn3().then(()=>{
//     console.log(3)
// })
// 重写 Promise all race

// function promiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         let resultCount = 0;
//         let results = new Array(promises.length);
//
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(value => {
//                 resultCount++;
//                 results[i] = value;
//                 if (resultCount === promises.length) {
//                     return resolve(results)
//                 }
//             }, error => {
//                 reject(error)
//             })
//         }
//     })
// }
//
// function myAll(arr) {
//     return new Promise((resolve,reject)=>{
//         let count = 0
//         let res = new Array(arr.length)
//         for (let i in arr) {
//             arr[i].then(res => {
//                 count++
//                 res[i] = res
//                 if (count == arr.length) {
//                     return resolve(res)
//                 }
//             },err => {
//                 reject(err)
//             })
//         }
//     })
// }

// 实现一个有并发限制的Promise.all


// let arr = [1,2,3]
// function f1(...arrr){
//     console.log(arguments[0])
// }
// function f2(arr){
//     console.log(arguments)
// }
// // console.log(...arr)
// f1()
// f2()

// let p = new Promise((resolve,reject)=>{
//     console.log(1)
//     resolve(2)
//     console.log(3)
// }).then((res)=>{
//     console.log(res)
// })
// console.log(4)


// const axios = function (url) {
//
//     const promise = new Promise((resolve,reject)=>{
//         const client = new XMLHttpRequest()
//         client.open()
//         const handleState = function () {
//
//             if (this.readyState !==4){
//                 return;
//             }
//             if (this.status===200){
//                 resolve(this.response)
//             } else
//             {
//                 reject()
//             }
//         }
//         client.onreadystatechange = handleState
//         client.send()
//         // xhr 属性 header responseType
//     })
//     return promise
// }
// // 实现数量限制并行的promise
//
// // all
// Promise.prototype.myAll = function (arr) {
//      return new Promise((resolve,reject)=>{
//          let resCount = 0
//          let resArr = new Array(arr.length)
//     })
// }

// let compose2 = (f, g) => (...args) => f(g(...args));
// let compose3 = function (f,g) {
//
//      return function (...args) {
//          return f(g(...args))
//      }
// }
// 文件：app.js
// 模拟 Koa 创建的实例
const app = {
    middlewares: []
};

// 创建 use 方法
app.use = function(fn) {
    app.middlewares.push(fn);
};
app.compose = function() {
    // 递归函数
    function dispatch(index) {
        // 如果所有中间件都执行完跳出
        if (index === app.middlewares.length) return;

        // 取出第 index 个中间件并执行
        const route = app.middlewares[index];
        return route(() => dispatch(index + 1));
    }

    // 取出第一个中间件函数执行
    dispatch(0);
};


app.use(next => {
    console.log(1);
    next();
    console.log(2);
});

app.use(next => {
    console.log(3);
    next();
    console.log(4);
});

app.use(next => {
    console.log(5);
    next();
    console.log(6);
});
console.log(app)

// app.compose();
























