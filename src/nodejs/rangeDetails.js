var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(request, response) {
    var paramStr = url.parse(request.url).query;
    var param = querystring.parse(paramStr);
    console.log(param);
    response.setHeader("Access-Control-Allow-Origin","*");
    http.get("http://m.kugou.com/rank/info/?rankid=23784&page=1&json=true", function(res) {
        var data = "";
        res.on('data', function(chunk) {
            data += chunk
        })
        res.on('end', function() {
            //console.log(data)
            response.end(data)
        })
    })
}).listen("6200");
console.log('服务器开启')