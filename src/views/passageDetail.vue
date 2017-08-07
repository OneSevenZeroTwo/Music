<template>
    <div class="container" v-if="data">
        <div class="mainContainer" v-if="isShowContainer">
            <a href="#/app/newSong" @click="historyHight"><span class="back"></span></a>
            <h4>{{data.title}}</h4>
            <section class="top">
                <img :src="data.imgurl" alt="">
                <p class="subtitle">阅读:{{data.id}}</p>
                <time>{{data.eiditetime}}</time>
                <span class="focus" @click="focusStatus">{{word[num]}}</span>
            </section>
            <p class="author">文/{{data.author}}</p>
            <section class="bottom">
                <p class="content">{{data.mainContent}}</p>
            </section>
            <section class="comment">
                <div>
                    <span></span>
                    <div class="sendComment">
                        <input type="text" v-show="">
                        <span @click="">评论</span>
                        <i class="commentIcon" @click="watchComment"></i>
                        <i class="commentNum">{{data.id}}</i>
                    </div>
                    <span class="share"></span>
                </div>
            </section>
        </div>
        <xcomment></xcomment>
    </div>
</template>
<script>
import axios from "axios"
import xcomment from '../components/xcomment.vue'
import $ from 'jquery'

export default {
    components: {
        xcomment
    },
    data() {
        return {
            data: null,
            word: ['关注', '已关注'],
            num: 0,
            newCommentCount: [],
            height:''
        }
    },
    updated() {
        // 生命周期，在updated才会更新
        //window.scrollTo(0, 200);
        var height = JSON.parse(com.getCookie('height'));
        for(var i = 0;i<height.length;i++){
        	if(height[i].id == this.$store.state.commentNum){
        		window.scrollTo(0,height[i].height);
        	}
        }
    	//window.scrollTo(0,300);
    },
    mounted() {
        var id = this.$route.params.id * 1;
        console.log(this.isShowContainer);
        var self = this;
        axios.get('../../static/data/passage.json')
            .then(function(response) {
                self.data = response.data.RECORDS[9-id];
                self.$store.state.commentNum = self.data.id;
                console.log(self.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    methods: {
        focusStatus(num) {
            if (this.num == 0) {
                this.num = 1
            } else {
                this.num = 0;
            }
        },
        showInput() {
            this.isShowInput = true;
        },
        watchComment() {
            this.$store.state.showComment = true;
            this.$store.state.isShowContainer = false;
            //this.isShowContainer = this.$store.state.isShowContainer;
        },
        historyHight() {
        	var obj = {"id":this.data.id,"height":window.scrollY};
        	this.$store.state.arrHight.push(obj);
        	com.setCookie('height',JSON.stringify(this.$store.state.arrHight));
        }
    },
    computed: {
        isShowContainer() {
            return this.$store.state.isShowContainer
        },
        /*newCommentCount() {
            return this.$store.state.newCommentCount
        }*/
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    height: 100%;
    padding: 20px;
}

h4 {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: normal;
}

p {
    text-align: justify;
    word-wrap: break-word;
}

.focus {
    position: absolute;
    display: block;
    padding: 2px 4px;
    border: 1px solid #ddd;
    text-align: center;
    right: 0;
    top: 8px;
    border-radius: 4px;
}

.author {
    line-height: 60px;
    font-weight: bold;
}

.top {
    margin-top: 10px;
    position: relative;
    width: 100%;
    overflow: hidden;
}

.top img {
    float: left;
    width: 40px;
}

.top p {
    margin-left: 50px;
}

.top time {
    color: #ddd;
    font-size: 12px;
    margin-left: 10px;
    line-height: 12px;
}

a {
    display: block;
    width: 28px;
    height: 28px;
}

.back {
    background-image: url('../assets/arrow.png');
    background-repeat: no-repeat;
    display: block;
    width: 28px;
    height: 28px;
    background-size: 30px 30px;
    background-position: center;
    position: fixed;
    top: 20px;
    left: 10px;
    background-color: #fff;
    z-index: 10;
}

.comment {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
}

.sendComment {
    position: relative;
    margin-top: 12px;
    margin-left: 20px;
    box-shadow: 0 0 0 0 #fff;
}

.sendComment span {
    float: left;
    margin-left: 10px;
}

.sendComment input {
    float: left;
    border-radius: 4px;
    outline: none;
    border: 1px solid #ddd;
    padding-left: 4px;
    transition: all 2s;
}

.commentIcon {
    background-image: url('../assets/comment.png');
    background-repeat: no-repeat;
    display: block;
    width: 28px;
    height: 28px;
    background-size: 24px 24px;
    background-position: center;
    background-color: #fff;
    float: left;
    margin-left: 10px;
}

.commentNum {
    font-style: normal;
    margin-left: 4px;
}

.share {
    background-image: url('../assets/share.png');
    background-repeat: no-repeat;
    display: block;
    width: 28px;
    height: 28px;
    background-size: 34px 34px;
    background-position: center;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #fff;
}
</style>
