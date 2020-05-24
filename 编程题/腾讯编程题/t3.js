// 本题为考试多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline());

for(var i = 0;i < n; i++){
    let time = parseInt(readline());
    for(var j = 0;j < time; j++){
        let ope=readline().split(" ")
        if(ope[0]=='PUSH'){
            arr.push(ope[1])
        }else if(ope[0]=='TOP'){
            if (arr.length>0){
                print(arr[0])
            }
            else
                print(-1)
        }else if(ope[0]=='SIZE'){
            print(arr.length)
        }else if(ope[0]=='POP'){
            if (arr.length>0){
                arr.shift()
            }
            else
                print(-1)
        }else if(ope[0]=='CLEAR'){
            arr=[]
        }
    }
}
// function push1(arr,val) {
//     arr.push(val)
// }
// function top(arr) {
//
// }
// function size(arr) {
//     print(arr.length)
// }
// function pop(arr) {
//
// }
// function clear(arr) {
//
// }