// var str=readline()
var str="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36"
str=str.split("/")
// print(str)
let ans=[]
let reg=/^\d+/
for (let i=0;i<str.length-1; i++){
    // console.log(key)
    if (reg.test(str[i+1])){
        // console.log(str[i].split(" ")[0])
        ll=str[i].split(" ")
        ans.push(ll[ll.length-1])
    }
}
let res=JSON.stringify(ans)
console.log(res)
// json.s
// print(ans)