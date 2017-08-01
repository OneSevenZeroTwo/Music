<template>
	<div class="leftContent" v-show="sildeShow" :class="{'silde-right':direction=='right','silde-left':direction=='left'}">
		<form id="uploadForm">
			<input style="display: none;" type="file" name="logo" multiple="multiple" />
			<div class="headcon">
				<img @click="uploadPic()" class="headpic" src="../../static/images/404.png">
			</div>
		</form>
		<div class="nickname">{{nickname}}</div>
		<section class="list">
			<div class="index-page">
				<a @click="changeDirection()" class="sildeLeft " href="javascript:void(0)">
					<i class="material-icons">&#xE815;</i> 
					<p>首页</p>
				</a>
			</div>
			<div class="mine-page">
				<a class="sildeLeft " href="#/shoucang">
				<i class="material-icons">&#xE553;</i> {{savePage?'':'收藏'}}</a>
			</div>
			<div class="log-reg">
				<a class="sildeLeft" href="#/login" @click="clearCookie">
					<i class="material-icons" >&#xE853;</i> 
					<p>{{logReg?'退出':'登录'}}</p> 
				</a>
			</div>
			<div class="ask-help">
				<a class="sildeLeft" href="javascript:void(0)">
					<i class="material-icons" style="margin-left:2px">&#xE0DD;</i> 
					<p>联系客服</p>
				</a>
			</div>
			<div class="exit_silde_page">
				<a @click="changeDirection()" class="exit_silde" href="javascript:void(0)">
				<i class="material-icons">&#xE14C;</i></a>
			</div>
		</section>
	</div>

</template>

<script>
	export default {
		data(){
			return{
				logReg:false,
				nickname:null,
				savePage:false
			}
		},
		computed: {
			direction() {
				return this.$store.state.direction;
			},
			sildeShow(){
				return this.$store.state.sildeShow;
			}
		},
		mounted(){
			this.$store.state.sildeShow = false;
		},
		methods: {
			changeDirection() {
				this.$store.state.direction = "left";
				//console.log(this.$store.state.direction)
			},
			clearCookie(){
				this.logReg = false;
				com.setCookie('tel','');
			}
		},
		mounted(){
			var cookie = com.getCookie('tel');
			console.log(com.getCookie('tel'));
			if(cookie.length >0){
				this.logReg = true;
			}else{
				this.logReg = false;
			}
			this.nickname = com.getCookie('tel');
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
	
	.list div:nth-child(1) {
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
	.list div a{
		overflow: hidden;
	}
	i{
		float: left;
		display: inline-block;	
	}
	p{
		margin-left: 4px;
		float: left;
		margin-top: 2px;
	}
	.nickname{
		width: 100%;
		text-align: center;
		color: #fff;
	}
</style>