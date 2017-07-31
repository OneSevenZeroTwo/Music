var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mysql = require("mysql");
var connection;
var multer = require('multer');
var url = require('url');

//上传头像
var imgurl;
/*var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹手动创建。
	destination: function(req, file, cb) {
		cb(null, '../../static/uploads')
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		imgurl = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, imgurl);
	}
});
var upload = multer({
	storage: storage
});
*/
console.log('mysql连接成功');

function createConnection() {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'test'
	});
}
//console.log(app);
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
	extended: false
}))
//设置静态文件 app.js根目录下寻找public文件夹作为静态文件夹

// parse application/json 
//是要get请求并且匹配到路由`/`，我就执行回调，并用`res.send`方法去相应结果
app.get('/', function(req, res) {
	res.send('kk');
})

//注册---向数据库插入数据
app.get('/register',function(req,res){
	console.log(111222);
	createConnection();
	var telephone = req.query.telephone;
	var password = req.query.password;
	var repassword = req.query.repassword;
	console.log(telephone,password,repassword);
	connection.query(`INSERT INTO user(telephone,password) VALUES ('${telephone}','${password}')`,
	function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		var obj = {
			user: results
		}
		res.send(JSON.stringify(obj));
		
	});
	res.append("Access-Control-Allow-Origin", "*");
});

//登录
app.get('/login',function(req,res){
	createConnection();
	console.log(3333);
	var telephone = req.query.telephone;
	var password = req.query.password;
	//console.log('/login',req.query.telephone);
//	console.log('/login222',telephone,password);
	//console.log(`SELECT * FROM user WHERE telephone = '${telephone}' and password = '${password}'`);
	connection.query(`SELECT * FROM user WHERE telephone = '${telephone}' and password = '${password}'`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log(results);
		var obj = {
			user: results
		}
		res.send(JSON.stringify(obj));
		connection.end();
	});
	res.append("Access-Control-Allow-Origin", "*");
	
})

/*//上传头像
app.post('/touxiang', function(req, res) {
	createConnection();
	var tel = req.query.telephone;
	console.log(1111,imgurl)
	connection.query(`update user set touxiang = '${imgurl}' where telephone = '${tel}'`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		var obj = {
			my: results
		}
		res.send(JSON.stringify(obj));connection.end();
	});
	res.append("Access-Control-Allow-Origin", "*");
	
})*/

/*
//只要路由是/test就进入到此逻辑
app.all('/test', function(req, res) {
	console.log(req.cookies)
	res.send('进入到test页面');
})
*/

//收藏
app.post('/shoucang', function(req, res) {
	createConnection();
	connection.connect();
	var telephone = req.query.telephone;
	var singername  = req.query.singername ;
	connection.query(`SELECT singername FROM shoucang WHERE telephone = '${telephone}'`, function(error, results, fields){
		if(error) throw error;
		console.log(results[0].singername );
		var str = results[0].singername ;
		console.log(str);
		// if(str.length>=1){
		if(str){
			str += ','+singername ;
		}else{
			str = singername ;
		}		
		console.log(str);
		connection.query(`update shoucang set singername  = '${str}' where telephone = '${telephone}'`,function(error, results, fields){
			if(error) throw error;
			res.send('收藏成功');
		})
	})
	res.append("Access-Control-Allow-Origin", "*")
})


//不能设置成80，因为apache端口已经占用
var server = app.listen(12345, function() {
	//测试
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})