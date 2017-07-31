<template>
    <div>
       <xsonglist></xsonglist>
       <xplay></xplay>
    </div>
</template>
<script>
//引入组件
import xsonglist from "../components/xsonglist/xsonglist.vue";
import xplay from "../components/xplay.vue"
//注册组件
export default {
	components:{
		xsonglist,
		xplay
	},
	mounted(){
		this.$store.dispatch('setIndex',2);
	}
}
</script>
