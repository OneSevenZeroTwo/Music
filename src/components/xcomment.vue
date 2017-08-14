<template>
    <div :style="'margin-top:'+screenHight+'px'" :show="showComment" class="com_container">
        <p class="title">最新评论<span style="margin-left:8px">{{newArr.length}}</span></p>
        <span class="back" @click="hideComment"></span>
        <div class="main">
            <section class="newData" v-if="newComment" v-for="n in newComment">
                <div class="top">
                    <span class="head">
                        <img :src="n.imgurl" alt="" >
                    </span>
                    <p class="author">{{n.author}}</p>
                    <p class="editetime">{{n.editetime}}</p>
                    <span class="sendReply"></span>
                </div>
                <p class="comment_content">{{n.content}}</p>
                <div class="reply">
                </div>
            </section>
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
            <input type="text" placeholder="发表评论" value=''>
            <button @click="send">发表</button>
        </section>
        <section class="alert">
            <div class="js_dialog" id="iosDialog2" v-show="isShowAlert">
                <div class="weui-mask" @click="hideAlert"></div>
                <div class="weui-dialog">
                    <div class="weui-dialog__bd">发表评论前请先登录</div>
                    <div class="weui-dialog__ft">
                        <a href="#/login" class="weui-dialog__btn weui-dialog__btn_primary">登录</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
// import $ from 'jquery'

export default {
    data() {
            return {
                screenHight: null,
                //isShow:false
                isClick: false,
                comData: null,
                isShowAlert: false,
                // 定义自定义指令的绑定值
                ifUpdate: false,
                newArr: []
            }
        },
        mounted() {
            this.screenHight = window.screen.availHeight;
            var self = this;
            axios.get('../static/data/comment.json')
                .then(function(response) {
                    var commentCount = self.$route.params.id * 1
                    self.comData = response.data.RECORDS.splice(commentCount, 10);
                    console.log(self.comData);
                    self.ifUpdate = false;
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
            },
            newComment() {
                return this.$store.state.newComment;
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
            },
            send() {
                var cookie = com.getCookie('tel');
                //
                if (cookie == '') {
                    this.isShowAlert = true;
                } else {
                    //console.log(this.ifUpdate);
                    this.ifUpdate = true;
                    var date = new Date();
                    var now = com.currentTime(date);
                    var self = this;
                    //var newData = [];
                    axios.get('http://localhost:8008/savecomment', {
                            params: {
                                imgurl: '../../static/images/404.png',
                                author: com.getCookie('tel'),
                                editetime: now,
                                content: document.getElementsByTagName('input')[0].value
                            }
                        })
                        .then(function(response) {
                            self.newArr.push(response.data[0]);
                            self.$store.state.newComment = self.newArr;
                            self.$store.state.newCommentCount = self.newArr.length;
                            console.log(self.$store.state.newCommentCount);
                            document.getElementsByTagName('input')[0].value = '';
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            },
            hideAlert() {
                this.isShowAlert = false;
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
    position: absolute;
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
    margin-bottom: 20px;
}

.top {
    overflow: hidden;
}

.top .head {
    border-radius: 50%;
    overflow: hidden;
    float: left;
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    text-align: center;
}

.head img {
    height: 100%;
}

.editetime,
.author {
    margin-left: 50px;
}

.editetime {
    font-size: 12px;
    color: #ddd;
}

.comData {
    margin-top: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding-bottom: 10px;
}

.comment_content {
    margin-top: 4px;
    text-align: justify;
}

.main {
    margin-bottom: 50px;
}
</style>
