var http=require("http")
var url = require('url')
var server=http.createServer()
server.on("request",function (request,response) {
    console.log(request.url)
    var arg = url.parse(request.url,true).query;
    console.log(arg.name);//返回001
    console.log(arg.age);//返回002
    response.end()
})

server.listen(80,function () {
    console.log("开启了端口")
    return 1;
})