<template>
    <div>
    	<div class="mainTitle">
        	<p class="title">独家专区</p>
            <span class="more"></span>
        </div>
        <section>
            <img src="//shp.qpic.cn/qqvideo_ori/0/c0024iakzyd_360_204/0" alt="">
            <p>{{column[0].filename}}</p>
        </section>
        <section class="left">
            <img src="//shp.qpic.cn/qqvideo_ori/0/g00243r2wk7_360_204/0" alt="">
            <p>{{column[1].filename}}</p>
        </section>
        <section>
            <img src="//shp.qpic.cn/qqvideo_ori/0/a0024l5a58w_360_204/0" alt="">
            <p>{{column[2].filename}}</p>
        </section>
        <section class="left">
            <img src="//shp.qpic.cn/qqvideo_ori/0/b0024xgh79z_360_204/0" alt="">
            <p>{{column[3].filename}}</p>
        </section>
    </div>
</template>
<script>
import axios from 'axios'


export default {
    data() {
            return {
                column: null
            }
        },
        mounted() {
            axios.get('/music/?json=true')
                .then((response) => {
                    this.column = response.data.data.splice(11, 4);
                    console.log(this.column);
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
    top: 0px;
    right: -2px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/more.png');
}

section {
    width: 49.6%;
    float: left;
}

.left {
    margin-left: 3px;
}

.title {
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    margin-bottom: 4px;
    margin-top: 4px;
}

img {
    height: 100%;
    width: 100%;
}
</style>
