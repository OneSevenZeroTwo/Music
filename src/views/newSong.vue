<template>
	<div>
		<xbanner></xbanner>
		<xhot></xhot>
		<xcommend></xcommend>
		<xcolumn></xcolumn>
		<xchosen></xchosen>
		<xzhuanlang></xzhuanlang>
		<xplay></xplay>
	</div>
</template>
<script>
	import xbanner from '../components/xbanner.vue'
	import xhot from '../components/xhot.vue'
	import xcommend from '../components/xcommend.vue'
	import xcolumn from '../components/xcolumn.vue'
	import xchosen from '../components/xchosen.vue'
	import xzhuanlang from '../components/xzhuanlang.vue'
	import xplay from '../components/xplay.vue'

	export default {
		components: {
			xbanner,
			xhot,
			xcommend,
			xcolumn,
			xchosen,
			xzhuanlang,
			xplay
		},
		mounted() {
			this.$store.dispatch('setIndex', '0');
		}
	}
</script>