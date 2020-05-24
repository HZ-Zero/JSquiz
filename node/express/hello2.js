var fs = require('fs');
var path = require('path');
var express=require("express")
var bodyparser = require('body-parser');
var app=express()

app.use(bodyparser.urlencoded({extende:true}));
app.use(bodyparser.json())
app.post('/po',function (req,res) {
    console.log(111)
    var result = req.body
    res.send(result)
})
app.listen(80,function () {
    console.log("开启了")
})