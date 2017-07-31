<template>
	<div id="loadingToast" v-show="louti">
		
       
        <div class="weui-toast">
             <!--<i class="weui-icon_toast">A</i>-->
            <p class="weui-toast__content">{{zimu}}</p>
        </div>
    </div>
</template>

<script>
	export default {
		data(){
			return {
//				louti:false,
//				zimu:null
			}
		},
		computed:{
			louti(){

				return this.$store.state.louti;
			},
			zimu(){
				return this.$store.state.zimu;
			}
		}
	}
</script>

<style scoped>
	.weui-toast__content{
		font-size: 70px;
		margin:0;
	}
	.weui-toast{
		    background: rgba(17, 17, 17, 0.4);
	}
	
</style>