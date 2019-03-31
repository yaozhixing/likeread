const express = require("express");
const ejs = require('ejs');
const app = express();



const engine = require('ejs-locals');
const index = require('./src/routers/index');

const port = (process.env.PORT || 3000);

//静态加载文件
app.use('/public', express.static('public'));
//设置views的html文件
app.set('views',__dirname + '/src/views');



//模板引擎
app.engine('html', engine);
//app.engine('html', ejs.__express);
app.set('view engine', 'html');



app.use("/", index);










app.listen(port);