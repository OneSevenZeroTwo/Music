[TOC]

[参考网站DEMO](http://m.kugou.com/)

# 接口文档

**参考请求Demo(node.js请求方式)**  =>复制粘帖即可;

```Javascript
var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(request, response) {
    /*  var paramStr = url.parse(request.url).query;
        var param = querystring.parse(paramStr);
        console.log(param);*/
    console.log(request)
    response.setHeader("Access-Control-Allow-Origin", "*");

    http.request({
        hostname: 'm.kugou.com',
        port: '80',
        path: '/singer/info/3060&json=true',
        method: 'GET',
        headers:{  //获取歌手信息,需要设置请求头使用端为手机设备
            "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
        }
    }, function(res) {
        res.setEncoding('utf8');
        var data = "";
        res.on('data', function(chunk) {
            data += chunk
        });
        res.on('end', function() {
            //接收连接服务器后返回的数据
                response.end(data)
        });
    }).on('error', function(e) {
        console.log('problem with request: ' + e.message);
    }).end();

}).listen("6787");
console.log('服务器开启:6787')

```

## 一 音乐新歌榜(首页)接口

说明:获取新歌曲版单<br>

请求方式:get请求<br>

必选参数: **page: json**<br>

接口地址: http://m.kugou.com/?json=true<br>

返回数据:{banner:Array(4),data:Array(17)}<br>

推荐网页:首页:轮播图;新歌首发;<br>

## 二 音乐排行榜分类接口

说明: 获取音乐排行榜<br>

必选参数:无<br>

接口地址: http://m.kugou.com/rank/list&json=true<br>

返回数据:{rank:Object}
```Javascript
banner7url:
"http://imge.kugou.com/mcommon/{size}/20150818/20150818104301582059.png"
bannerurl:
"http://imge.kugou.com/mcommonbanner/{size}/20150818/20150818104303844759.jpg"
custom_type:0
id:65
imgurl:"http://imge.kugou.com/mcommon/{size}/20150818/20150818104300762763.png"
intro:"数据来源：酷狗网络类歌曲↵排序方式：按歌曲搜索播放一周总量排序↵更新周期：周一"
isvol:1
jump_title:""
jump_url:""
rankid:23784   //重要 =>分类id
rankname:"网络红歌榜"  //分类名称
ranktype:1
update_frequency:"周一"
```
推荐网页:排行:分类榜单<br>

### 排行版分类下的歌曲列表<br>

说明: 获取音乐排行榜<br>

参数:**rankid 排行榜分类下id ;  page: number  页数;**<br>

接口地址: http://m.kugou.com/rank/info/?rankid=23784&page=1&json=true<br>

返回数据:{songs Object}<br>
```Javascript
320filesize:5055827
320hash:"50CB9E7B2C6E35B3D8253541B9E9D1D9"
addtime:"2017-07-17 14:30:01"
album_audio_id:38170965
album_id:"1590298"
audio_id:2486088
bitrate:128
duration:125
extname:"mp3"
filename:"金南玲 - 逆流成河"
filesize:2004113
has_accompany:1
hash:"3C8D3AD5B55D7F9E6CF410E618AAE11D"
inlist:1
mvhash:"6C1B3F33C11E3EE07F628714A1229600"
old_cpy:1
recommend_reason:""
remark:"《我在锡林郭勒等你》电视剧插曲"
rp_publish:1
rp_type:"audio"
sqfilesize:11934905
sqhash:"75D8819CB839CB0478EFE88743172113"
```
推荐网页:榜单内的歌曲列表;

## 三 音乐歌单接口
说明: 获取音乐歌单

必选参数:无

接口地址: http://m.kugou.com/plist/index&json=true

返回数据{plist:Object; songs:Array}

```Javascript
collectcount:0
imgurl:
"http://imge.kugou.com/soft/collection/{size}/20170721/20170721084840758279.jpg"
intro:"突来噩耗！正当我们大多数人还在睡梦当中之时，美国著名摇滚乐队林肯公园主唱Chester Bennington被发现在家自杀身亡，年仅41岁……就在今日凌晨，林肯公园发行了新歌《Talking To Myself》的MV,记录了乐队台前幕后的欢乐画面，而新专《one more light》亦可能成为Chester Bennington的绝唱……"
playcount:439172  =>收听量
publishtime:"2017-07-21 00:00:00"
recommendfirst:1
singername:""
slid:30
songcount:2
songs:Array(2)   //歌单中的歌曲
specialid:128180  =>通过此id获取歌单下的音乐列表
specialname:"林肯公园主唱查斯特离世"
suid:509005856
username:"透明高脚杯"
verified:0
```
推荐网页:音乐歌单

### 音乐歌单下的音乐列表

说明: 获取 歌单下的音乐列表

必选参数: 需要添加 specialid 128180

接口地址: http://m.kugou.com/plist/list/128180?json=true

返回数据:{list:Object}

推荐网页:音乐歌单下的音乐列表

## 四 歌手分类接口

说明: 获取 歌手分类

必选参数:无

接口地址: http://m.kugou.com/singer/class&json=true

返回数据:{list:Array}
```Javascript
classid:88  =>重要id;
classname:"热门歌手"
imgurl:"http://mobileimg.kugou.com/billImage/150/26-11.jpg"
```

### 歌手分类下面的歌手列表

说明: 获取歌手分类

必选参数:classid

接口地址: http://m.kugou.com/singer/list/88?json=true

返回数据:{singer:Object}
```Javascript
imgurl:"http://singerimg.kugou.com/uploadpic/pass/softhead/{size}/20170713/20170713161536456.jpg"
singerid:3060  ==>重要id;
singername:"薛之谦"
```

### 歌手列表下的歌手信息

说明: 获取 歌手分类

必选参数:

singerid : 歌手id 3060

接口地址: http://m.kugou.com/singer/info/3060&json=true  
<!-- 模拟手机端的请求即可 -->
```Javascript
albumcount:20
has_long_intro:1
imgurl:"http://singerimg.kugou.com/uploadpic/softhead/{size}/20170713/20170713161536456.jpg"
intro:"薛之谦，1983年7月17日出生于上海市，中国内地男歌手。↵2006年6月9日，薛之谦发行首张个人原创同名专辑《薛之谦》
mvcount:121
profile:"薛之谦（Joker Xue），1983年7月17日出生于上海，华语流行乐男歌手、影视演员、音乐制作人，毕业于格里昂酒店管理学院。05年因参加选秀节目《我型我秀》而正式出道，06年发行首张同名专辑《薛之谦》，随后凭借歌曲《认真的雪》获得广泛关注，15年6月10日正式签约海蝶音乐公司，升为制作人。"
singerid:3060
singername:"薛之谦"
songcount:123
__proto__:Objectkg_domain:"http://m.kugou.com"
songs:Object  =>歌曲列表
src:"http://sdn.kugou.com/link.aspx?id=16632&dl=1"
ver:"v3"
```
返回数据: 暂无;

## 五 歌曲音乐详情 --无歌词版本

说明: 获取 歌曲音乐详情信息

必选参数:hash : 音乐列表下的 音乐id

接口地址: http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=04EBD2291E4B8AE042731752ECBEFF13

返回数据
```Javascript
bitRate:128
choricSinger:"LINKIN PARK"
ctype:1009
extName:"mp3"
fileName:"LINKIN PARK - New Divide"
fileSize:4303605
hash:"04EBD2291E4B8AE042731752ECBEFF13"
imgUrl:"http://singerimg.kugou.com/uploadpic/softhead/{size}/20140829/20140829170016192331.jpg"
intro:""
mvhash:"DBD630EBEC40C6E3302EF5C138B88437"
privilege:8q:16284
req_hash:"04EBD2291E4B8AE042731752ECBEFF13"
singerHead:""
singerId:75427
singerName:"LINKIN PARK"
songName:"New Divide"
time:1500639893
timeLength:269
topic_remark:""
topic_url:""
url: =>音乐地址;
"http://fs.open.kugou.com/e42b0cb8adcae5232f6e4e13ba97f8f9/5971f0ad/G006/M02/1C/19/Rg0DAFT68D6AY6nTAEGq9Xxpo4Q086.mp3"  
```
推荐网页:需要播放歌曲的地方;

### 歌曲音乐详情-带歌词版本

说明: 获取音乐详情-带歌词版本

必选参数:

hash : 音乐列表下的 音乐id

接口地址: http://www.kugou.com/yy/index.php?r=play/getdata&hash=CB7EE97F4CC11C4EA7A1FA4B516A5D97

```Javascript
album_id:0
album_name:"未知专辑"
audio_name:"LINKIN PARK - New Divide"
author_id:"75427"
author_name:"LINKIN PARK"
authors:Array(1)
bitrate:128
filesize:4303605
hash:"04EBD2291E4B8AE042731752ECBEFF13"
have_album:0
have_mv:1
img:
"http://singerimg.kugou.com/uploadpic/softhead/400/20140829/20140829170016192331.jpg"
lyrics:   ==歌词部分
"[00:35.15]I remembered black skies
↵[00:37.40]the lightning all around me
↵[00:43.22]I remembered each flash
↵[00:45.47]as time began to blur
↵[00:51.23]Like a startling sign
↵[00:53.58]that fate had finally found me
↵[00:59.11]And your voice was all I heard
↵[01:03.23]That I get what I deserve
↵[01:06.85]So give me reason to prove me wrong
↵[01:11.86]to wash this memory clean
↵[01:15.22]Let the floods cross the distance in your eyes
↵[01:23.44]Give me reason to fill this hole
↵[01:28.22]connect the space between
↵[01:31.49]Let it be enough to reach the truth that lies
↵[01:38.61]Across this new divide
↵[01:48.45]There was nothing in sight but memories left abandoned
↵[01:56.45]There was nowhere to hide the ashes fell like snow
↵[02:04.56]And the ground caved in
↵[02:06.91]between where we were standing
↵[02:12.48]And your voice was all I heard
↵[02:16.48]That I get what I deserve
↵[02:20.08]So give me reason to prove me wrong
↵[02:25.09]to wash this memory clean
↵[02:28.41]Let the floods cross the distance in your eyes
↵[02:35.39]Across this new divide
↵[02:52.56]In every loss in every lie
↵[02:56.61]In every truth that you'd deny
↵[03:00.69]And each regret and each goodbye
↵[03:04.75]was a mistake to great to hide
↵[03:09.34]And your voice was all I heard
↵[03:13.47]That I get what I deserve
↵[03:16.97]So give me reason to prove me wrong
↵[03:22.08]to wash this memory clean
↵[03:25.28]Let the floods cross the distance in your eyes
↵[03:33.52]Give me reason to fill this hole
↵[03:38.46]connect the space between
↵[03:41.63]Let it be enough to reach the truth that lies
↵[03:48.81]Across this new divide
↵"
play_url:
"http://fs.web.kugou.com/832ece378fae002b3c5e0f793a2cb16c/5971ed9b/G006/M02/1C/19/Rg0DAFT68D6AY6nTAEGq9Xxpo4Q086.mp3"
privilege:8
privilege2:"1000"
song_name:"New Divide"
timelength:268957
video_id:"596720"
```

## 六 热门搜索列表

说明: 获取 热门搜索列表

必选参数: plat :开始数 count : 热门搜索关键字返回

接口地址: http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30

返回数据
```Javascript
Object
jumpurl:""
keyword:"中国新歌声第二季"
sort:1
Object
jumpurl:
"http://tpl.mobile.kugou.com/topic/596ebe18dea80b3df1c08dc9.html"
keyword:"抖腿周刊"
sort:2
```

### 音乐搜索(关键字搜索)

说明: 获取 音乐搜索结果

必选参数:keyword : 关键字
可选参数:page 第几页 pagesize: 10 一页几个

接口地址: http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword=关键字&page=1&pagesize=20&showtype=1

返回数据
```Javascript
320filesize:12274416
320hash:"4dc9da16dff397ed2695e164b612cab1"
320privilege:0
Accompany:1
album_audio_id:27596770
album_id:"527891"
album_name:"非常幸运 电影原声带"
audio_id:8692118
bitrate:128
duration:306
extname:"mp3"
fail_process:0
fail_process_320:0
fail_process_sq:0
feetype:0
filename:"王力宏、章子怡 - 爱一点【《非常幸运》 电影原声带】"
filesize:4910601
group:Array(3)
hash:"32dec5bb5e07be73689860aecf75ceb1"
isnew:0
m4afilesize:1258783
mvhash:"2ebddad8d64878f893dd68ea7d92d095"
old_cpy:1
othername:""
ownercount:147759
pay_type:0
pay_type_320:0
pay_type_sq:0
pkg_price:0
pkg_price_:3200
pkg_price_sq:0
price:0
price_320:0
price_sq:0
privilege:0
rp_publish:1
rp_type:"audio"
singername:"王力宏、章子怡"
songname:"爱一点"
source:""
sourceid:0  =>id获取歌手详情;
sqfilesize:36150153
sqhash:"dddf0263dc58a5f301093db3682532fc"
sqprivilege:0
srctype:1
topic:"《非常幸运》 电影原声带"
topic_url:""
```
注意:如果需要点击进入对应的详情页面,请通过hash => 音乐详情接口data:author_id=>歌手信息接口
