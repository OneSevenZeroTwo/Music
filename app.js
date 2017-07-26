//var http = require('http');
//var url = require('url');
//var express = require('express');
//var bodyParser = require('body-parser');
//var app = express();
//var querystring = require('querystring');
//
//
//http.createServer(function(request, response) {
//  /*  var paramStr = url.parse(request.url).query;
//      var param = querystring.parse(paramStr);
//      console.log(param);*/
//  console.log(request)
//  response.setHeader("Access-Control-Allow-Origin", "*");
//
//  http.request({
//      hostname: 'm.kugou.com',
//      port: '80',
//      path: '/singer/class&json=true',
//      method: 'GET',
//      headers:{  //获取歌手信息,需要设置请求头使用端为手机设备
//          "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
//      }
//  }, function(res) {
//      res.setEncoding('utf8');
//      var data = "";
//      res.on('data', function(chunk) {
//          data += chunk
//      });
//      res.on('end', function() {
//          //接收连接服务器后返回的数据
//              response.end(data)
//      });
//  }).on('error', function(e) {
//      console.log('problem with request: ' + e.message);
//  }).end();
//
//}).listen("6787");
//console.log('服务器开启:6787')