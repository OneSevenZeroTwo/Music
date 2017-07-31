<template>
    <div id="song">
        <div class="header">
            <i class="iconfont icon-home" @click="back()"></i>
            <div class="header-content">
                <p class="title">演员</p>
                <p class="author">薛之谦</p>
            </div>
            <i class="iconfont icon-search"></i>
        </div>
        <!-- 歌手头像 歌词同步 -->
        <div class="song-info">
            <div id="picture" :class="{'zhuan':zhuan}">
                <img src="../img/changpian.png" alt="">
            </div>
            <div class="lyric">
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
        <!-- 广告 -->
        <div class="ad" v-show = "appear">
             <img src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_14976036646c41b35e918e1c10d11fe38669ec2061.jpg" alt="">
        </div>
    </div>
</template>
<script>
import skPlayer from '../lib/skPlayer.js';
import '../css/skPlayer.scss'

import axios from 'axios'
export default {
    data(){
        return {
            "zhuan":true,
            "appear":true
        }
    },
    computed: {
        songlist() {
            return this.$store.getters.getRecord
        }
    },
    methods: {
        back() {
            // window.location.href = "/#/app/songSheet"
            window.history.back()
        }
    },
    mounted() {
        //接收唱片信息;
        var songlist = this.$store.getters.getRecord
        var player = new skPlayer({
            listshow:false,
            music: {
                type: 'file',
                source:songlist
            }
        });
        player.play()
        //-------------唱片的旋转类名控制;
        var audio = document.querySelector('.skPlayer-source');
        var kPlayer = document.querySelector('.skPlayer-play-btn')
        var self = this

        kPlayer.onclick =function(){
            if(audio.paused){
               self.zhuan = false
            }else{
                self.zhuan = true
            }  
        }
        //----广告的隐藏
        var ad = document.querySelector('.skPlayer-list-switch')
        ad.onclick =function(){
            if (self.appear) {
                self.appear = false;
            }else{
                self.appear = true;
            }
        }
    }
}


</script>
<style scoped>
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

#picture {
    width: 166px;
    height: 166px;
    background-color: #fff;
    align-self: center;
    margin-left: 110px;
    margin-top: 30px;
    border-radius: 50%;
    box-shadow: 0 0 10px 2px rgba(50, 50, 50, .31);
}
.zhuan{
    animation: "loading" 3s infinite linear
}

#picture img {
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
    height: 240px;
    position: relative;
}

#skPlayer {
    position: absolute;
    left: 0;
    top: 0;
}

#skPlayer .skPlayer-picture .skPlayer-play-btn {
    left: 50px
}

.skPlayer-list {
    height: 135px;
}
.ad{
    width: 80%;
    height:100px;
    text-align: center;
    position: absolute;
    bottom: 32px;
}
.ad img{
    width: 100%;
    height: 100%;
    margin-left: 42px;
    border-radius: 16px;
}
@-webkit-keyframes "loading" {
    /**关键帧名称**/
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
</style>
