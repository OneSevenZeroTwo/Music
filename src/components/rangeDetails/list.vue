<template>
	<div class="r_list">
		<ul>
			<li class="li" v-for="(i,index) in list">
				<div class="left">
					<span>{{index+1}}</span>
				</div>
				<div class="conter">
					<p>{{i.filename}}</p>
				</div>
				<div class="right">
					<!--<span></span>-->
					<img src="../../img/download_icon_2.png" alt="" />
				</div>
			</li>
			<li class="xl" v-show="xlsx">
				<span><mu-circular-progress :size="40"/></span>
			</li>
			<li class="lbw" v-show="lbwx">
				<p>没有更多了...</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ["xsongs"],
		data() {
//			var list = ["George","Georgeqwe"];
//			var arr = ['a','b'];
//			setTimeout(() => {
////				list.push(this.xsongs)
//				list = list.concat(arr)	;			
//			}, 300)
			return {
				list:[],
				xlsx:false,
				getpage:null,
				lbwx:false
			}
		},
		mounted() {
			var xthis= this
			setTimeout(() => {
				if(xthis.xsongs){
					console.log(xthis.xsongs);
					xthis.list = xthis.list.concat(xthis.xsongs);
				}
			}, 300)
			this.xhigth;
		},
		computed: {
			xhigth(){
				var xthis = this;
				setTimeout(() => {
					if(xthis.xsongs){
						document.querySelector("body").onscroll = function(e) {
							var xhigth = document.documentElement.clientHeight;
							var zhight = document.body.clientHeight;
							var top = document.querySelector("body").scrollTop;
							if(xhigth + top == zhight){
								console.log(xhigth,zhight,top)
								xthis.xlsx = true;
								xthis.getpage = xthis.getPage+1;
								xthis.$store.dispatch('setPage',xthis.getpage);
								xthis.$store.dispatch("rangeDetails");
								xthis.list = xthis.list.concat(xthis.xsongs)
								console.log(xthis.getpage);
								if(xthis.xsongs.length < 30){
									xthis.xlsx = false;
									xthis.lbwx = true;
								}
							}
							console.log('qwe')
						}
					}			
				}, 300)
			},
			getPage(){
				if(this.$store.getters.giePage) {
					return this.$store.getters.giePage
				}
			},
			xadd(){
				var xthis = this;
				setTimeout(() => {
//					console.log(xthis.xsongs);
//					console.log(xthis.list)
					xthis.list = xthis.list.concat(xthis.xsongs)
//					console.log(xthis.list)
				}, 300)
			}
		}
	};
</script>

<style lang="less">
	.r_list {
		ul {
			padding-left: 3%;
			.li {
				list-style: none;
				overflow: hidden;
				position: relative;
				width: 100%;
				border-bottom: 1px solid #e5e5e5;
				.left {
					float: left;
					width: 28px;
					height: 22px;
					margin-top: -11px;
					position: absolute;
					top: 50%;
					text-align: center;
					border-radius: 9px;
					color: #999;
					font-family: Microsoft Yahei;
					span {
						line-height: 22px;
					}
				}
				.conter {
					float: left;
					font-size: 20px;
					width: 75%;
					left: 10px;
					padding: 20px 0;
					margin-left: 40px;
				}
				.right {
					float: right;
					position: absolute;
					right: 0;
					top: 50%;
					margin-top: -10px;
					margin-right: 20px;
					img {
						height: 20px;
					}
				}
			}
			.xl{
				text-align: center;
			}
			.lbw{
				text-align: center;
				margin: 20px 0;
				font-size: 20px;
			}
		}
	}
</style>