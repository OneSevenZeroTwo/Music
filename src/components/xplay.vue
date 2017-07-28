<template>
    <div v-show="showPlay">
        <section>
            <div class="play">
                <img :src="imgUrl">
                <!-- <img src="../assets/record.png" v-setImg> 1.获取不到图片路径,2.添加自定义组件变量-->
                <h4></h4>
                <p></p>
                <i :class="{'active':isClick}" @click="playStatus" class="playButton"></i>
                <i class="more" @click='showMore'></i>
            </div>
        </section>
        <div id="actionSheet_wrap">
            <div class="weui-mask_transparent actionsheet__mask" id="mask" :class="{'active':isShowMask}" @click="hide"></div>
            <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle':isShowMore}" id="weui-actionsheet">
                <div class="weui-actionsheet__menu">
                    <div class="title"><span></span>播放列表</div>
                    <div class="weui-actionsheet__cell" v-for="n in songsPlay">
                    <span class="icondiy-play"></span>
                    {{n.filename}}

                    <i class="iconfont icon-xiazai1"></i>
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
                isClick: false,
                isShowMore: false,
                isShowMask: false
            }
        },
        methods: {
            playStatus() {
                this.isClick = !this.isClick;
            },
            showMore() {
                this.isShowMore = !this.isShowMore;
                this.isShowMask = !this.isShowMask;
            },
            hide() {
                this.isShowMore = false;
                this.isShowMask = false;
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
                return this.$store.getters.getImgurl
            },
            showPlay() {
                return this.$store.getters.showPlay
            },
            songsPlay() {
                return this.$store.getters.songsPlay
            }
        },
        directives: {
            setImg: {
                bind: function(el, val) {
                    console.log(el.src)
                    console.log(val)
                }
            }
        },
        mounted() {
            console.log('555')
            axios.get('/musici/getSongInfo.php?cmd=playInfo&hash=CB7EE97F4CC11C4EA7A1FA4B516A5D97')
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                });
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
i.icon-xiazai1{
    color: #999;
    position: absolute;
    right: 0
}
</style>
