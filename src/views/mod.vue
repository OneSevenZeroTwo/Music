<template>
    <div v-if="singleComment">
        标题：
        <input type="text" v-model="singleComment.title"> 类目：
        <input type="text" v-model="singleComment.subtitle"> 等级：
        <input type="text" v-model="singleComment.rating">
        <br/> 内容：
        <textarea name="" id="" v-model="singleComment.content"></textarea>
        <button><a href="#/db/" @click="showAlert">保存</a></button>
        <!-- <button @click="showAlert">保存<a href="#" ></a></button> -->
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
            return {
                singleComment: null
            }
        },
        mounted() {
            console.log(this.$route.params.id * 1);
            var self = this;
            axios.get('http://localhost:8008/mod', {
                    params: {
                        id: this.$route.params.id * 1
                    }
                })
                .then(function(response) {
                    self.singleComment = response.data[0];
                    console.log(self.singleComment);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        methods:{
        	showAlert(){
        		var self = this;
        		axios.get('http://localhost:8008/save', {
                    params: {
                    	id:self.singleComment.id,
                        title:self.singleComment.title,
                        subtitle:self.singleComment.subtitle,
                        rating:self.singleComment.rating,
                        content:self.singleComment.content
                    }
                })
                .then(function(response) {
                    self.singleComment = response.data[0];
                    console.log(self.singleComment);
                })
                .catch(function(error) {
                    console.log(error);
                });
                console.log(this.singleComment.content);
        		alert('保存成功')
        	}
        }
}
</script>
<style scoped>
div {
    margin-top: 20px;
    margin-left: 20px;
}

textarea {
    width: 500px;
    height: 500px;
    margin-top: 20px;
}

button {
    border: 0;
    background-color: #ddd;
    width: 40px;
    height: 30px;
    border-radius: 6px;
}
</style>
