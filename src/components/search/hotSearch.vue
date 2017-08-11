<template>
	<div class="zjrm">
		<div>
			<p>最近热门</p>
		</div>
		<ul>
			<li v-for="i in list"><a v-text="i.keyword" :href="'#/search/keywordSearch?id='+i.sort"></a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			getzxrm(){
				return this.$store.dispatch("getzxrm");
			},
		},
		mounted(){
			this.getzxrm()
		},
		computed:{
			list(){
				if(this.$store.getters.getzxrm) {
					return this.$store.getters.getzxrm.data.info
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.zjrm{
		div{
			padding-left: 5%;
			border-bottom: 1px solid #ccc;
			p{
				line-height: 50px;
				width: 100%;
				color: #2ca3f5;
				font-size: 16px;
			}
		}
		ul{
			padding-left: 5%;
			border-top: 1px solid #ccc;
			li{
				border-bottom: 1px solid #e5e5e5;
				list-style: none;
				font-size: 20px;
				a{
					display: block;
					padding: 20px 0;
				}
			}
		}
	}
</style>