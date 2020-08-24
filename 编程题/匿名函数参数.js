
let a = 2;
(function (a) {
        console.log(a) // 4
    }
)(4);


(function (/* 这里定义参数 */) {
        console.log(a) // 2 作用域链，访问了global下的变量
    }
)(111/* 这里给参数传值 */)
