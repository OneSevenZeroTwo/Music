<template>
    <div>
        <div class="mainTitle">
            <p class="title">每日为你推荐30首</p>
            <span class="more"></span>
        </div>
        <!-- 处理异步请求没有数据 -->
        <div class="container" v-if="commend">
            <section>
                <img @click="showPlay(10)" src="http://musicdata.baidu.com/data2/pic/3e45432c82692d9c2bfa776e9507c285/544242028/544242028.jpg@s_0,w_180" alt="">
                <div class="left">
                    <h4>{{commend[0].remark | shortTitle}}</h4>
                    <p>{{commend[0].filename | shortTitle}}</p>
                    <span class="status">SQ</span>
                    <span class="mv">MV</span>
                    <span class="dujia">独家</span>
                </div>
                <i class="showMore" @click="showMore"></i>
            </section>
            <section>
                <img @click="showPlay(11)" src="//y.gtimg.cn/music/photo_new/T002R300x300M000000vxCRG30GnbT.jpg?max_age=2592000" alt="">
                <div class="left">
                    <h4>{{commend[1].remark | shortTitle}}</h4>
                    <p>{{commend[1].filename | shortTitle}}</p>
                    <span class="status">SQ</span>
                </div>
                <i class="showMore" @click="showMore"></i>
            </section>
            <section>
                <img @click="showPlay(12)" src="http://musicdata.baidu.com/data2/pic/73a3804e1b971cbebc63d99260278136/540058817/540058817.jpg@s_0,w_180" alt="">
                <div class="left">
                    <h4>{{commend[2].remark | shortTitle}}</h4>
                    <p>{{commend[2].filename | shortTitle}}</p>
                    <span class="status">SQ</span>
                    <span class="mv">MV</span>
                </div>
                <i class="showMore" @click="showMore"></i>
            </section>
            <section>
                <img @click="showPlay(13)" src="http://musicdata.baidu.com/data2/pic/ecc06795d3e3879a5717ba93f5cf995e/261998351/261998351.jpg@s_0,w_180" alt="">
                <div class="left">
                    <h4>{{commend[3].remark | shortTitle}}</h4>
                    <p>{{commend[3].filename | shortTitle }}</p>
                    <span class="status">SQ</span>
                    <span class="mv">MV</span>
                </div>
                <i class="showMore" @click="showMore"></i>
            </section>
            <section>
                <img @click="showPlay(14)" src="http://musicdata.baidu.com/data2/pic/8bace09eaa5d8860eb80fd5773d14d3c/540132627/540132627.jpg@s_0,w_180" alt="">
                <div class="left">
                    <h4>{{commend[4].remark | shortTitle}}</h4>
                    <p>{{commend[4].filename | shortTitle}}</p>
                    <span class="status">SQ</span>
                </div>
                <i class="showMore" @click="showMore"></i>
            </section>
        </div>
        <div id="actionSheet_wrap">
            <div class="weui-mask_transparent actionsheet__mask" id="mask" :class="{'active':isShowMask}" @click="hide"></div>
            <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle':isShowMore}" id="weui-actionsheet">
                <div class="weui-actionsheet__menu">
                    <!-- <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div> -->
                    <div class="songName">歌曲名</div>
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide>
                            <div class="weui-actionsheet__cell">
                                <span></span>
                                <p>下载</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="weui-actionsheet__cell">
                                <span></span>
                                <p>分享</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="weui-actionsheet__cell">
                                <span></span>
                                <p>评论</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="weui-actionsheet__cell">
                                <span></span>
                                <p>查看歌手</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="weui-actionsheet__cell">
                                <span></span>
                                <p>歌词海报</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="weui-actionsheet__cell">
                                <span></span>
                                <p>查看专辑</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="weui-actionsheet__cell">
                                <span></span>
                                <p>背景音乐</p>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                    <!-- Optional controls -->
                </div>
                <div class="weui-actionsheet__action">
                    <div class="weui-actionsheet__cell" id="actionsheet_cancel" @click="hide">取消</div>
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
                commend: null,
                isClick: false,
                isShowMore: false,
                isShowMask: false,
                swiperOption: {
                    pagination: '.swiper-pagination',
                    slidesPerView: 5,
                    paginationClickable: true,
                    spaceBetween: 12,
                    freeMode: true
                },
                isShowPlay:false,
                hash:null
            }
        },
        mounted() {
            axios.get('/music/?json=true')
                .then((response) => {
                    this.commend = response.data.data.splice(6, 5);
                    console.log(this.commend);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        methods: {
            showMore() {
                this.isShowMore = !this.isShowMore;
                this.isShowMask = !this.isShowMask;
            },
            hide() {
                this.isShowMore = false;
                this.isShowMask = false;
            },
            showPlay(num){
                var arr = document.getElementsByTagName('img');
                console.log(arr);
                //console.log(this.commend[num-10]);
                var songList = [this.commend[num-10]];
                this.$store.dispatch('setImg', [arr[num].currentSrc,true]);
                this.$store.dispatch('setSongs',songList);
            }
        },
        filters: {
            shortTitle(input) {
                if (input.length > 10) {
                    return input.slice(0, 10) + '...';
                } else {
                    return input
                }
            }
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

.mainTitle {
    position: relative;
}

.more {
    width: 40px;
    height: 40px;
    position: absolute;
    display: block;
    top: 0px;
    right: -2px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/more.png');
}

section {
    width: 100%;
    overflow: hidden;
    margin-top: 2px;
    position: relative;
}

.showMore {
    width: 40px;
    height: 40px;
    position: absolute;
    display: block;
    top: 0px;
    right: 0px;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/showMore.png');
}

img {
    width: 60px;
    float: left;
}

h4 {
    font-weight: normal;
    font-size: 14px;
    margin-top: 8px;
}

section p {
    font-size: 12px;
    color: #444;
}

.left {
    position: relative;
    float: left;
    margin-left: 8px;
}

.title {
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    margin-bottom: 4px;
    margin-top: 4px;
}

.status,
.mv,
.dujia {
    text-align: center;
    line-height: 12px;
    display: block;
    font-size: 8px;
    border-radius: 2px;
    position: absolute;
}

.status {
    border: 1px solid #fed891;
    color: #fed891;
    top: 12px;
    right: -24px;
}

.mv {
    border: 1px solid #61317f;
    color: #61317f;
    top: 12px;
    right: -50px;
}

.dujia {
    border: 1px solid #fc378c;
    color: #fc378c;
    top: 12px;
    right: -80px;
}

.songName {
    line-height: 40px;
    font-size: 16px;
    padding-left: 10px;
    border-bottom: 1px solid #ddd;
}

.weui-actionsheet__cell span {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    float: left;
    background-color: #ddd;
    padding: 4px;
    margin: 4px;
}
.weui-actionsheet__cell p{
    font-size: 12px;
    text-align: center;
    margin-left: -4px;
}
.swiper-container{
    margin-left: 4px;
}
</style>
