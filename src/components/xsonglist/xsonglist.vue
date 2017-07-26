<template>
    <div>
        <div class="songlists-hot">
            <h2>热门歌单</h2>
            <div class="ul row">
                <div class="li" @click="songs_list()" v-for = "(n , index) in info" track-by="$index" :id="index">
                    <div class="info">
                        <img v-lazy="n.imgurl">
                        <div class="playNum">
                            <i class="ear">图标</i>
                            {{n.playcount}}
                        </div>
                        <span class="playAll"></span>
                    </div>
                    <div class="text">
                        <dit class="type">
                            {{n.username}}
                        </dit>
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
                info:''
            }
        },
        mounted() {
            axios.get('http://localhost:6565/songlist')
                 .then((response) => {
                   this.info = response.data.plist.list.info.map(function(item){
                       item.imgurl =  item.imgurl.replace('{size}','400')
                        return item
                   });
                   console.log(this.info)

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
    padding: 0px 15px 0;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
}

.songlists-hot h2 {
    width: 100%;
    height: 38px;
    line-height: 38px;
}

.ul {
    flex: 1;
}

.li {
    width: 48%;
    height: 230px;
    margin-top: 10px;
}
/*图片里面的样式*/
.li .info{
    width: 166.91px;
    height: 166.91px;
    position: relative; 
}
.li .info img{
    width: 100%;
    height: 100%;
    display: block;
}
.li .info .playNum{
    font-size: 10px;
    color: #fff;
    position: absolute;
    bottom:0;
    left:10px;
}
/*简要描述样式*/
.text {
    margin-top: 5px;
}
.text .type{
    text-align: left;
    height: 18px;
    line-height: 18px;
    color:#999;
}
</style>
