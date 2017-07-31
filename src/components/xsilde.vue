<template>
	<div class="leftContent" :class="{'silde-right':direction=='right','silde-left':direction=='left'}">
		<form id="uploadForm">
			<input style="display: none;" type="file" name="logo" multiple="multiple" />
			<div class="headcon">
				<img @click="uploadPic()" class="headpic" src="../../static/images/404.png">
			</div>
		</form>
		<ul>
			<li class="index-page">
				<a @click="changeDirection()" class="sildeLeft " href="javascript:void(0)">
					<i class="material-icons">&#xE815;</i> 首页</a>
			</li>
			<li class="mine-page">
				<a class="sildeLeft " href="#/shoucang">
					<i class="material-icons">&#xE553;</i> {{savePage?'':'收藏'}} </a>
			</li>
			<li class="log-reg">
				<a class="sildeLeft" href="#/login">
					<i class="material-icons">&#xE853;</i> {{logReg?'已登录':'登录 / 注册'}} </a>
			</li>
			<li class="ask-help">
				<a class="sildeLeft" href="javascript:void(0)">
					<i class="material-icons">&#xE0DD;</i> 联系客服</a>
			</li>
			<li>
				<a @click="changeDirection()" class="exit_silde" href="javascript:void(0)">
					<i class="material-icons">&#xE5CB;</i></a>
			</li>
		</ul>
	</div>

</template>

<script>
	export default {
		data(){
			return{
				logReg:false,
				savePage:false
			}
		},
		computed: {
			direction() {
				return this.$store.state.direction;
				var cookies = document.cookie;
			}
		},
		methods: {
			changeDirection() {
				this.$store.state.direction = "left";
				//console.log(this.$store.state.direction)
				
			},
			uploadPic(){
				
			}

		}

	}
</script>

<style scoped>
	.headcon {
		width: 60px;
		height: 60px;
		margin: 20px 30%;
		color: #C0BFC4;
		border-radius: 50%;
		margin-bottom: 15px;
		background: rgba(255, 255, 255, .9);
	}
	
	.headpic {
		width: 100%;
		height: 100%;
	}
	
	.leftContent {
		width: 180px;
		height: 100%;
		margin-top: 48px;
		box-shadow: 1px 0 10px rgba(0, 0, 0, .8);
		position: fixed;
		background-color: black;
		z-index: 2;
		top: 0;
		left: 0;
	}
	
	li:nth-child(1) {
		margin-top: 15%
	}
	
	.sildeLeft {
		display: block;
		font-size: 18px;
		line-height: 20px;
		padding: 10px 20px;
		color: #C0BFC4;
	}
	
	@keyframes scalee {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	
	.silde-left:nth-child(0) {
		margin-top: 15px;
	}
	
	.silde-left {
		animation: moveLeft;
		animation-duration: 1s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	
	.silde-right {
		animation: moveRight;
		animation-duration: 1s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	
	@keyframes moveLeft {
		from {}
		to {
			transform: translateX(-200px);
		}
	}
	
	@keyframes moveRight {
		from {
			transform: translateX(-200px);
		}
		to {}
	}
	
	.exit_silde {
		font-size: 20px;
		color: #C0BFC4;
		position: absolute;
		bottom: 10%;
		left: 80%;
	}
</style>