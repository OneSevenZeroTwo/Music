<template>
	<div class="r_banner">
		<div class="title">
			<div @click="goBack"></div>
			<p v-text="xinfo.rankname"></p>
		</div>
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

<style lang="less">
	.r_banner {width: 100%;height: 250px;overflow: hidden;}
	.r_banner img{width: 100%;margin-top: -82px;}
	.title{
		overflow: hidden;
		position: fixed;
		z-index: 10000;
		width: 100%;
		background: -webkit-linear-gradient(top,rgba(0,0,0,.6),transparent);
		div{
			float: left;
			width: 10%;
			height: 60px;
			background: url(../../img/goback_1.png) no-repeat center;
		}
		p{
			display: inline-block;
			float: left;
			width: 80%;
			height: 60px;
			text-align: center;
			line-height: 60px;
			font-size: 20px;
			font-family: Microsoft Yahei;
			color: white;
		}
	}
</style>