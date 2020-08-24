// var a = {};
//
// (function (name) {
//     var instance ={}
//     a = function () {
//         if (instance) return
//         else{
//             instance = this
//             console.log(this)
//             this.name = name
//         }
//     }
// })();
//
//
// console.log(a)

// 利用匿名函数+闭包 内部维护一个instance类
var A;
(function(){
    var instance;
    A = function(name){
        if(instance){
            console.log('FALSE')
            return instance
        }
        else{
             // intance = obj 构造
            console.log('TRUE')
            instance = name
            return {KEY:1}
        }

    }
}());


// 利用闭包
var single = (function () {
    var gener = function (name) {
        this.name = name 
    }
    var obj = {}
    return function () {
        if (obj) return obj;
        else {
            obj = gener()
            return obj
        }
    }
})();
