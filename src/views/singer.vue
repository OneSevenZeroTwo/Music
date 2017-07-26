<template>
	<div>

		<mobile-tear-sheet>
			<mu-list>
				
				<mu-list-item v-for="n in mylist" :key :title="n.classname">
					<mu-avatar :src="n.imgurl" slot="leftAvatar" />
					<mu-icon value="chat_bubble" slot="right" />
				</mu-list-item>
				
			</mu-list>
			<mu-divider/>
			
		</mobile-tear-sheet>

	</div>
</template>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				mylist:''
			}
		},
		methods: {
			sort: function() {
				var salf = this
				axios.get("http://localhost:6565/list")
					.then((response) => {
						salf.mylist = response.data.list
						console.log(response.data.list);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},
		mounted() {
			this.sort();
		}

	}
</script>
<style scoped>
	@import url("../../css/muse-ui.css");
</style>