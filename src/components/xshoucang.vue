<template>
	<div>
		<div class="topbar">
			<span>歌手收藏</span>
		</div>
		
	</div>
</template>
<script>
	export default {
		data() {
			return {
				singer:''
			}
		},
		computed:{
			singer() {
				return this.$store.state.singername
			}
		},
		methods: {
			
		}
	}
</script>

<style>
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
</style>