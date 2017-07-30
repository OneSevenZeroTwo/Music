<template>
    <div id="song">
        <div class="header">
            <i class="iconfont icon-home"></i>
            <div class="header-content">
                <p class="title">演员</p>
                <p class="author">薛之谦</p>
            </div>
            <i class="iconfont icon-search"></i>
        </div>
        <!-- 歌手头像 歌词同步 -->
        <div class="song-info">
            <div class="picture">
                <img src="" alt="">
            </div>
            <div class="lyric">
                歌词
            </div>
            <div class="row">
                <i class="iconfont icon-love"></i>
                <i class="iconfont icon-xiazai1"></i>
            </div>
        </div>
        <!-- 音乐播放器 -->
        <div class="play">
            <div id="skPlayer"></div>
            <div class="container">
                <!-- <button onclick="player.play()">player.play()</button>
                <button onclick="player.pause()">player.pause()</button>
                <button onclick="player.toggle()">player.toggle()</button>
                <button onclick="player.prev()">player.prev()</button>
                <button onclick="player.next()">player.next()</button>
                <button onclick="player.switchMusic(7)">player.switchMusic(7)</button>
                <button onclick="player.toggleList()">player.toggleList()</button>
                <button onclick="player.toggleMute()">player.toggleMute()</button>
                <button onclick="player.switchMode()">player.switchMode()</button> -->
            </div>
        </div>
    </div>
</template>
<script>
var skPlayer = require("../lib/skPlayer.min.js");

export default {
	mounted(){
	    var player = new skPlayer.skPlayer({
	        autoplay: true,
            music: {
                type: 'cloud',
                source: 317921676
            }
	    });
	}
}

</script>
<style scoped>
/*@import url('../css/skPlayer.scss');*/
#song {
    background-color: #f8f8f8;
    overflow: hidden;
}

.header {
    height: 48px;
    margin-bottom: .8rem;
    margin-right: 16px;
    margin-left: 16px;
    display: flex;
    position: relative;
}

.icon-home,
.icon-search {
    font-size: 29px;
    position: absolute;
    top: 2px;
}

.icon-home {
    left: 0;
}

.icon-search {
    right: 0;
}

.header-content {
    display: inline-block;
    width: 100%;
    text-align: center;
}

.header-content .title {
    font-size: 21px;
    line-height: 21px;
    margin-top: 15px;
}

.header-content .author {
    font-size: 14px;
    line-height: 14px;
    margin-top: 7px;
    color: #999;
}

.song-info {
    width: 100%;
    height: 333px;
    background-color: #f8f8f8;
    margin-top: 20px;
    overflow: hidden;
}

.picture {
    width: 166px;
    height: 166px;
    background-color: #fff;
    align-self: center;
    margin-left: 110px;
    margin-top: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, .31)
}

.picture img {
    width: 100%;
    height: 100%;
}

.lyric {
    height: 80px;
    text-align: center;
    margin-top: 15px;
}

.icon-love,
.icon-xiazai1 {
    padding: 0 20px;
    font-size: 22px;
}

.play {
    padding: 0 20px;
    height: 266px;
    background-color: pink;
    position: relative;
}
#skPlayer{
	position: absolute;
	left: 0;
	top:0;
}

#skPlayer .skPlayer-picture .skPlayer-play-btn{
	left:50px
}
.skPlayer-list{
	height: 135px;
}
</style>
