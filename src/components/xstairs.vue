<template>
	<!--<div class="outbox">	
		<div class="word_sort" id="J_word_sort">
			<ul>
				<li>热</li>
				<li>热</li>
				<li>热</li>
				<li>热</li>
				
				<li>热</li>
				<li>热</li>
				<li>热</li>
				<li>热</li>
				<!--<li v-for='(ele,index) in alphabet' @click=jumpTo(ele,index) :key="index" :class="{active_alp:num_id==index}">{{ele}}</li>-->
			</ul>
		</div>

	</div>-->
</template>

<script>
	export default {
//		data(){
//			return {
//				alphabet:['A','B','C','F','G','H','J','L','N','Q','S','T','X','Y','Z'],
//				num_id:0
//			}
//		},
//		methods:{
//			jumpTo(ele,index){
//				document.body.scrollTop = document.getElementById(ele).offsetTop;
//				this.num_id = index;
//				
//			}
//		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	ul li{
		list-style-type:none;
	}
	.citybox {
		width: 100%;
		box-sizing: border-box;
		float: left;
		overflow-y: scroll;
	}
	.outbox a {
		font-size:0.186666rem;
		display: block;
		width: 100%;
		heightul li{
		list-style-type:none;
	}
	.citybox {
		width: 100%;
		box-sizing: border-box;
		float: left;
		overflow-y: scroll;
	}
	.outbox a {
		font-size:0.186666rem;
		display: block;
		width: 100%;
		height: 100%;
		padding-left: 0.133333rem;
	}

	.citybox .title {
		height: 0.293333rem;
		background: #e5e5e5;
		line-height: 0.293333rem;
		border-bottom: 0.013333rem solid #ddd;
	}
	.citybox .end,.citybox .pro {
		height: 0.573333rem;
		background: #fff;
		line-height: 0.573333rem;
		border-bottom: 0.013333rem solid #e5e5e5;
	}
	.citybox ul {
		list-style-type:none;
		height: 100%;
	}
	.top_box {
		display: none;
	}
	.word_sort {
		font-size:0.16rem;
		overflow: hidden;
	}
	.word_sort ul {
		position: fixed;
		right: 27px;
		top: 50%;
		margin-top: -50%;
		background: #FFFDEF;
		opacity: 0.5;
		width: 1.4rem;
		
	}
	.word_sort ul li {
		padding-top: 0.133333rem;
		text-align: center;
		border-bottom: 0.013333rem solid #ddd;
	}
	.active_alp {
		color: #C70034;
	}
: 100%;
		padding-left: 0.133333rem;
	}

	.citybox .title {
		height: 0.293333rem;
		background: #e5e5e5;
		line-height: 0.293333rem;
		border-bottom: 0.013333rem solid #ddd;
	}
	.citybox .end,.citybox .pro {
		height: 0.573333rem;
		background: #fff;
		line-height: 0.573333rem;
		border-bottom: 0.013333rem solid #e5e5e5;
	}
	.citybox ul {
		list-style-type:none;
		height: 100%;
	}
	.top_box {
		display: none;
	}
	.word_sort {
		font-size:0.16rem;
		overflow: hidden;
	}
	.word_sort ul {
		position: fixed;
		right: 27px;
		top: 50%;
		margin-top: -50%;
		background: #FFFDEF;
		opacity: 0.5;
		width: 1.4rem;
		
	}
	.word_sort ul li {
		padding-top: 0.133333rem;
		text-align: center;
		border-bottom: 0.013333rem solid #ddd;
	}
	.active_alp {
		color: #C70034;
	}

</style>