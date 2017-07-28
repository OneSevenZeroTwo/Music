<template>
    <div v-show="showPlay">
        <section>
            <div class="play">
            <div id="progress">
                <span id="bar"></span>
            </div>
                <img :src="imgUrl">
                <h4>{{songName}}</h4>
                <p>{{singerName}}</p>
                <i :class="{'active':isClick}" @click="playStatus" class="playButton"></i>
                <i class="more" @click='showMore'></i>
            </div>
            <div class="play_audio">
                <audio :src="music_src" controls="controls" autoplay="autoplay" id="audio">
                </audio>
            </div>
        </section>
        <div id="actionSheet_wrap">
            <div class="weui-mask_transparent actionsheet__mask" id="mask" :class="{'active':isShowMask}" @click="hide"></div>
            <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle':isShowMore}" id="weui-actionsheet">
                <div class="weui-actionsheet__menu">
                    <div class="title"><span></span>播放列表</div>
                    <div class="weui-actionsheet__cell" v-for="(n,index) in songsPlay" :id="index">
                        <span :class="{'icondiy-play':page===index}"></span>
                        <span @click='icondiyPlay(index,n.hash)' class="songsName">{{n.filename}}</span>
                        <a :href="music_src" :download="n.filename" id="down">
                            <i class="iconfont icon-xiazai1" @click="download()"></i>
                        </a>
                    </div>
                    <!-- Optional controls -->
                </div>
                <div class="weui-actionsheet__action">
                    <div class="weui-actionsheet__cell cancel" id="actionsheet_cancel" @click="hide">关闭</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
            return {
                isClick: true,
                isShowMore: false,
                isShowMask: false,
                music_src: '',//音乐列表下的src(音频播放的url地址;)
                songName: '',
                singerName: '',
                page: 0,
                src: '' //下载按钮的url地址;动态变化;
            }
        },
        methods: {
            playStatus() {
                var audio = document.getElementById('audio');
                //播放按钮与audio的同步绑定;
                this.isClick = audio.paused //绑定显示状态与播放状态一致;
                    //判断状态 : 暂停与播放
                if (audio.paused) {
                    audio.play(); //audio.play();// 这个就是播放  

                } else {
                    audio.pause(); // 这个就是暂停
                }
            },
            showMore() {
                this.isShowMore = !this.isShowMore;
                this.isShowMask = !this.isShowMask;
            },
            hide() {
                this.isShowMore = false;
                this.isShowMask = false;
            },
            icondiyPlay(index, hash) { //切换歌单列表
                this.page = index;
                //切换歌单下的音乐列表=>请求MP3;
                axios.get('/music/app/i/getSongInfo.php?cmd=playInfo&hash=' + hash)
                    .then((response) => {
                        this.music_src = response.data.url;
                        //歌手信息与歌曲信息更新
                        this.singerName = response.data.singerName
                        this.songName = response.data.songName
                        //状态更改 (播放按钮, 遮罩层音乐,列表隐藏)
                        this.isClick = true
                        this.isShowMore = false; 
                        this.isShowMask = false;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            download() { //点击下载按钮 下载相应的音乐;
                var audio = document.getElementById('audio');
                var down = document.getElementById('down');
                var src = audio.src
            }

        },
        filters: {
            shortTitle(input) {
                if (input.length > 15) {
                    return input.slice(0, 15) + '...';
                } else {
                    return input
                }
            }
        },
        computed: {
            imgUrl() {
                return this.$store.getters.getImgurl  //传递过来的头像url;
            },
            showPlay() {
                return this.$store.getters.showPlay
            },
            songsPlay() {
                //-----音乐信息渲染-----
                //1.当为0的时候不执行;
                if (this.$store.getters.songsPlay.length === 0) {
                    return
                }
                // 切换歌单=>请求MP3;
                var hash = this.$store.getters.songsPlay[0].hash
                axios.get('/music/app/i/getSongInfo.php?cmd=playInfo&hash=' + hash)
                    .then((response) => {
                        this.music_src = response.data.url;
                        //信息更改
                        this.singerName = response.data.singerName
                        this.songName = response.data.songName
                            //状态更改
                        var audio = document.getElementById('audio');
                        this.isClick = true
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                return this.$store.getters.songsPlay
            }
        },
        mounted() {
            //-----播放结束的条件判断;  自动播放下一首歌曲;-(_故障,无法实时更新music_src路径,导致单曲循环;)-----
            var index = 2;
            var audio = document.getElementById('audio');
            audio.onended = function(e) {
                    var hash = self.$store.getters.songsPlay[index].hash;
                    axios.get('/music/app/i/getSongInfo.php?cmd=playInfo&hash=' + hash)
                        .then((response) => {
                            this.music_src = response.data.url;
                            console.log(this.music_src)
                                //信息更改
                            this.singerName = response.data.singerName
                            this.songName = response.data.songName
                                //状态更改
                            var audio = document.getElementById('audio');
                            audio.play()
                            this.isClick = true
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            //---进度条;
                //同步进度条事件
            var progress = document.getElementById('progress');
            var bar = document.getElementById('bar');

            audio.addEventListener('timeupdate',function() {
                var scales = audio.currentTime / audio.duration
                bar.style.width = progress.offsetWidth*scales +"px"; //进度条实时算法;
            },false)
            
        }
}
</script>
<style scoped>
.weui-mask_transparent {
    display: none;
}

.weui-mask_transparent.active {
    display: block;
    background-color: rgba(0, 0, 0, .4);
}

.play {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
}

.play h4 {
    position: absolute;
    left: 67px;
    top: 10px;
    color: #333;
    font-weight: 700;
}

.play p {
    position: absolute;
    left: 67px;
    top: 30px;
    color: #999;
}

img {
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 5px;
    left: 8px;
    z-index: 100;
}

.playButton {
    background-image: url('../assets/auto.png');
    background-size: 30px 60px;
    display: block;
    background-position: 0 0px;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    position: absolute;
    top: 15px;
    right: 50px;
    z-index: 100;
}

.playButton.active {
    background-position: 0 -30px;
    top: 14px;
}

.more {
    background-image: url('../assets/moreContent.png');
    background-size: 28px 28px;
    display: block;
    background-position: center;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    position: absolute;
    top: 1px;
    right: 4px;
    z-index: 100;
}


/*播放列表样式*/

.weui-actionsheet {
    background-color: #fff;
}

.weui-actionsheet__menu {
    margin: 0 16px;
    background-color: #fff;
}

.title {
    font-size: 16px;
    margin-left: 4px;
    line-height: 45px;
    text-align: left;
}

.weui-actionsheet__cell {
    font-size: 16px;
    /*text-align: left;*/
}

.weui-actionsheet__action {
    margin: 0 16px;
    background-color: #fff;
}

#actionSheet_wrap .cancel {
    content: " ";
    border-top: 1px solid #e5e5e5;
    color: #000;
}

span.icondiy-play {
    background-image: url("http:////static0.qianqian.com/web/st/img/ui/list/play-state-aa7.gif");
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: 12px;
    transition: margin .2s;
    transition-property: margin;
    transition-duration: 0.2s;
    transition-timing-function: initial;
    transition-delay: initial;
    position: absolute;
    left: 7px;
    top: 16px;
}

i.icon-xiazai1 {
    color: #999;
    position: absolute;
    right: 0
}


/*音乐播放组件*/

section {
    position: relative;
}

.play_audio {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -1111;
    opacity: 0
}

.songsName {
    display: inline-block;
    width: 80%;
}


/*--------------进度条*/
#progress {
    width: 100%;
    height: 2px;
    background: #ccc;
    position: absolute;
    top:0;
    z-index: 1000;
    border-radius: 10px
}
/*进度加载*/
#bar {
    width: 0%;
    height: 100%;
    background-color:#fc378c;
    display: inline-block;
    position: absolute;
    top: 0
}
</style>
