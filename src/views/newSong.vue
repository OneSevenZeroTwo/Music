<template>
	<div>
		<xbanner></xbanner>
		<xhot></xhot>
		<xcommend></xcommend>	
	</div>
</template>
<script>
	import xbanner from '../components/xbanner.vue'
	import xhot from '../components/xhot.vue'
	import xcommend from '../components/xcommend.vue'

	export default {
	  components: {
	    xbanner,
	    xhot,
	    xcommend
	  }
	}
</script>