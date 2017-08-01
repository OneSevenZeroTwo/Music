<template>
	<div>
		<div class="header">
			<div class="top">
				<div @click="fh"></div>
				<p>搜索</p>
			</div>
			<div class="bottom">
				<form action="">
					<input class="ecss" v-model="ssgq" type="text" placeholder="歌手/歌名/拼音" />
					<a class="tss" @click="huoqu" href="#/search/keywordSearch">搜索</a>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				ssgq:null,
			}
		},
		methods:{
			fh(){
				history.go(-1);
			},
			huoqu(){
				this.$store.dispatch('setgq',this.ssgq);
			}
		}
	}
</script>

<style scoped lang="less">
	.header {
		margin-top: 102px;
		.top {
			width: 100%;
			overflow: hidden;
			position:fixed;
			z-index: 200;
			top: 48px;
			left: 0;
			background: white;
			border-bottom: 1px solid #e5e5e5; 
			div {
				float: left;
				width: 10%;
				height: 54px;
				background: url(../../img/goback.png) no-repeat center;
				background-size: 16px 26px;
			}
			p {
				float: left;
				width: 80%;
				line-height: 54px;
				font-family: Microsoft Yahei;
				font-size: 18px;
				text-align: center;
			}
		}
		.bottom {
			background: #fbfbfb;
			padding: 4%;
			form {
				width: 100%;
				overflow: hidden;
				input {
					float: left;
					width: 80%;
					background: white url(../../img/search_icon.png) no-repeat left center;
					background-size: 22px 36px;
					height: 36px;
					border: 1px solid #e5e5e5;
					border-radius: 5px;
					margin-right: 2%;
					text-indent: 25px;
					font-size: 18px;
				}
				a {
					float: left;
					text-align: center;
					line-height: 37px;
					width: 18%;
					height: 37px;
					background: #e5e5e5;
					border: none;
					border-radius: 5px;
					font-size: 18px;
					font-family: Microsoft Yahei;
					color: #959595;
				}
			}
		}
	}
</style>