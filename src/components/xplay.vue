<template>
    <div>
        <section>
            <div class="play">
                <span></span>
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
                    <!-- <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div> -->
                    <!-- slides -->
                    <div class="title">播放列表</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
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
export default {
    data() {
            return {
                isClick: false,
                isShowMore: false,
                isShowMask: false,
                swiperOption: {
                    autoplay: 3000,
                    setWrapperSize: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    observeParents: true
                }
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

span {
    background-image: url('../assets/record.png');
    background-size: 50px 50px;
    display: block;
    background-position: center;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
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
..swiper-container{
    margin-bottom: 20px;
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
.title{
    font-size: 14px;
    margin-left: 4px;
    line-height: 30px;
    text-align: center;
}
.weui-actionsheet__cell{
    font-size: 16px;
}
</style>
