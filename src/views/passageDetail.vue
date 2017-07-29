<template>
    <div v-if="data">
        <h4>{{data.title}}</h4>
        <section class="top">
	        <img :src="data.imgurl" alt="">
	        <p class="subtitle">阅读:{{data.id}}</p>
	        <time>{{data.eiditetime}}</time>
	        <span class="focus" @click="">关注</span>  	
        </section>
        <p class="author">文/{{data.author}}</p>
        <section class="bottom">
        	<p class="content">{{data.mainContent}}</p>
        </section>
    </div>
</template>
<script>
import axios from "axios"

export default {
    data() {
            return {
            	data:null,
            	word:['关注','已关注']
            }
        },
        mounted() {
            var id = this.$route.params.id * 1;
            console.log(this.$route.params.id);
            var self = this;
            axios.get('http://localhost:8008/passage', {
                    params: {
                        id: id
                    }
                })
                .then(function(response) {
                    self.data = response.data[0];
                    console.log(response.data[0]);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        methods:{
        	focusStatus(){

        	}
        }
}
</script>
<style scoped>
	div{
		width: 100%;
		height: 100%;
		padding:20px;	
	}
	h4{
		margin-top: 30px;
		width: 100%;
		text-align: center;
		font-size: 24px;
		font-weight: normal;
	}
	p{
		text-align: justify;
		word-wrap: break-word;
	}
	.focus{
		position: absolute;
		display: block;
		width: 40px;
		height: 26px;
		line-height: 26px;
		border:1px solid #ddd;
		text-align: center;
		right:0;
		top:8px;
	}
	.author{
		line-height: 60px;
		font-weight: bold;
	}
	.top{
		margin-top: 10px;
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	.top img{
		float: left;
		width: 40px;
	}
	.top p{
		margin-left: 50px;
	}
	.top time{
		color: #ddd;
		font-size: 12px;
		margin-left: 10px;
		line-height: 12px;
	}
</style>
