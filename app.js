//本文件是nodejs运行的文件，服务器文件
var express = require("express");

//创建app
var app = express();

//静态化www文件夹，让www文件夹中的每一个文件都拥有路由
app.use(express.static("www"));

//写路由：
app.get("/number",function(req,res){
    res.json({"result":2});
});

//模拟数据库
let A = 1;
let B = 1;
let C = 1;
let D = 1;
let E = 1;

app.get("/jieguo",function(req,res){
    res.json({A,B,C,D,E});
})

app.get("/change/A",function(req,res){
    A++;
    res.json({A,B,C,D,E});
})
app.get("/change/B",function(req,res){
    B++;
    res.json({A,B,C,D,E});
})
app.get("/change/C",function(req,res){
    C++;
    res.json({A,B,C,D,E});
})
app.get("/change/D",function(req,res){
    D++;
    res.json({A,B,C,D,E});
})
app.get("/change/E",function(req,res){
    E++;
    res.json({A,B,C,D,E});
})

//监听
app.listen(3000);