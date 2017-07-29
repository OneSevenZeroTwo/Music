<template>
	<div>
	<mu-card-media :title="title" subTitle="粉丝：66.3万" style="height: 250px;overflow: hidden;">
		<img :src="bigimg"  @click="changeDirection()"  style="overflow: hidden;"/>
	</mu-card-media>
	<ul>
		<li>sdsd</li>
		<li>sdsd</li>
		<li>sdsd</li>
		<li>sdsd</li>
		<li>sdsd</li>
		<li>sdsd</li>
	</ul>
	<span class="back" @click="goback"><img src="../../img/goback_1.png" alt="" style="height: 30px;margin:0;padding: 0;"/></span>
	<xstom :list="bigimg" :get="title" :xiang="xiangxi"></xstom>
	</div>
	
</template>

<script>
	import axios from "axios";
	import xstom from "../xstom.vue";
	export default{
		data(){
				return {
					title:null,
					bigimg:null,
					getid:0,
					xiangxi:null,
					mylist:[],
					myname:[]
				}
			},
		methods: {
			
			sort: function() {

				var salf = this
				axios({
					url:"/music/singer/info/"+salf.getid+"&json=true",
					method: 'get'
				})
					.then((response) => {
						console.log(salf.getid);
//						console.log(response);
//						console.log("/music/singer/info/3060&json=true")
						salf.title = response.data.info.singername;
						var res = response.data.info.imgurl.replace('{size}','400');
						console.log(response);
						salf.xiangxi = response.data.info.profile;
//						console.log(salf.xiangxi)
						salf.bigimg = res;
						var arry = [];
						
						
						response.data.songs.list.forEach(function(item){
							console.log(item.filename.split('- ')[1])
							self.mylist = self.mylist.push(item.filename.split('- ')[0]);
							self.myname = self.myname.push(item.filename.split('- ')[1]);
//							 arry = arry.push()
						})
//						salf.mylist = response.data.songs.list
						console.log(salf.mylist,salf,myname)
						
					})
					.catch((error) => {
						console.log(error);
					});
			},
			goback:function(){
				history.back()
			},
			changeDirection:function(){
				console.log(this.$store)
				this.$store.state.isshow = true;
			}
		},
		mounted() {
			
			console.log(this.$route.params.id);
			this.getid = this.$route.params.id;
			console.log(this.getid);
			this.sort();
		},
		//拿到布尔值
		
		
		components:{
			xstom
		}
	}
	
</script>

<style>
	.back{
		position: absolute;
		left: 16px;
   		 top: 14px;
	}
	.back img{
		opacity: .7;
	}
</style>