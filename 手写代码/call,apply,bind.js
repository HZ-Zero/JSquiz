Function.prototype.mycall=function (context,...args)
{
    let ss=Symbol()
    context[ss]=this
    let res=context[ss](...args)
    delete context[ss]
    return res
}
let a ={
    val:[1,23,4]
}
function test(...val) {
    console.log(...val)
}
// test.mycall(a,...a.val)
// console.log(a)


Function.prototype.myapply=function(context,arr){
    let ss = Symbol()
    context[ss]=this
    let res=context[ss](arr)
    delete context[ss]
    return res
}

// test.myapply(a,a.val)
// console.log(a)

Function.prototype.mybind=function (context,...args1) {
    let _this=this
    return function (...args2) {
        let res=_this.call(context,...args1,...args2)
        return res
    }
}

test.bind(a,...a.val)(...a.val)