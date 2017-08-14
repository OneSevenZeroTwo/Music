<template>
	<div>
		<ul>
			<li v-for="i in list">
				<a :href="'#/rangeDetails/'+i.rankid">
					<div style class="imgcontainer">
						<img :src="i.imgurl" alt="" />
						<span class="title">爱乐</span>
					</div>
					<div>
						<h5 v-text="i.rankname"></h5>
					</div>
					<div class="tb">
						<!--<i style="position: absolute;left: -20px; top: 50%;margin-top: -20px;font-size: 40px; color: #e9e9e9;" class="material-icons">&#xE409;</i>-->
						<img src="../img/arrow_icon.png"/>
					</div>		
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			getRange(){
				return this.$store.dispatch("getRange");
			}
		},
		mounted(){
			this.getRange();
			this.$store.dispatch('setIndex',1);
		},
		computed:{
			list(){
				if(this.$store.getters.getRange){
					var str = this.$store.getters.getRange.rank.list;
					for(var i = 0; i<str.length; i++){
						str[i].banner7url =  str[i].banner7url.replace(/{size}/g,'400');
						str[i].bannerurl =  str[i].bannerurl.replace(/{size}/g,'400');
						str[i].imgurl =  str[i].imgurl.replace(/{size}/g,'400');
					}
					for(var i = 0;i<str.length;i++){
						if(str[i].rankname.slice(0,2) == '酷狗' ){
							str[i].rankname = '爱乐'+str[i].rankname.slice(2,);
						}
					}
					return 	str;
				}
			}
		}
	}
</script>

<style scoped>
	li{list-style: none; position: relative;}
	a{overflow: hidden; display: block; position: relative; margin-left: 3%; padding: 3% 3% 3% 0; border-bottom: 1px solid #e5e5e5;}
	a div{float: left;}
	a .tb{position: absolute; right: 5%;top: 50%; margin-top: -10px;}
	a .tb img{width: 12px;height: 20px;}
	h5{font-size: 20px;padding-left: 20px;line-height: 108px;color: #333; font-weight: normal;}
	img{width: 108px;display: block;}
	.title{
		display: block;
		width: 80px;
		position: absolute;
		top: 8px;
		left: 13px;
		background-color: #fff;
		text-align: center;
		font-size: 24px;
		border-radius: 10px;
	}
	.imgcontainer{
		position: relative;
	}
</style>