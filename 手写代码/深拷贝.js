var a={
    time:new Date(),
    reg:/^w+/,
    obj:{
        sub:1
    },
    value:2
}
// console.log(a.time)
function obj_type(obj) {

    let res=Object.prototype.toString.call(obj).slice(8,-1)
    // console.log()
    if (res == 'Object' || res == 'Date' || res == 'RegExp' || res == 'Array'  )
        return  res

    return true
}
console.log(obj_type(a.reg).slice(8,-1))

function deep_copy(res) {
    if (obj_type(res)===true)
        return res
    else
    {
        switch (obj_type(res)) {
            case 'Object':{
              let obj = {}
              for(let i in res){
                  obj[i]=deep_copy(res[i])
              }
              return obj
            };break;

            case 'Array':{
                let arr = []
                for(let i in res){
                    arr[i]=deep_copy(res[i])
                }
                return arr
            };break;

            case 'Date':{
                let date = new Date(res.getDate())
                return date
            };break;

            case 'RegExp':{
                let reg = new res.constructor(res)
                return reg
            };break;
        }
    }
}
let b=deep_copy(a)
console.log(b===a)
console.log(b)
// for (let key in a){
//     console.log(obj_type(a[key]))
// }