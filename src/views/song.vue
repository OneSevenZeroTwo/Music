<template>
    <div id="song">
        <div class="header">
            <i class="iconfont icon-home" @click="back()"></i>
            <div class="header-content">
                <p class="title"></p>
                <p class="author"></p>
            </div>
            <i class="iconfont icon-search"></i>
        </div>
        <!-- 歌手头像 歌词同步 -->
        <div class="song-info">
            <div id="picture" :class="{'zhuan':zhuan}">
                <img :src='recordCover' alt="">
            </div>
            <div class="lyric">
                <ul class="lrc-inner" style="transition: all 0.3s ease-out;" :style="{'top': ( -20 * currentIndex + 'px')}">
                    <li v-for="(item,index) in afterlyric" :id="index" :key="index" :style="{'color': index === currentIndex ? '#fc378c' : '#8e9ba1'}" :class="{'font':index === currentIndex}">
                        {{item[1]}}
                    </li>
                </ul>
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
        <div class="ad" v-show="appear">
            <img src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_14976036646c41b35e918e1c10d11fe38669ec2061.jpg" alt="">
        </div>
    </div>
</template>
<script>
import skPlayer from '../lib/skPlayer.js';
import '../css/skPlayer.scss'

import axios from 'axios'
export default {
    data() {
            return {
                "zhuan": true,
                "appear": true,
                afterlyric: [],
                time: null,
                currentIndex: -1,
                i: 0
            }
        },
        computed: {
            songlist() {
                return this.$store.getters.getRecord
            },
            test(){//设置默认的第一张封面
                return this.$store.getters.getRecord[0].cover 
            },
            recordCover() {
                return this.$store.getters.getrecordCover
            },
            lyric() {
                let i = this.i
                return this.$store.getters.getRecord[i].lyric
            }

        },
        filters: {
            lyric(val) {
                val = val.replace(/\[\d{2}:\d{2}.\d{2}\]/g, '');
                return val
            }
        },
        methods: {
            back() {
                window.history.back()
            },
            parseLyric(lyric) {
                //歌词时间转换处理;
                // 以行为单位拆分每一句歌词
                // 将每句歌词的时间tag和内容分离
                // 将时间转换为分钟
                let lines = lyric.split('\n');
                let pattern = /\[\d{2}:\d{2}.\d{2}\]/g;
                let result = [];
                while (!pattern.test(lines[0])) {
                    lines = lines.slice(1);
                }
                lines[lines.length - 1].length === 0 && lines.pop();
                for (let data of lines) {
                    let index = data.indexOf(']');
                    let time = data.substring(0, index + 1);
                    let value = data.substring(index + 1);
                    let timeString = time.substring(1, time.length - 2);
                    let timeArr = timeString.split(':');
                    result.push([Math.floor(timeArr[0], 10) * 60 + Math.floor(timeArr[1]), value]);
                }
                result.sort(function(a, b) {
                    return a[0] - b[0];
                });
                return result;
            }
        },
        mounted() {
            //--------接收唱片信息; new 一个播放器;
            var songlist = this.$store.getters.getRecord
            var player = new skPlayer({
                listshow: false,
                music: {
                    type: 'file',
                    source: songlist
                }
            });
            player.play();

            //-------init------初始化------
            var audio = document.querySelector('.skPlayer-source');
            var kPlayer = document.querySelector('.skPlayer-play-btn')
            var self = this
            var list = document.querySelectorAll('.skPlayer-list li')

            // ------methods-------方法
            //封面停止与播放与播放按钮互相绑定
            kPlayer.onclick = function() {
                if (audio.paused) {
                    self.zhuan = false
                } else {
                    self.zhuan = true
                }
            };
            //点击列表的切换事件; 
            for (let i = 0; i < list.length; i++) {
                list[i].onclick = function() {
                    //1.切换封面
                    setTimeout(function() {
                            var imgHead = document.querySelector('.skPlayer-cover');
                            self.$store.dispatch('setrecordCover', imgHead.src);

                        }, 300)
                        //补上转动的封面
                    if (audio.paused) {
                        self.zhuan = true
                    } else {
                        self.zhuan = true
                    }
                    //2.切换歌词
                    self.i = i
                    self.afterlyric = self.parseLyric(self.lyric)
                }
            }



            //------歌词的同步
            //1.转换歌词格式
            let lyric = this.parseLyric(this.lyric);
            this.afterlyric = lyric;
                //console.log(this.afrerlyric)  //处理后的歌词格式;
                //2.获取当前audio时间,并且将时间与歌词绑定对应;
            audio.ontimeupdate = function() {
                let playtime = Math.floor(audio.currentTime);
                let currentIndex = 0
                for (let i = 0; i < self.afterlyric.length; i++) {
                    if (playtime === self.afterlyric[i][0]) {
                        self.currentIndex = i;
                    }
                }

            };
            //3.歌词的滚动效果 :style控制top值;

            //----广告的隐藏 
            var ad = document.querySelector('.skPlayer-list-switch')
            ad.onclick = function() {

                if (self.appear) {
                    self.appear = false;
                } else {
                    self.appear = true;
                }
            }
        },
        watch:{
            afterlyric:function(val){
                this.afterlyric = val
                 console.log(this.afterlyric)  //待解决的问题;切换歌词的同步;
            },
            test:function(val){
                console.log('test',val)
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

.zhuan {
    animation: "loading" 3s infinite linear
}

#picture img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.lyric {
    height: 80px;
    text-align: center;
    margin-top: 15px;
    overflow: hidden;
    position: relative;
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

.ad {
    width: 80%;
    height: 100px;
    text-align: center;
    position: absolute;
    bottom: 32px;
}

.ad img {
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


/*歌词滚动样式*/

.lrc-inner {
    position: absolute;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    top: 0;
}

.lrc-inner:hover {
    top: -90px;
    transition: all 4s linear 0s
}

.lrc-inner li {
    list-style: none;
}

.font {
    transition: all .0.8s linear 0s;
    font-size: 18px;
}
</style>
