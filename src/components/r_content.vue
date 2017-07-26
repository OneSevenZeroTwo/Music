<template>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			getRange(){
				return this.$store.dispatch("getRange");
			}
		},
		mounted(){
			this.getRange();
			console.log(this)
		},
		computed:{
			list(){
				return this.$store.getters.getRange.rank.list
			}
		}
	}
</script>

<style>
</style>