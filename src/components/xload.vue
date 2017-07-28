<template>
	<div id="loadingToast" v-show="getload">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </div>
</template>

<script>
	export default{
		props: ["getload"],
		data(){
			return {
				
			}
		}
	}
</script>

<style>
</style>