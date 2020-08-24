// Promise.prototype._all = function (proList) {
//     return new Promise((resolve,reject)=>{
//         let resArr = []
//         for (let pro of proList){
//             pro.then(res=>{
//                 resArr.push(res)
//                 if (resArr.length == proList.length){
//                     resolve(resArr)
//                 }
//             },err=>{
//                 reject(err)
//             })
//         }
//     })
// }

// Promise.all = arr => {
//     let aResult = []; //用于存放每次执行后返回结果
//     return new _Promise(function (resolve, reject) {
//         let i = 0;
//         next(); // 开始逐次执行数组中的函数(重要)
//         function next() {
//             arr[i].then(function (res) {
//                 aResult.push(res); // 存储每次得到的结果
//                 i++;
//                 if (i == arr.length) { // 如果函数数组中的函数都执行完，便resolve
//                     resolve(aResult);
//                 } else {
//                     next();
//                 }
//             })
//         }
//     })
// };


// promisify
Promise.prototype.promisify = function () {
    const fn = arguments[arguments.length-1]
    let args = Array.prototype.slice.call(arguments,0,arguments.length-1)
    return new Promise((resolve,reject)=>{
        fn(...arg,(data,err)=>{
            if (err) reject(err)
            else resolve(data)
        })
    })
}

function  fn () {
    let val =
    console.log(val)
}
fn(1,2,3)

var promisify = function (method, ctx) {
    return function () {
        // 获取method调用的需要参数
        var args = Array.prototype.slice.call(arguments, 0);

        // use runtime this if ctx not provided
        ctx = ctx || this;

        //返回一个新的Promise对象
        return new Promise(function (resolve, reject) {
            // 除了函数传入的参数以外还需要一个callback函数来供异步方法调用
            var callback = function () {
                return function (err, result) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                };
            }
            args.push(callback());
            // 调用method
            method.apply(ctx, args);
        });
    };
};
// callback的理解，相当于写了函数的最后一个回调函数的参数，最后将结果利用promise抛出 传递下去。
// 即(data,err)=>{
//     if (err) {
//         return reject(err);
//     }
//     return resolve(result);
// }


// 调用
var readFileAsync = promisify(fs.readFile)
readFileAsync('./test.txt', 'utf8').then(function(data){
    console.log(data)
})
//  promisify(fs.readFile) 返回的是function

//  promisify(fs.readFile)('./test.txt', 'utf8') 返回的promise

// 文件：app.js
app.compose = function() {
    // 递归函数
    function dispatch(index) {
        // 如果所有中间件都执行完跳出，并返回一个 Promise
        if (index === app.middlewares.length) return Promise.resolve();

        // 取出第 index 个中间件并执行
        const route = app.middlewares[index];

        // 执行后返回成功态的 Promise
        return Promise.resolve(route(() => dispatch(index + 1)));
    }

    // 取出第一个中间件函数执行
    dispatch(0);
};















