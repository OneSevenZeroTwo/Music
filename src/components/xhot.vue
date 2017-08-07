<template>
    <div class="container" v-if="hotList">
        <div class="mainTitle">
            <p class="title">热门推荐</p>
            <span class="more"></span>
        </div>
        <section class="first">
            <span class="firstErji" ></span>
            <span class="firstBofang"></span>
            <i class="firstI">{{ hotList[0].duration}}</i>
            <img src="http://y.gtimg.cn/music/photo_new/T002R300x300M000002sib2i06iuRx.jpg?max_age=2592000" alt="" >
            <p>{{ hotList[0].filename | shortTitle }}</p>
            <!-- <p v-show="!isShow">加载中</p> -->
        </section>
        <section class="middle">
            <span class="firstErji"></span>
            <span class="firstBofang"></span>
            <i class="firstI">{{hotList[1].duration}}</i>
            <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000nKeGK4Fy9tu.jpg?max_age=2592000" alt="">
            <p>{{ hotList[1].filename | shortTitle }}</p>
        </section>
        <section>
            <span class="erji"></span>
            <span class="bofang"></span>
            <i>{{hotList[2].duration}}</i>
            <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002glrSP3MSICO.jpg?max_age=2592000" alt="">
            <p>{{ hotList[2].filename | shortTitle }}</p>
        </section>
        <section class="four">
            <span class="erji"></span>
            <span class="bofang"></span>
            <i>{{hotList[3].duration}}</i>
            <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000cKyUv3XjHPm.jpg?max_age=2592000" alt="">
            <p>{{ hotList[3].filename | shortTitle }}</p>
        </section>
        <section class="middle">
            <span class="erji"></span>
            <span class="bofang"></span>
            <i>{{hotList[4].duration}}</i>
            <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003Nhohk0w0hey.jpg?max_age=2592000" alt="">
            <p>{{ hotList[4].filename | shortTitle }}</p>
        </section>
        <section>
            <span class="erji"></span>
            <span class="bofang"></span>
            <i>{{hotList[5].duration}}</i>
            <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002zVHhH3WaYou.jpg?max_age=2592000" alt="">
            <p>{{ hotList[5].filename | shortTitle }}</p>
        </section>
    </div>
</template>
<script>
import axios from 'axios'


export default {
    data() {
            return {
                hotList: null,
                //isShow:false
                isShowPlay:false
            }
        },
        mounted() {
            axios.get('/music/?json=true')
                .then((response) => {
                    this.hotList = response.data.data.splice(0, 6);
                    console.log(this.hotList);
                })
                .catch((error) => {
                    console.log(error);
                });
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
.container{
    overflow: hidden;
}
.mainTitle{
    position: relative;
}

img {
    border: 0;
    text-align: center;
    width: 100%;
}
.middle {
    margin: 0 4px;
}
.more{
    width: 40px;
    height: 40px;
    position: absolute;
    display: block;
    top:-6px;
    right:-2px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/more.png');
}
section span{
    width: 40px;
    height: 40px;
    position: absolute;
    display: block;
    bottom:44px;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center;
}
.firstErji,.erji{
    background-image: url('../assets/erji.png');
    left:0;
    background-size: 18px 18px;
}

.firstBofang,.bofang{
    background-image: url('../assets/start.png');
    right:0;
}
.title {
    width: 100%;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    margin-bottom: 4px;
}
i{
    font-style: normal;
    position: absolute;
    bottom: 54px;
    left: 34px;
    color: #fff;
    font-size: 12px;
}
section {
    position: relative;
    width: 31.6%;
    float: left;
}
.first,.four{
    margin-left: 4px;
}
section p {
    display: block;
    height: 40px;
    margin-bottom: 4px;
    font-size: 14px;
}

</style>
