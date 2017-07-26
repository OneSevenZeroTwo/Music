<template>
	
		<div>
			<mu-list>
				<mu-sub-header>&nbsp;Hot</mu-sub-header>
				<mu-list-item :title="hotsinger.classname" @click="singerlist(hotsinger.classid)">
					<mu-avatar :src="hotsinger.imgurl" slot="leftAvatar" />
					<mu-icon value="chat_bubble" slot="right" />
				</mu-list-item>

				<mu-sub-header>&nbsp;华语乐坛</mu-sub-header>

				<mu-list-item v-for="n in huasinger" :key="n.classid" :title="n.classname" @click="singerlist(n.classid)">
					<mu-avatar :src="n.imgurl" slot="leftAvatar" />
					<mu-icon value="chat_bubble" slot="right" />
				</mu-list-item>

				<mu-sub-header>&nbsp;日韩乐坛</mu-sub-header>
				<mu-list-item v-for="n in risinger" :key="n.classid" :title="n.classname" @click="singerlist(n.classid)">
					<mu-avatar :src="n.imgurl" slot="leftAvatar" />
					<mu-icon value="chat_bubble" slot="right" />
				</mu-list-item>

				<mu-sub-header>&nbsp;欧美乐坛</mu-sub-header>
				<mu-list-item v-for="n in ousinger" :key="n.classid" :title="n.classname" @click="singerlist(n.classid)">
					<mu-avatar :src="n.imgurl" slot="leftAvatar" />
					<mu-icon value="chat_bubble" slot="right" />
				</mu-list-item>
			</mu-list>
			<mu-divider/>

		</div>
	
</template>

<script>
	import axios from "axios";


	export default {

		data() {
			return {
				hotsinger: '',
				huasinger: '',
				risinger: '',
				ousinger: ''
			}
		},
		methods: {
			sort: function() {

				var salf = this
				axios.get("http://localhost:6565/list")
					.then((response) => {
						var sing = response.data.list;
						var huasing = [];
						var rising = [];
						var ousing = [];

						for(var i = 0; i < sing.length; i++) {
							if(sing[i].classname.indexOf('热') !== -1) {

								salf.hotsinger = sing[i];
							}
							if(sing[i].classname.indexOf('华') !== -1) {
								huasing.push(sing[i]);

							}
							if(sing[i].classname.indexOf('日') !== -1) {
								rising.push(sing[i]);

							}
							if(sing[i].classname.indexOf('欧') !== -1) {
								ousing.push(sing[i]);

							}
						}
						console.log(huasing);
						salf.huasinger = huasing;
						salf.risinger = rising;
						salf.ousinger = ousing;

					})
					.catch((error) => {
						console.log(error);
					});
			},
			singerlist(getid) {
				console.log(getid);
				window.location.href = "#/app/singer/singlist/"+getid
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
		color: white
	}
</style>