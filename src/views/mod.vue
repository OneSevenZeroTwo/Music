<template>
	<div>
		标题：<input type="text">

		类目：<input type="text">

		等级：<input type="text"><br/>
		
		内容：<textarea name="" id=""></textarea>
	</div>
</template>

<script>
	export default{
		mounted(){
			console.log(this.$route.params.id);
		}
	}
</script>

<style scoped>
	div{
		margin-top: 20px;
		margin-left: 20px;
	}
	textarea{
		width: 500px;
		height: 500px;
		margin-top: 20px;
	}
</style>