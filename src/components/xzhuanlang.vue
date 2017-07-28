<template>
    <div>
    	<div class="mainTitle">
        	<p class="title">专栏</p>
            <span class="more"></span>
        </div>
        <section>
            <img src="https://y.gtimg.cn/music/common/upload/t_musicmall_focus/124141.jpg" alt="">
            <p>陈粒在蓬莱</p>
        </section>
        <section class="left">
            <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/124253.jpg" alt="">
            <p>中年贾跃亭和朴树，都在为钱奔波</p>
        </section>
        <section class="bottom">
            <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/124060.jpg" alt="">
            <p>歌都不会唱当什么超级英雄</p>
        </section>
        <section class="left bottom">
            <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/124219.jpg" alt="">
            <p>我欲渡你成佛，却被你渡成魔</p>
        </section>
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
div{
	overflow: hidden;
}
.mainTitle {
    position: relative;
}

.more {
    width: 40px;
    height: 40px;
    position: absolute;
    display: block;
    top: 4px;
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
section{
    width: 50%;
    float: left;
    margin-top: 4px;
}
section p{
    font-size: 12px;
    line-height: 14px;
    display: block;
    height: 16px;
}
section img{
    width: 100%;
}
.bottom{
    margin-bottom: 68px;
}
</style>
