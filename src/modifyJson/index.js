const fs = require("fs");
const path = require("path");
const listJsonData = path.join(__dirname, '../../public/mock/books.json')

/* 添加 */
const writeJson = (res, data) => {
    let dataStr = JSON.stringify(data); //转换字符串 => 去写入

    //再写入
    fs.writeFile(listJsonData, dataStr, (err, data) => {
        if (err) return console.error(err);
        console.log('-------------新增成功----------------');
        res.redirect("/");
    })
}

/* 修改 */
const modifyJson = (res, books) => {
    let dataStr = JSON.stringify(books); //转换字符串 => 去写入

    //再写入
    fs.writeFile(listJsonData, dataStr, (err, data) => {
        if (err) return console.error(err);
        console.log('-------------修改成功----------------');
        res.redirect("/");
    })

}

module.exports = {
    writeJson,
    modifyJson
}