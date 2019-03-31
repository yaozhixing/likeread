const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');              //post数据转换
const { books } = require("../../mock/books");          //mock数据

const jsonParser = bodyParser.json();                                   //创建application/json解析
const urlencodedParser  = bodyParser.urlencoded({ extended: false })    //创建application/x-www-form-urlencoded

const {  writeJson } = require("../modifyJson/index");         //json增删改查 功能

/*--------------------------------路由-------------------------------------*/
router.get("/", (req, res) =>{
    res.render('index',{
        title: '我爱阅读官网',
        books: books
    });
})

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
    let params = req.body;
    writeJson(params);      //添加
    res.render('success',{
        resMessage: "提交成功！"
    })
})


/* res返回封装数据 */
const responJson = (code, message, data) =>{
    let res = {};
    res.code = code;
    res.message = message;
    res.data = data;
    return res;
}



//POST /api/users 获取JSON编码的请求体
// router.post('/api/users', jsonParser, function(req,res){
//     if(!req.body) return res.sendStatus(400);
//     //create user in req.body
// })


module.exports = router;