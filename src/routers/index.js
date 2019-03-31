const express = require("express");
const router = express.Router();

const bodyParser = require('body-parser');

const { books } = require("../../mock/json/books");

//创建application/json解析
const jsonParser = bodyParser.json();

//创建application/x-www-form-urlencoded
const urlencodedParser  = bodyParser.urlencoded({ extended: false })

router.get("/", (req, res) =>{
    res.render('index',{
        title: '我爱阅读官网',
        books: books
    });
})
//路由

router.get("/login", (req, res) =>{
    res.render('login', {
        title: '登录页面'
    });
})

router.get("/addBook", (req, res) =>{
    res.render('addBook', {
        title: '添加书籍'
    });
})

//POST /login 中获取URL编码的请求体
router.post('/addBookFrom', urlencodedParser, function(req, res){
    if(!req.body) return res.sendStatus(400);
    //res.json(responJson(0, null ,null));
    res.render('success',{
        resMessage: "提交成功！"
    })
})

//POST /api/users 获取JSON编码的请求体
// router.post('/api/users', jsonParser, function(req,res){
//     if(!req.body) return res.sendStatus(400);
//     //create user in req.body
// })

const responJson = (code, message, data) =>{
    let res = {};
    res.code = code;
    res.message = message;
    res.data = data;
    return res;
}

module.exports = router;