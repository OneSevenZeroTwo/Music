var express = require('express');
var http = require("http");
var url = require('url');
var express = require('express');
var querystring = require('querystring');
var app = express();

app.get('/songlist', function(req, ress) {
    http.get('http://m.kugou.com/plist/index&json=true', function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            ress.send(data)
        })
    })
    ress.append('Access-Control-Allow-Origin', '*')
})

var server = app.listen(6565, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('服务器开启:6565')
})
