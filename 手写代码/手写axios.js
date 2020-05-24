const axios=function (url) {
    const pro = new Promise((res,rej)=>{
        const handler=function () {
            if(this.readyState!=4)
                return
            else if(this.status==200){
                res(this.response)
            }
            else
                rej(this.statusText)
        }
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange=handler
        //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); post时 必须加
        xhr.open("get",url)
        xhr.send()// post的时候send加内容
    })
    return pro
}
axios('http://localhost:8999/').then(res=>{
    console.log(res)
})
