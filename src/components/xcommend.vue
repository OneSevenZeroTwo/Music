<template>
    <div>
        <div class="mainTitle">
            <p class="title">每日为你推荐30首</p>
            <span class="more"></span>
        </div>
        <section>
            <img src="http://musicdata.baidu.com/data2/pic/3e45432c82692d9c2bfa776e9507c285/544242028/544242028.jpg@s_0,w_180" alt="">
            <div class="left">
                <h4>{{commend[0].remark}}</h4>
                <p>{{commend[0].filename | shortTitle}}</p>
            </div>
        </section>
        <section>
            <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000vxCRG30GnbT.jpg?max_age=2592000" alt="">
            <div class="left">
                <h4>{{commend[1].remark}}</h4>
                <p>{{commend[1].filename | shortTitle}}</p>
            </div>
        </section>
        <section>
            <img src="http://musicdata.baidu.com/data2/pic/73a3804e1b971cbebc63d99260278136/540058817/540058817.jpg@s_0,w_180" alt="">
            <div class="left">
                <h4>{{commend[2].remark}}</h4>
                <p>{{commend[2].filename | shortTitle}}</p>
            </div>
        </section>
        <section>
            <img src="http://musicdata.baidu.com/data2/pic/ecc06795d3e3879a5717ba93f5cf995e/261998351/261998351.jpg@s_0,w_180" alt="">
            <div class="left">
                <h4>{{commend[3].remark}}</h4>
                <p>{{commend[3].filename | shortTitle}}</p>
            </div>
        </section>
        <section>
            <img src="http://musicdata.baidu.com/data2/pic/8bace09eaa5d8860eb80fd5773d14d3c/540132627/540132627.jpg@s_0,w_180" alt="">
            <div class="left">
                <h4>{{commend[4].remark}}</h4>
                <p>{{commend[4].filename | shortTitle}}</p>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'


export default {
    data() {
            return {
                commend: null
            }
        },
        mounted() {
            axios.get('http://localhost:6789/newSong')
                .then((response) => {
                    this.commend = response.data.data.splice(6, 5);
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
.mainTitle {
    position: relative;
}
.more{
    width: 40px;
    height: 40px;
    position: absolute;
    display: block;
    top:340px;
    right:-2px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/more.png');
}
section {
    width: 100%;
    overflow: hidden;
    margin-top: 2px;
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
</style>
