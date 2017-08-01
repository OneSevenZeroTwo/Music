<template>
	<div class="r_list">
		<ul>
			<li class="li" v-for="(i,index) in list" @click="music(index)">
				<div class="left" :class="[{red:index==0},{dh:index==1},{qh:index==2}]">
					<span>{{index+1}}</span>
				</div>
				<div class="conter">
					<p>{{i.filename}}</p>
				</div>
				<div class="right" @click="xiazai">
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
		<div class="fh" v-show="fh" @click="onfh">
			<img src="../../img/to_top.png"/>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["xsongs"],
		data() {
			return {
				list:[],
				xlsx:false,
				getpage:null,
				lbwx:false,
				fh:false,
			}
		},
		mounted() {
			//$watch可以解决异步问题
			this.$watch("xsongs",function(){
				if(this.xsongs.length != 0){
					this.list = this.list.concat(this.xsongs);
					var xthis= this;
					if(xthis.xsongs.length < 30){
						xthis.xlsx = false;
						xthis.lbwx = true;
					}
					document.querySelector("body").onscroll = function(e) {
						var xhigth = document.documentElement.clientHeight;
						var zhight = document.body.clientHeight;
						var top = document.querySelector("body").scrollTop;
						//标题事件
						var title = document.querySelector("body .title");
						if(title){
							if(top > 250){
								title.style.background = '#fc378c';
							}else{
								title.style.background = '-webkit-linear-gradient(top,rgba(0,0,0,.6),transparent)';
							}					
						}
						//数据加载
						if(xhigth + top == zhight){
							if(xthis.xsongs.length < 30){
								xthis.xlsx = false;
								xthis.lbwx = true;
							}else{
								xthis.xlsx = true;								
							}
							xthis.getpage = xthis.getPage+1;
							xthis.$store.dispatch('setPage',xthis.getpage);
							xthis.$store.dispatch("rangeDetails");
						}
						if(top>xhigth){
							xthis.fh = true
						}else{
							xthis.fh = false
						}
					}
				}else{
					this.xlsx = false;
					this.lbwx = true;
				}
			})
			//音乐播放
			this.$watch("newMusic",function(){
				var arr = [this.newMusic];
				this.$store.dispatch('setImg', [this.newMusic.imgUrl,true]);
           		this.$store.dispatch('setSongs',arr);
			})
		},
		methods:{
			onfh(){
				var i = 0;
				var timer =setInterval(function(){
					i+=10;
					document.body.scrollTop = document.body.scrollTop - i;
					if(document.body.scrollTop <=0){
						clearInterval(timer);
					}
				},5)
			},
			music(e){
				document.querySelector("#app .kgmusic").style.display = 'block'
				//获取嘻哈值
				var xhz = this.list[e].hash
				//获取歌曲列表
				this.$store.dispatch('setMusic',xhz);
			},
			xiazai(){
				this.$watch("newMusic",function(){
					window.location.href = this.newMusic.url
				})
			}
		},
		computed:{
			getPage(){
				if(this.$store.getters.giePage) {
					return this.$store.getters.giePage
				}
			},
			newMusic(){
				if(this.$store.getters.newMusic) {
					var img = this.$store.getters.newMusic;
					img.imgUrl =  img.imgUrl.replace(/{size}/g,'400');
					return img;
				}
			},
		}
	};
</script>

<style lang="less" scoped>
	.r_list {
		.fh{
			position: fixed;
			right: 6%;
			bottom: 10%;
			img{
				height: 42px;
			}
		}
		ul {
			padding-left: 3%;
			.li {
				list-style: none;
				overflow: hidden;
				position: relative;
				width: 100%;
				border-bottom: 1px solid #e5e5e5;
				.left {
					color: #999;
					float: left;
					width: 28px;
					height: 22px;
					margin-top: -10px;
					position: absolute;
					top: 50%;
					text-align: center;
					border-radius: 8px;
					font-family: Microsoft Yahei;
					span {
						line-height: 22px;
					}
				}
				.red{
					background: #e80000;
					color: white;
				}
				.dh{
					background: #ff7200;
					color: white;
				}
				.qh{
					background: #f8b300;
					color: white;
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
				margin-bottom: 80px;
			}
		}
	}
</style>