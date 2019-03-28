const express = require("express");
const app = express();
const port = (process.env.PORT || 3000);

//静态加载文件
app.use('/public', express.static('public'));

//设置views的html文件
app.set('views',__dirname + '/src/views');


//模板引擎
app.set("view engine", "ejs");

//路由
app.get("/", (req, res) =>{
    res.render('index');
})

app.listen(port);