<template>
	<div>
		<p class="title">热门推荐</p>
		<section>
			<img src="http://musicdata.baidu.com/data2/music/9FD2B4CEA26DC1FDAB240148BEE4F3FD/252052130/252052130.jpg@s_0,w_120" alt="">
			<p>{{ hotList[0].filename | shortTitle }}</p>
		</section>
		<section class="middle">
			<img src="http://musicdata.baidu.com/data2/pic/246709341/246709341.jpg@s_0,w_120" alt="">
			<p>{{ hotList[1].filename | shortTitle }}</p>
		</section>
		<section>
			<img src="http://musicdata.baidu.com/data2/pic/86533131/86533131.jpg@s_0,w_120" alt="">
			<p>{{ hotList[2].filename | shortTitle }}</p>
		</section>
		<section>
			<img src="http://musicdata.baidu.com/data2/music/B48E28BBBC28AFE8AE79C64024C8502C/252167976/252167976.jpg@s_0,w_120" alt="">
			<p>{{ hotList[3].filename | shortTitle }}</p>
		</section>
		<section class="middle">
			<img src="http://musicdata.baidu.com/data2/music/C297BEEC499DF4E5E4ADB04C04B65D36/252491912/252491912.jpg@s_0,w_120" alt="">
			<p>{{ hotList[4].filename | shortTitle }}</p>
		</section>
		<section>
			<img src="http://musicdata.baidu.com/data2/music/E8CD9B931A19EAE31B3B8A4FBBB7ED62/252052070/252052070.jpg@s_0,w_120" alt="">
			<p>{{ hotList[5].filename | shortTitle }}</p>
		</section>
	</div>
	
</template>
<script>
	import axios from 'axios'


	export default {
		data() {
			return {
				hotList:[],	
			}
		},
		mounted(){
			axios.get('http://localhost:6565/newSong')
		      .then((response) => {
		        this.hotList = response.data.data.splice(0,6);
		        console.log(this.hotList)
		      })
		      .catch((error) => {
		        console.log(error);
		    });
		},
		filters:{
			shortTitle(input){
				if(input.length>15){
					return input.slice(0,15)+'...';
				}else{
					return input
				}
			}
		}
	}
</script>
<style scoped>
	div{overflow: hidden;}		
	img{border:0;text-align: center;width: 100%;}
	.middle{margin:0 4px;}
	.title{width: 100%;text-align: center;line-height: 30px;font-size: 16px;margin-bottom: 4px;}
	section{width: 32.6%;float: left;}
	section p{font-size: 14px;}
</style>