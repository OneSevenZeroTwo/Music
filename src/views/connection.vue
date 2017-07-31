<template>
    <div>
        <div class="topbar">
            <span>bilibili客服</span>
        </div>
        <section class="msgContainer">
            <ul class="msg">
                <li class="answer"><span>bilibili软萌妹子为您服务</span></li>
                <!-- <li class="ask"><span></span></li> -->
            </ul>
        </section>
        <section class="sendComment">
            <input type="text" placeholder="欢迎来撩" value="">
            <button @click="send">发送</button>
        </section>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
            return {

            }
        },
        methods: {
            send() {
                var askSpan = document.createElement('span');
                var askLi = document.createElement('li');
                var Ul = document.getElementsByClassName('msg')[0];
                askLi.classList.add("ask");
                Ul.appendChild(askLi);
                askLi.appendChild(askSpan);
                askSpan.innerText = document.getElementsByTagName('input')[0].value;
                // "http://www.tuling123.com/openapi/api?key=f34ac5e4a62f423fb7638f65ecc97e4d&info=" + this.ask
                var self = this;
                axios.get('http://www.tuling123.com/openapi/api?key=f34ac5e4a62f423fb7638f65ecc97e4d', {
                        params: {
                            info: document.getElementsByTagName('input')[0].value
                        }
                    })
                    .then(function(response) {
                        //self.answer = response.data;
                        var answerSpan = document.createElement('span');
                        var answerLi = document.createElement('li');
                        Ul.appendChild(answerLi);
                		answerLi.classList.add("answer");
                        answerLi.appendChild(answerSpan);
                        answerSpan.innerText = response.data.text;
                        document.getElementsByTagName('input')[0].value = "";
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
}
</script>
<style scope>
ul li {
    list-style: none;
}

.ask span {
    display: inline-block;
    padding: 10px;
    line-height: 30px;
    background-color: #eee;
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 8px;
}

.answer{
    overflow: hidden;
}

.answer span {
    display: inline-block;
    padding: 10px;
    float: right;
    line-height: 30px;
    background-color: #eee;
    margin-right: 10px;
    margin-top: 20px;
    border-radius: 8px;
    margin-left: 10px;
}

.msgContainer {
    margin-top: 48px;
}

.topbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fc378c;
    height: 48px
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
</style>
