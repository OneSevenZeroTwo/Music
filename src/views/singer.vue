<template>

	<div>
		<router-view></router-view>
	</div>
</template>
<script>
	import xtotalist from "./ZhenV_RT/xtotallist.vue"
	export default {
		components: {
	    xtotalist
	  }
	}
</script>
<style scoped>
	@import url("../css/muse-ui.css");
</style>