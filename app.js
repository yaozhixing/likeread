const express = require("express");
const ejs = require('ejs');
const app = express();
const { books } = require("./public/json/books.json");
const bodyParser = require('body-parser');

const port = (process.env.PORT || 3000);

//静态加载文件
app.use('/public', express.static('public'));
//设置views的html文件
app.set('views',__dirname + '/src/views');

//创建application/json解析
const jsonParser = bodyParser.json();

//创建application/x-www-form-urlencoded
const urlencodedParser  = bodyParser.urlencoded({ extended: false })


//模板引擎
app.engine('html', ejs.__express);
app.set('view engine', 'html');

//路由
app.get("/", (req, res) =>{
    res.render('index',{
        title: '我爱阅读官网',
        books: books
    });
})

app.get("/login", (req, res) =>{
    res.render('login', {
        title: '登录页面'
    });
})

app.get("/addBook", (req, res) =>{
    res.render('addBook', {
        title: '添加书籍'
    });
})

//POST /login 中获取URL编码的请求体
app.post('/addBookFrom', urlencodedParser, function(req, res){
    if(!req.body) return res.sendStatus(400);
    //res.json(responJson(0, null ,null));
    res.render('success')
    //res.send('ok, ' + req.body.name + req.body.author + req.body.type + req.body.descript );
})

//POST /api/users 获取JSON编码的请求体
app.post('/api/users', jsonParser, function(req,res){
    if(!req.body) return res.sendStatus(400);
    //create user in req.body
})

app.get("/success", (req, res) =>{
    res.render('success');
})



const responJson = (code, message, data) =>{
    let res = {};
    res.code = code;
    res.message = message;
    res.data = data;
    return res;
}



app.listen(port);