const fs = require("fs");
const path = require("path");

/* 添加 */
const writeJson = (res, params) => {
    fs.readFile("./mock/books.json", (err, data) =>{
        if( err ) return console.error(err);
        let listData = data.toString();         //二进制转换字符串
        listData = JSON.parse(listData);        //转换对象
        
        //为 添加的数据， id号自增+1
        let lastId = listData.books[listData.books.length-1].id;
        let newParams = Object.assign( {}, {id: lastId+1}, params );

        //添加逻辑
        listData.books.push(newParams);            //添加
        listData.total = listData.books.length; //总条数计算
        console.log(listData);
        let dataStr = JSON.stringify(listData); //转换字符串 => 去写入

        //再写入
        fs.writeFile("./mock/books.json", dataStr,  (err, data) =>{
            if(err) return console.error(err);
            console.log('-------------新增成功----------------');
            res.redirect("/");
        })
    })
}

module.exports = {
    writeJson
}