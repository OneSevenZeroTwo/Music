<template>
    <div>
        <div class="songlists-hot">
            <h2>热门歌单</h2>
            <div class="ul row">
                <div class="li" v-for="(n , index) in info" track-by="$index" :key="n.id">
                    <div class="info">
                        <img v-lazy="n.imgurl" >
                        <div class="playNum">
                            <i class="iconfont icon-ear"></i> {{n.playcount}}
                        </div>
                        <span class="btn-play iconfont icon-play" @click="setImg(n.imgurl,n.songs)">
                            
                        </span>
                    </div>
                    <div class="text">
                        <div class="type">
                            {{n.username}}
                        </div>
                        <div class="title">
                            {{n.specialname}}
                        </div>
                    </div>
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
                info: ''
            }
        },
        methods: {
            setImg(imgUrl,songsPlay) {
                this.$store.dispatch('setImg', [imgUrl,true]);
                this.$store.dispatch('setSongs',songsPlay);
            }
        },
        mounted() {
            axios.get('https://bird.ioliu.cn/v1?url=http://m.kugou.com/plist/index&json=true')
                .then((response) => {
                    this.info = response.data.plist.list.info.map(function(item) {
                        item.imgurl = item.imgurl.replace('{size}', '400')
                        return item
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
}
</script>
<style scoped>
.songlists-hot {
    background: #fff;
    margin-top: 10px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
}

.songlists-hot h2 {
    width: 100%;
    height: 38px;
    line-height: 38px;
}
h2{
    margin-left: 8px;
}
.ul {
    flex: 1;
    margin-left: 10px;
}

.li {
    width: 48%;
    height: 230px;
    margin-top: 10px;
}


/*图片里面的样式*/

.li .info {
    width: 166.91px;
    height: 166.91px;
    position: relative;
}

.li .info img {
    width: 100%;
    height: 100%;
    display: block;
}

.li .info .playNum {
    font-size: 10px;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
}


/*简要描述样式*/

.text {
    margin-top: 5px;
}

.text .type {
    text-align: left;
    height: 18px;
    line-height: 18px;
    color: #999;
}

.icon-ear {
    font-size: 18px;
}


/*播放按钮*/

.btn-play {
    width: 40px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
    background-color: rgba(0, 0, 0, .3);
    -webkit-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    bottom: 3px;
    right: 4px;
    z-index: 0;
}

.icon-play:before {
    position: absolute;
    z-index: 1;
    left: 7px;
    top: -1px
}
.title{
    background-color: rgba(0,0,0,0)
}
</style>
