<template>
    <div :style="'margin-top:'+screenHight+'px'" :show="showComment" class="com_container">
        <p class="title">最新评论</p>
        <span class="back" @click="hideComment"></span>
        <div class="main">
	        <section v-for="c in comData" class="comData">
	            <div class="top">
	            	<span class="head">
	                	<img :src="c.imgurl" alt="">
	            	</span>
	                <p class="author">{{c.author}}</p>
	                <p class="editetime">{{c.editetime}}</p>
	                <span class="sendReply"></span>
	            </div>
	            <p class="comment_content">{{c.content}}</p>
	            <div class="reply">
	            </div>
	        </section>
        </div>
        <section class="sendComment" v-show='!screenHight'>
            <input type="text" placeholder="发表评论">
            <button>发表</button>
        </section>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
            return {
                screenHight: null,
                //isShow:false
                isClick: false,
                comData:null
            }
        },
        mounted() {
            this.screenHight = window.screen.availHeight;
            console.log(this.$store.state.commentNum);
            var self = this;
            axios.get('http://localhost:8008/getcomment', {
                    params: {
                        com: this.$store.state.commentNum
                    }
                })
                .then(function(response) {
                    self.comData = response.data;
                    console.log(self.comData);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        computed: {
        	// 点击时出现评论页面
            showComment() {
                if (this.$store.state.showComment == true) {
                    this.screenHight = 0;
                } else {
                    this.screenHight = window.screen.availHeight;
                }
            }
        },
        methods: {
            hideComment() {
                this.$store.state.showComment = false;
                this.$store.state.isShowContainer = true;
                console.log(this.$store.state.isShowContainer);
            },
            buttonClick() {
                this.isClick = true;
            }
        }
}
</script>
<style scoped>
.com_container {
    padding: 16px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    transition: all 0.2s;
    overflow: auto;
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

.sendComment {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.sendComment input {
    float: left;
    margin-top: 14px;
    width: 80%;
    padding-left: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-left: 10px
}

.sendComment button {
    float: left;
    margin-top: 14px;
    border: 1px solid #ddd;
    margin-left: 6px;
    width: 50px;
    border-radius: 4px;
}

.title {
    margin-top: 50px;
}
.top{
	overflow: hidden;
}
.top .head{
	border-radius: 50%;
	overflow: hidden;
	float: left;
	display: inline-block;
	width: 40px;
	height:40px;
	border:1px solid #ddd;
	text-align: center;
}
.head img{
	height: 100%;
}
.editetime,.author{
	margin-left: 50px;
}
.editetime{
	font-size: 12px;
	color:#ddd;
}
.comData{
	margin-top: 20px;
	border-bottom: 1px solid rgba(0,0,0,.1);
	padding-bottom: 10px;

}
.comment_content{
	margin-top: 4px;
	text-align: justify;
}
.main{
	margin-bottom: 50px;
}
</style>
