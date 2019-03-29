const express = require("express");
const ejs = require('ejs');
const app = express();
const { books } = require("./public/json/books.json");
const port = (process.env.PORT || 3000);

//静态加载文件
app.use('/public', express.static('public'));

//设置views的html文件
app.set('views',__dirname + '/src/views');


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


app.listen(port);