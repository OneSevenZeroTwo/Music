<template>
	<div>
		<section>
			<div class="play">
				<span></span>
				<h4></h4>
				<p></p>
				<i class="playButton"></i>
				<i class="more"></i>
			</div>
		</section>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.play{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 60px;
		background-color: #fff;
		box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
	}
	span{
		background-image: url('../assets/record.png');
		background-size: 50px 50px;
		display: block;
		background-position: center;
		width: 50px;
		height: 50px;
		background-repeat: no-repeat;
		position: absolute;
		top:5px;
		left: 8px;
		z-index: 100;
	}
	.playButton{
		background-image: url('../assets/play.png');
		background-size: 30px 30px;
		display: block;
		background-position: center;
		width: 50px;
		height: 50px;
		background-repeat: no-repeat;
		position: absolute;
		top:5px;
		right: 50px;
		z-index: 100;
	}
	.more{
		background-image: url('../assets/moreContent.png');
		background-size: 28px 28px;
		display: block;
		background-position: center;
		width: 50px;
		height: 50px;
		background-repeat: no-repeat;
		position: absolute;
		top:1px;
		right: 4px;
		z-index: 100;
	}
</style>