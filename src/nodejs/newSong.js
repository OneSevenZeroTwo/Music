
var express = require('express');
var http = require("http");
var url = require('url');
var express = require('express');
var querystring = require('querystring');
var app = express();

app.get('/newSong', function(req, ress) {
    http.get('http://m.kugou.com/?json=true', function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            ress.send(data)
        })
    })
    ress.append('Access-Control-Allow-Origin','*')
})
console.log('服务器开启')

var server = app.listen(6565, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})