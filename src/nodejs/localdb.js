var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');

// 创建服务器
var server = app.listen(8008, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

// 创建数据库
var connection;

function createCon() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
    });
}

// 获取评论列表的数据
app.get('/comment', function(req, res) {
    var pageCount = (req.query.page - 1) * 10;
    console.log(pageCount);
    createCon();
    connection.connect();
    connection.query('SELECT * FROM comment limit ' + pageCount + ',10', function(error, results, fields) {
        if (error) throw error;
        var data = results;
        //计算数据库的总数量;
        connection.query('select count(*) from comment', function(error, results, fields) {
            if (error) throw error;
            //results =>array类型
            //console.log(results[0]["count(*)"]);
            var obj = {
                data: data,
                num: results[0]["count(*)"]
            };
            res.send(JSON.stringify(obj));
            //关闭数据库 
            connection.end();
        });
    });
    res.append("Access-Control-Allow-Origin", "*");
});

// 获取单个评论的数据
app.get('/mod', function(req, res) {
    var id = req.query.id;
    console.log(id);
    createCon();
    connection.connect();
    connection.query('SELECT * FROM comment where id=' + id, function(error, results, fields) {
        if (error) throw error;
        res.send(results);
        //关闭数据库 
        connection.end();
    });
    res.append("Access-Control-Allow-Origin", "*");
});

// 后台存入修改后的评论数据
app.get('/save', function(req, res) {
    var id = req.query.id;
    var title = req.query.title;
    var subtitle = req.query.subtitle;
    var rating = req.query.rating;
    var content = req.query.content;
    createCon();
    connection.connect();
    connection.query('UPDATE  comment set title="' + title + '",subtitle="' + subtitle + '",rating="' + rating + '",content="' + content + '"where id="' + id + '"', function(error, results, fields) {
        if (error) throw error;
        res.send(results);
        //关闭数据库 
        //connection.end();
    });
    res.append("Access-Control-Allow-Origin", "*");
});

// 前端获取评论数据
app.get('/getcomment', function(req, res) {
    var comCount = req.query.com;
    createCon();
    connection.connect();
    connection.query('SELECT * FROM comment limit ' + comCount + ',' + comCount, function(error, results, fields) {
        if (error) throw error;
        res.send(results);
        //关闭数据库 
        //connection.end();
    });
    res.append("Access-Control-Allow-Origin", "*");
});

// 保存前端更新的评论数据
app.get('/savecomment', function(req, res) {
    var imgurl = req.query.imgurl;
    var author = req.query.author;
    var editetime = req.query.editetime;
    var content = req.query.content;
    createCon();
    connection.connect();
    // 插入新的评论
    connection.query('insert into comment(imgurl,author,editetime,content) values("' + imgurl + '","' + author + '","' + editetime + '","' + content + '")', function(error, results, fields) {
        if (error) throw error;
        // 获取新插入的评论
        connection.query('SELECT * FROM comment where author="' + author + '"and editetime = "'+ editetime + '"' , function(error, results, fields) {
            if (error) throw error;
            res.send(results);    
        });
    });
    res.append("Access-Control-Allow-Origin", "*");
});

// 获取文章数据
app.get('/passage', function(req, res) {
    var id = req.query.id;
    console.log(id);
    createCon();
    connection.connect();
    connection.query('SELECT * FROM passage where id=' + id, function(error, results, fields) {
        if (error) throw error;
        res.send(results);
        //关闭数据库 
        //connection.end();
    });
    res.append("Access-Control-Allow-Origin", "*");
});

// 设置头像数据库
/*app.get('/setHead', function(req, res) {
    console.log(req.query);
    var src = req.query.src;
    var currId = req.query.id;
    createCon();
    connection.connect();
    connection.query('UPDATE  client set head="' + src + '" where id="' + currId + '"', function(error, results, fields) {
        // if (error) throw error;
        // console.log('The solution is: ', results);
        // res.send(results);
        // connection.end();
        connection.query('SELECT * FROM client where id=' + currId, function(error, results, fields) {
            if (error) throw error;
            // 打印报错结果
            // console.log('The solution is: ', results);
            res.send(results);
            connection.end();
        });
    });
    res.append("Access-Control-Allow-Origin", "*");
});

app.get('/getHead', function(req, res) {
    var currId = req.query.id;
    console.log(currId);
    createCon();
    connection.connect();
    connection.query('SELECT * FROM client where id=' + currId, function(error, results, fields) {
        if (error) throw error;
        // 打印报错结果
        // console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
    res.append("Access-Control-Allow-Origin", "*");
});*/

/*//获取详情页的数据
app.use(bodyParser.urlencoded({
    extended: false
}));
app.post('/detail', function(req, res) {
    var id = req.body.id;
    // console.log(id);
    createCon();
    connection.connect();
    connection.query('SELECT * FROM shoe where id=' + id, function(error, results, fields) {
        if (error) throw error;
        // 打印报错结果
        // console.log('The solution is: ', results);
        res.send(results);
        connection.end();
    });
    res.append("Access-Control-Allow-Origin", "*");
});*/

// 上传头像
/*app.use(express.static('uploads'));
var storage = multer.diskStorage({
    //设置上传后文件路径
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function(req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        //给图片加上时间戳格式防止重名名
        //比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
var upload = multer({
    storage: storage
});
app.post('/upload-single', upload.any(), function(req, res, next) {
    console.log(req.files);
    res.append("Access-Control-Allow-Origin", "*");
    res.send({
        success: 'ok',
        path: req.files
    });
});*/
