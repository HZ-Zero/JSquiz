function currying(n) {
    let sum = n
    var fn = function (v){
        sum = sum + v
        return fn
    }
    fn.toString = function () {
        return sum
    }
    console.log(sum)
    return fn
}

let res = currying(1)(2)


