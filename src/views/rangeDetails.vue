<template>
	<div id="app">
		<!--<div class="topbar">
			<x-header>bilibili音悦台</x-header>
		</div>-->
		<span class="back"></span>
		<span class="search"></span>
		<Banner :xinfo=info></Banner>
		<List :xsongs=songs></List>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	import Banner from '../components/rangeDetails/banner.vue'
	import List from '../components/rangeDetails/list.vue'

	export default {
		data() {
			return {}
		},
		components: {
			XHeader,
			Banner,
			List
		},
		methods: {
			getDetails() {
				return this.$store.dispatch("rangeDetails");
			}
		},
		mounted() {
			this.$store.dispatch('setDetails', this.$route.params.id)
			this.getDetails();
		},
		computed: {
			info() {
				if(this.$store.getters.getDetails) {
					var str = this.$store.getters.getDetails.info;
					str.banner7url = str.banner7url.replace(/{size}/g, '400');
					str.bannerurl = str.bannerurl.replace(/{size}/g, '400');
					str.imgurl = str.imgurl.replace(/{size}/g, '400');
					return str;
				} else {
					return ' '
				}
			},
			songs() {
				if(this.$store.getters.getDetails) {
					return this.$store.getters.getDetails.songs.list
				}
			}
		}
	}
</script>