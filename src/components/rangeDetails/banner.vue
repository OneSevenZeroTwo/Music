<template>
	<div class="r_banner">
		<img :src=xinfo.banner7url alt="" />
	</div>
</template>

<script>
export default {
	props: ["xinfo"]
}
</script>

<style>
	.r_banner {margin-top: 46px;width: 100%;height: 250px;overflow: hidden;}
	.r_banner img{width: 100%;margin-top: -82px;}
</style>