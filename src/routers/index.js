const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser'); //post数据转换

const {
    indexRouter,
    loginRouter,
    addBookRouter,
    addBookFromRouter,
    modifyBookRouter
} = require("../modifyJson/server")

const jsonParser = bodyParser.json(); //创建application/json解析
const urlencodedParser = bodyParser.urlencoded({
    extended: false
}) //创建application/x-www-form-urlencoded


/*--------------------------------路由-------------------------------------*/
router.get("/", indexRouter)

router.get("/login", loginRouter)

/* 添加书籍 */
router.get("/addBook", addBookRouter)

//POST addBookFrom
router.post('/addBookFrom', urlencodedParser, addBookFromRouter)

/* 修改书籍 */
router.get("/modifyBook", modifyBookRouter)

//POST modifyBookFrom
//router.post('/modifyBookFrom', urlencodedParser, modifyBookFromRouter)


module.exports = router;