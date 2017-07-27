<template>
    <div>
    	<div class="mainTitle">
        	<p class="title">精选电台</p>
            <span class="more"></span>
        </div>
        <section class="type">
            <span>
                <img src="https://p.qpic.cn/music_cover/KWul6PEBRTRXtxIIqGZBSdyWapkicmbusJPHZcrIfhqfiacbTnEGfltw/300?n=1" alt="">
                <p>90后</p>
            </span>
            <span class="middle">
                <img src="https://p.qpic.cn/music_cover/8HhavvWNIicpyjlv0UnT5TTPic7kJoZ4IqytNr1WVqoJNgTtE6kry79w/300?n=1" alt="">
                <p>古风</p>
            </span>
            <span>
                <img src="https://p.qpic.cn/music_cover/eO1iarCrMC5jNLJicQibtNolrqRaiafSMJMRTPmZiaTibX5Bgcp3yPSDS70Q/300?n=1" alt="">
                <p>民俗</p>
            </span>
        </section>
        <div class="showBox">
            <div class="container">
                <section class="content">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000h2IRx0Ap45C.jpg?max_age=2592000" alt="">
                    <h4>唱反调 | 吃火锅底料的GAI爷</h4>
                    <p>主播：DJ周杨</p>
                    <i></i>
                    <span>1.3万</span>
                </section>
                <section class="content">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000004ULoqM4HpMKF.jpg?max_age=2592000" alt="">
                    <h4>回到过去 | 磁带里走出的夏天</h4>
                    <p>主播：任志红</p>
                    <i></i>
                    <span>1.1万</span>
                </section>
                <section class="content">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002xaPnq0BXNav.jpg?max_age=2592000" alt="">
                    <h4>幽暗恢宏迷离消逝-英国才华横溢...</h4>
                    <p>主播：Konekt Asia</p>
                    <i></i>
                    <span>1.3万</span>
                </section>
                <section class="content">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003fMl4c3ItNV4.jpg?max_age=2592000" alt="">
                    <h4>九张机(Cover叶炫清)</h4>
                    <p>主播：ayo又</p>
                    <i></i>
                    <span>1.5万</span>
                </section>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
            return {
                column: null
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
.title {
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    margin-bottom: 4px;
    margin-top: 4px;
}
.type{
    overflow: hidden;
}
.type span{
    text-align: center;
    display: block;
    width: 32.6%;
    float: left;
}
.middle{
    margin:0 4px;
}
.type img{
    border-radius: 50%;
    width: 80%;
}
.showBox{
    margin-top: 10px;
    width: 100%;
    overflow: auto;
}
.container{
    overflow: hidden;
    width: 516px;
}
.content{
    width: 24%;
    float: left;
    margin:0 2px;
}
.content img{
    width: 100%;
}
.content h4{
    font-size: 14px;
}
.content p,.content span{
    font-size: 12px;
    color: #444;
}
</style>
