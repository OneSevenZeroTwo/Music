var express = require('express');
var http = require("http");
var url = require('url');
var querystring = require('querystring');
var app = express();

app.get('/list', function(req, ress) {
//	console.log(6)
	http.get('http://m.kugou.com/singer/class&json=true', function(res) {
		var data = '';
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
			console.log(data);
			ress.send(data)
		})
	})
	ress.append('Access-Control-Allow-Origin','*')
})

app.get('/singlist', function(req, ress) {
//	console.log(555)
	console.log(req.query);
	http.get('http://m.kugou.com/singer/list/'+req.query.setid+'?json=true', function(res) {
		var data = '';
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
//			console.log(data);
			ress.send(data)
		})
	})
	ress.append('Access-Control-Allow-Origin','*')
})
var server = app.listen(6565, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

