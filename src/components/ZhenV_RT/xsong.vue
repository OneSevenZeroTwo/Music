<template>
	<div>
		<mu-card-media :title="title" subTitle="粉丝：66.3万" style="height: 250px;overflow: hidden;">
			<img :src="bigimg" @click="changeDirection()" style="overflow: hidden;" />
		</mu-card-media>
		<div class="liebiao">
			<ul>
				<li v-for="(n,index) in mylist">
					<p>
						<b>{{n.name}}</b>
						<span>{{n.list}}</span>
					</p>
				</li>
				
			</ul>
		</div>
		<span class="back" @click="goback"><img src="../../img/goback_1.png" alt="" style="height: 30px;margin:0;padding: 0;"/></span>
		<xstom :list="bigimg" :get="title" :xiang="xiangxi"></xstom>
	</div>

</template>

<script>
	import axios from "axios";
	import xstom from "../xstom.vue";
	export default {
		data() {
			return {
				title: null,
				bigimg: null,
				getid: 0,
				xiangxi: null,
				mylist: {}
			
			}
		},
		methods: {

			sort: function() {

				var salf = this
				axios({
						url: "/music/singer/info/" + salf.getid + "&json=true",
						method: 'get'
					})
					.then((response) => {
						console.log(salf.getid);
						//						console.log(response);
						//						console.log("/music/singer/info/3060&json=true")
						salf.title = response.data.info.singername;
						var res = response.data.info.imgurl.replace('{size}', '400');
						console.log(response);
						salf.xiangxi = response.data.info.profile;
						//						console.log(salf.xiangxi)
						salf.bigimg = res;
						var arry = [];
						var name = [];
						
						response.data.songs.list.forEach(function(item) {
						 	var obj = {};
							obj.name = item.filename.split(' - ')[1];
							obj.list = item.filename.split(' - ')[0]
							console.log(item.filename.split('- ')[1])
							arry.push(obj);
//							arry.push(item.filename.split(' - ')[0]);
//							name.push(item.filename.split(' - ')[1]);
							
							//							 arry = arry.push()
						});
//						for(var i=0; i<response.data.songs.list.length;i++){
//							response.data.songs.list[i].filename
//						}
						console.log(arry)
//						salf.mylist = arry;
//						salf.myname = name;
						salf.mylist = arry;
						console.log(salf.mylist)
					})
					.catch((error) => {
						console.log(error);
					});
			},
			goback: function() {
				history.back()
			},
			changeDirection: function() {
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

		components: {
			xstom
		}
	}
</script>

<style>
	.back {
		position: absolute;
		left: 16px;
		top: 14px;
	}
	
	.back img {
		opacity: .7;
	}
	.liebiao li{
		/*line-height: 30px;*/
		/*border-bottom: 1px solid #ddd;*/
		padding:10px;
	}
	.liebiao li p{
		
		border-bottom: 1px solid #ddd;
	}
	.liebiao li p span{
		display: block;
		margin-bottom: 8px;
		font-size: 12px;
		color: #bbb;
	}
	.liebiao li p b{
		/*display: block;*/
		line-height: 0px;
	}
</style>