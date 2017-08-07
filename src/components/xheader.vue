<template>
	<div>
		<div class="topbar">
			<span>bilibili音悦台</span>
		</div>
		<span class="back" @click="changeDirection()"><i class="material-icons contentList">&#xE241;</i></span>
		<span class="search" @click="search"><i class="material-icons contentList">&#xE8B6;</i></span>
	</div>
</template>
<script type="text/javascript">
	module.exports = {
		computed: {
			title() {
				//暴力获取状态
				//this.$store.state.title
				return this.$store.getters.getCount
			},
			sildeShow(){
				return this.$store.state.sildeShow;
			}
		},
		mouted(){
			this.$store.state.sildeShow = false;
		},
		methods: {
			changeDirection() {
				this.$store.state.direction = "right";
				//console.log(this.$store.state.direction)
				this.$store.state.sildeShow = true;
			},
			search(){
				window.location.href = '#/search'
			}
		}
	}
</script>

<style scoped>
	.contentList {
		width: 100%;
		height: 100%;
		color: #fff;
		font-size: 32px;
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
	
	.search {
		display: block;
		position: fixed;
		/*width: 30px;
		height: 30px;
		background-color: #fff;*/
		top: 9px;
		right: 9px;
		z-index: 200;
	}
</style>
