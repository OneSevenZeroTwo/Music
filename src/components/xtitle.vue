<template>
	<div>
        <div class="topbar">
        	<div class="go">
        	<span class="back"><img src="../assets/back.png" alt="" style="left: 0;top: 7px;position: absolute;" @click="goback()"/></span>
        	</div>
            <span>{{mytitle}}</span>
            
        </div>
       
        
    </div>
</template>

<script>
	export default{
		data(){
			return {
				mytitle:''
			}
		},
		methods:{
			goback:function(){
				history.back()
			}
		},
		mounted(){
			this.mytitle = window.localStorage.getItem("name");
			console.log(this.mytitle)
			
		}
	}
</script>

<style scoped>
	.topbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fc378c;
    height: 48px;
    
}
.topbar span{
	font-family: "微软雅黑";
	text-align: center;
	line-height: 48px;
	display: block;
	width: 100%;
	height: 100%;
	font-size: 16px;
	color: #fff;
	
}
.go{
	position: relative;
}
.back{
	position: absolute;
	left: 0;
	top:0;
}
</style>