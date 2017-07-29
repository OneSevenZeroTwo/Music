<template>
	<div id="zezhao" v-show="isShow">
		<div class="tu">
				<div class="top">
					<img :src="list" alt="" style="width: 100%;"/>
					<p class="name" >{{get}}</p>
				</div>
					
				
				<div class="details" style="margin-top:-6px; padding-top:20px;padding-bottom: 20px;">
					<p class="biao"><span class="setpan">{{xiang}}</span></p>
				</div>
				<div class="remove"><img src="../img/up1.png" alt="" @click="show"/></div>
		</div>
	</div>
</template>

<script>
	export default{
		
		props: ["list","get","xiang"],
		methods:{
			show(){
				this.$store.state.isshow = false
			}
		},
		computed:{
			isShow(){
				console.log("1");
				return this.$store.state.isshow;
			},
		}
	}
</script>

<style>
	#zezhao{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background-color: #999999;
		scrollbar-highlight-color: #333333;
	}
	#zezhao .tu{
		overflow: hidden;
		width: 100%;
		margin: auto;
		padding: 20px;
		
	}
	#zezhao .tu img{
		margin-top:10px;
		position: relative;
	}
	
	.name{
		position: absolute;
		width: 100%;
		color: white;
		padding-left:8%;
		left:0;bottom:6px;
		line-height: 50px;
		box-shadow:0px -40px 12px rgba(0,0,0,.1) inset; 
		
	}
	.bigimg::after{
		content: "";
		display: block;
		clear: both;
		height: 0;
		overflow: hidden;
		visibility: hidden;
	}
	.tu .details{
		
		height: 200px;
		width: 100%;
		background-color: #333333;
		/*margin-bottom: 20px;*/
	}
	.tu .details::after{
		content: "";
		display: block;
		clear: both;
		height: 0;
		overflow: hidden;
		visibility: hidden;
	}
	
	.tu .details .biao{
		color:white;
		width: 100%;
		word-break:break-all;
		overflow: hidden;
		height: 100%;
		overflow-y:visible;
		/*overflow-y: hidden;*/
		
		padding:10px;
	}
	.setpan{
		padding-top: 20px;
	}
	.remove img{
		width: 40px;
		height: 40px;
		display: block;
		margin: auto;
	}
	.top{
		position: relative;
	}
</style>