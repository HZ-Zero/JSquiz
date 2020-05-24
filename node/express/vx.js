var express=require("express")
var request = require("request");
var user = require("./use")
var app=express()
var mp=require("./mp")
app.all("*",function(req,res,next){
        //设置允许跨域的域名，*代表允许任意域名跨域
        res.header("Access-Control-Allow-Origin","*");
        //允许的header类型
        res.header("Access-Control-Allow-Headers","content-type");
        //跨域允许的请求方式
        res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
        if (req.method.toLowerCase() == 'options')
            res.send(200);  //让options尝试请求快速结束
        else
            next();
    }
)
app.get('/',function (req,res) {
    res.send('hello express')
})
app.get('/api/mp/getSession',function (req,res){
    const code = req.query.code
    let data
    console.log(req.query,'24')
    if(!code){

    }else {
        let sessionUrl=`https://api.weixin.qq.com/sns/jscode2session?appid=${ mp.mp.appId}&secret=${ mp.mp.appSecret}&js_code=${ code }&grant_type=authorization_code`
        request(sessionUrl,(err,response,body)=>{
            data = JSON.parse(body);
            let res_j={code: 200,openid:data.openid,message:''}

        })
        res.json(res_j)
    }
} )

app.get("/api/mp/login", (req, res) => {
    // let accounts=['abc']
    // console.log(user)
    let userInfo = JSON.parse(req.query.userInfo);
    if (!userInfo) {
        // 失败
    } else {
        res.json({
            code:0,
            data:{
                userId:'001',
                openid:''
            },
            meg:'success'
        })
        console.log(userInfo)
    }
})
app.get("/api/mp/loginbyaccount", (req, res) => {
    let userInfo = JSON.parse(req.query.userInfo);
    if (!userInfo) {
        // 失败
    } else {
        res.json({
            code:0,
            data:{
                userId:'001',
                account:'',
                password:''
            },
            meg:'success'
        })
        console.log(userInfo)
    }
})

//GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
app.listen(3000,function () {
    console.log("开启了")
})