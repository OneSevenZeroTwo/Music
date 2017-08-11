<template>
	<div class="r_banner">
		<div class="title">
			<div @click="goBack" class="back"></div>
			<p v-text="">爱乐</p>
		</div>
		<span class="bigtitle">爱乐</span>
		<img :src=xinfo.banner7url alt="" />
	</div>
</template>

<script>
export default {
	props: ["xinfo"],
	methods:{
		goBack(){
			history.go(-1);
		}
	}
}
</script>

<style lang="less" scoped>
	.r_banner {width: 100%;height: 250px;overflow: hidden;}
	.r_banner img{width: 100%;margin-top: -20%;}
	.title{
		overflow: hidden;
		position: fixed;
		z-index: 10000;
		width: 100%;
		background: -webkit-linear-gradient(top,rgba(0,0,0,.6),transparent);
		.back{
			float: left;
			width: 15%;
			height: 44px;
			background-size: 80px 80px;
			background: url(../../assets/back.png) no-repeat center;
			backgroud-position:center;
		}
		p{
			display: inline-block;
			float: left;
			width: 70%;
			height: 48px;
			text-align: center;
			line-height: 48px;
			font-size: 20px;
			font-family: Microsoft Yahei;
			color: white;
		}
	}
	.bigtitle{
		display: block;
		width: 80px;
		line-height: 40px;
		position: absolute;
		transform:translate(-50%,-50%);
		top:12%;
		left:50%;
		background-color: #fff;
		text-align: center;
		font-size: 24px;
		border-radius:10px;
		color:#ff4081;
	}
</style>