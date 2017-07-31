<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
	mounted(){
		this.$store.dispatch('setIndex',3);
	}
}
</script>
<style scoped>
@import url("../css/muse-ui.css");
</style>
