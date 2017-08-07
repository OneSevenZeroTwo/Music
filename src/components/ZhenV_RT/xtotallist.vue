<template>
	<div>

		<div class="gridlist-demo-container">
			<mu-grid-list class="gridlist-demo" style="margin-top:20px;margin-left:0px;margin-bottom: 0px;margin-right: 0px;">

				<mu-grid-tile v-for="tile, index in hotsinger" :key="index" titlePosition="top" titleBarClass="myclass">
					<img :src="tile.imgurl"  class="setimg" />
					<span slot="title" style="width: 100%;height: 100%;">{{tile.classname}}</span>
					<!--<span class="zhezhao">{{tile.classname}}</span>-->
					<div style="position: absolute;width: 100%;top:0;left:0;height: 100%;z-index: 1;" @click="singerlist(tile.classid,tile.classname)"></div>
				</mu-grid-tile>

			</mu-grid-list>
		</div>
	</div>
</template>

<script>
	import axios from "axios";

	export default {

		data() {
			return {
				hotsinger: '',

			}
		},
		methods: {
			sort: function() {

				var salf = this
				axios.get("https://bird.ioliu.cn/v1?url=http://m.kugou.com/singer/class&json=true")
					.then((response) => {
						var sing = response.data.list;

						salf.hotsinger = sing;

					})
					.catch((error) => {
						console.log(error);
					});
			},
			singerlist(getid, title) {

				window.location.href = "#/singlist/" + getid;
				window.localStorage.setItem("name", title)
			}
		},
		mounted() {
			this.sort();
		}

	}
</script>

<style scoped>
	.mu-sub-header {
		background-color: #35495e;
		color: white;
	}
	
	.zhezhao {
		background-color: rgba(0, 0, 0, .4);
	}
	
	.titleBarClass {
		height: 200px;
	}
	
	.myclass {
		background-color: #red;
	}
	
	.mu-grid-tile-titlebar {
		
		height: 100%;
	}
	
	.setimg {
		width: 80%;
		height: 80%;
		border-radius: 50%;
	}
	
	@media screen  and (min-width:320px){
			.setimg{
				height: 70%;
			}
		}
	@media screen  and (min-width:410px){
			.setimg{
				height: 80%;
			}
		}
	@media screen  and (min-width: 768px){
			.setimg{
				height: 100%;
			}
		}
</style>