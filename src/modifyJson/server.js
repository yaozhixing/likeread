const {
    books
} = require("../../public/mock/books"); //mock数据

const {
    writeJson
} = require("../modifyJson/index"); //json增删改查 功能

//首页
const indexRouter = (req, res) => {
    res.render('index', {
        title: '我爱阅读官网',
        books: books
    });
}

// login
const loginRouter = (req, res) => {
    res.render('login', {
        title: '登录页面'
    });
}

//addBook
const addBookRouter = (req, res) => {
    res.render('addBook', {
        title: '添加书籍'
    });
}

// addBookFrom
const addBookFromRouter = (req, res) => {
    if (!req.body) return res.sendStatus(400);
    let data = req.body;
    writeJson(res, data); //添加
}

// modifyBook
const modifyBookRouter = (req, res) => {
    let id = req.query.id
    let data = {}
    books.forEach(item => {
        if (item.id == id) {
            data = item
            return false
        }
    });
    res.render('modifyBook', {
        title: '修改书籍',
        book: data
    });
}

/* res返回封装数据 */
const responJson = (code, message, data) => {
    let res = {};
    res.code = code;
    res.message = message;
    res.data = data;
    return res;
}

module.exports = {
    indexRouter,
    loginRouter,
    addBookRouter,
    addBookFromRouter,
    modifyBookRouter
}