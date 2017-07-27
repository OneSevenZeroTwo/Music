<template>

	<div>
		
		<div class="gridlist-demo-container">
			<mu-grid-list class="gridlist-demo" style="margin-top:20px;">
				
				<mu-grid-tile v-for="tile, index in hotsinger" :key="index" titlePosition="top" titleBarClass="myclass" @click="singerlist(tile.classid)">
					<img :src="tile.imgurl"  style="width:80%;height:80%;border-radius: 50%;"/>
					<span slot="title">{{tile.classname}}</span>
					<!--<span class="zhezhao">{{tile.classname}}</span>-->
					
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
//				huasinger: '',
//				risinger: '',
//				ousinger: ''
			}
		},
		methods: {
			sort: function() {

				var salf = this
				axios.get("http://localhost:6565/list")
					.then((response) => {
						var sing = response.data.list;
//						var huasing = [];
//						var rising = [];
//						var ousing = [];
						salf.hotsinger = sing;
//						for(var i = 0; i < sing.length; i++) {
//							if(sing[i].classname.indexOf('热') !== -1) {
//
//								salf.hotsinger = sing[i];
//							}
//							if(sing[i].classname.indexOf('华') !== -1) {
//								huasing.push(sing[i]);
//
//							}
//							if(sing[i].classname.indexOf('日') !== -1) {
//								rising.push(sing[i]);
//
//							}
//							if(sing[i].classname.indexOf('欧') !== -1) {
//								ousing.push(sing[i]);
//
//							}
//						}
//						console.log(huasing);
//						salf.huasinger = huasing;
//						salf.risinger = rising;
//						salf.ousinger = ousing;

					})
					.catch((error) => {
						console.log(error);
					});
			},
			singerlist(getid) {
				console.log(getid);
				window.location.href = "#/app/singer/singlist/" + getid
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
	.zhezhao{
		background-color: rgba(0,0,0,.4);
	}
	.titleBarClass{
		height:200px;
	}
	.myclass{
		background-color: #red;
	}
</style>