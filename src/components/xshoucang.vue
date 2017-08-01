<template>
	<div>
		<div>
			<div class="topbar">
				<span>我的收藏</span>
			</div>
			<span class="back"><i class="material-icons contentList">&#xE314;</i></span>
		</div>
		<a href="javascript:;" v-for="" class="weui-media-box weui-media-box_appmsg save_singerList">
			<div class="weui-media-box__hd">
				<img class="weui-media-box__thumb" src="" alt="">
			</div>
			<div class="weui-media-box__bd">
				<h4 class="weui-media-box__title">song</h4>
				<p class="weui-media-box__desc"><span>singer: </span> <span>8888</span></p>
			</div>
		</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				telephone: '',
				singername: ''
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
	.topbar {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		background-color: #fc378c;
		height: 48px
	}
	
	.topbar span {
		text-align: center;
		line-height: 48px;
		display: block;
		width: 100%;
		height: 100%;
		font-size: 20px;
		color: #fff;
	}
	
	.back {
		display: block;
		position: fixed;
		/*width: 30px;
		height: 30px;
		background-color: #fff;*/
		top: 9px;
		left: 9px;
		z-index: 200;
	}
	.contentList {
		width: 100%;
		height: 100%;
		color: #fff;
		font-size: 32px;
	}
	.save_singerList{
		margin-top: 50px;
		padding: 2px 5px;
		color: #000000;
		font-size: 20px;
		border-bottom: 1px solid #DCDCDC;
	}
</style>