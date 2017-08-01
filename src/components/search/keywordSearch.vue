<template>
	<div class="search">
		<div class="jg">搜索结果</div>
		<ul>
			<li v-for="(i,index) in list" @click="music(index)">
				<p v-text="i.filename"></p>
				<span class="xz" @click="xiazai"></span>
			</li>
			<div class="xl" v-show="xlsx">
				<span><mu-circular-progress :size="40"/></span>
			</div>
			<div class="lbw" v-show="lbwx">
				<p>没有更多了...</p>
			</div>
		</ul>
		<div class="fh" v-show="fh" @click="onfh">
			<img src="../../img/to_top.png"/>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				list:[],
				lbwx:false,
				xlsx:false,
				getid:null,
				fh:false,
			}
		},
		methods:{
			getzxrm(){
				return this.$store.dispatch("getzxrm");
			},
			setsearch(){
				if(this.zjrm){
					return this.$store.dispatch('setsearch',this.zjrm.keyword)					
				}
			},
			getsearch(){
				return this.$store.dispatch("getsearch");
			},
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
			tooss(){
				//二次搜索
				var tss = document.querySelector("#app .tss");
				var xthis= this;
				tss.onclick = function(){
					var val = document.querySelector("#app .ecss").value;
					xthis.list = [];
					xthis.$store.dispatch('setId',1);
					xthis.$store.dispatch("getsearch");
				}
			},
			xiazai(){
				this.$watch("newMusic",function(){
					window.location.href = this.newMusic.url
				})
			}
		},
		mounted(){
			console.log(123)
			this.$store.dispatch('setId',1);
			this.getzxrm()
			this.setsearch()
			this.getsearch()
			this.$watch("newsearch",function(){
				if(this.newsearch.length != 0){
					this.list = this.list.concat(this.newsearch);
					var xthis= this;
					if(xthis.newsearch.length < 30){
						xthis.xlsx = false;
						xthis.lbwx = true;
					}
					document.querySelector("body").onscroll = function(e) {
						var xhigth = document.documentElement.clientHeight;
						var zhight = document.body.clientHeight;
						var top = document.querySelector("body").scrollTop;
						//数据加载
						if(xhigth + top == zhight){
							if(xthis.newsearch.length < 30){
								xthis.xlsx = false;
								xthis.lbwx = true;
							}else{
								xthis.xlsx = true;								
							}
							xthis.getid = xthis.getId+1;
							xthis.$store.dispatch('setId',xthis.getid);
							xthis.$store.dispatch("getsearch");
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
			});
			//音乐播放
			this.$watch("newMusic",function(){
				var arr = [this.newMusic];
				this.$store.dispatch('setImg', [this.newMusic.imgUrl,true]);
           		this.$store.dispatch('setSongs',arr);
			});
			this.tooss()
		},
		computed:{
			getId(){
				if(this.$store.getters.getId) {
					return this.$store.getters.getId
				}
			},
			zjrm(){
				if(this.$store.getters.getzxrm) {
					var s =this.$store.getters.getzxrm.data.info;
					var y = this.$route.query.id;
					return s[y-1]
				}
			},
			newsearch(){
				if(this.$store.getters.getsearch) {
					return this.$store.getters.getsearch.data.info
				}
			},
			newMusic(){
				if(this.$store.getters.newMusic) {
					var img = this.$store.getters.newMusic;
					img.imgUrl =  img.imgUrl.replace(/{size}/g,'400');
					return img;
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.search{
		.jg{
			height: 32px;
			background: #e6e6e6;
			line-height: 32px;
			font-family: Microsoft Yahei;
			font-size: 16px;
			color: #5d5d5d;
			text-indent: 3%;
		}
		.fh{
			position: fixed;
			right: 6%;
			bottom: 10%;
			img{
				height: 42px;
			}
		}
		ul{
			padding-left: 5%;
			li{
				position: relative;
				width: 100%;
				font-size: 20px;
				padding: 20px 0;
				list-style: none;
				border-bottom: 1px solid #e5e5e5;
				p{
					width: 80%;
				}
			}
			.xz{
				display: block;
				position: absolute;
				width: 21px;
				height: 22px;
				background: url(../../img/download_icon_2.png) no-repeat center;
				background-size: 21px 22px;
				top: 50%;
				right: 5%;
				margin-top: -11px;
			}
			.xl{
				text-align: center;
				padding-top: 20px;
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