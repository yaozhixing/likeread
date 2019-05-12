const books = require("../../public/mock/books"); //书籍
const users = require("../../public/mock/users"); // 用户

const {
    writeJson,
    modifyJson
} = require("../modifyJson/index"); //json增删改查 功能

//首页
const indexRouter = (req, res) => {
    res.render('index', {
        title: '我爱阅读',
        books: books
    });
}

// login
const loginRouter = (req, res) => {
    res.render('login', {
        title: '登录页面'
    });
}

// get login loginFormRouter
const loginFormRouter = (req, res) => {
    let info = req.body
    users.forEach(item => {
        if (item.name == info.name && item.password == info.password) {
            res.render("success", {
                resMessage: '登录成功'
            })
        } else {
            res.render("success", {
                resMessage: '登录失败'
            })
        }
    })
}

//addBook
const addBookRouter = (req, res) => {
    res.render('addBook', {
        title: '添加书籍'
    });
}

// addBookForm
const addBookFormRouter = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    let info = req.body
    let lastId = Number(books[books.length - 1].id) // 获取最后的id号
    let newInfo = Object.assign({}, { // 为对象添加自增的id号
        id: lastId + 1
    }, info)

    books.push(newInfo) //添加
    writeJson(res, books) //添加
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

// modifyBookFormRouter
const modifyBookFormRouter = (req, res) => {
    if (!req.body) return res.sendStatus(400);
    let info = req.body;
    // 查找id相同的对象 => 覆盖此对象 => 保存
    books.forEach(item => {
        if (item.id == info.id) {
            for (let key in info) {
                item[key] = info[key]
            }
        }
        return
    })
    // console.log(books)
    modifyJson(res, books); //修改
}

const delBookRouter = (req, res) => {
    let id = req.query.id
    // 查找id相同的对象 => 覆盖此对象 => 保存
    books.forEach((item, index) => {
        if (item.id == id) {
            books.splice(index, 1)
        }
        return
    })
    writeJson(res, books) //删除
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
    loginFormRouter,
    addBookRouter,
    addBookFormRouter,
    modifyBookRouter,
    modifyBookFormRouter,
    delBookRouter
}