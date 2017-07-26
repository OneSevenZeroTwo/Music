<template>
	<div>
		<ul>
			<li v-for="i in list">
				<a :href="'#/rangeDetails/'+i.rankid">
					<div style>
						<img :src="i.imgurl" alt="" />
					</div>
					<div>
						<h5 v-text="i.rankname"></h5>
					</div>
					<div style="float: right;position: relative;width: 16px;height: 108px;">
						<i style="position: absolute;left: -20px; top: 50%;margin-top: -20px;font-size: 40px; color: #e9e9e9;" class="material-icons">&#xE409;</i>
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
			console.log(this)
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
					return 	str;
				}
			}
		}
	}
</script>

<style scoped>
	li{list-style: none;}
	a{overflow: hidden; display: block; position: relative; margin-left: 3%; padding: 3% 3% 3% 0; border-bottom: 1px solid #e5e5e5;}
	a div{float: left;}
	h5{font-size: 20px;padding-left: 20px;line-height: 108px;color: #333; font-weight: normal;}
	img{width: 108px;display: block;}
</style>