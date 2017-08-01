<template>
	<div>
		<mu-card-media :title="title" subTitle="粉丝：66.3万" style="height: 250px;overflow: hidden;">
			<img :src="bigimg" @click="changeDirection()" style="overflow: hidden;" />
		</mu-card-media>
		<div class="liebiao">
			<ul style="margin-bottom: 50px;">
				<li v-for="(n,index) in mylist" @click="setImg(n,index)" :class="{gaol:gaoll==index}">
					<p>
						<b>{{n.name}}</b>
						<span>{{n.list}}</span>
						<mu-checkbox class="demo-checkbox" uncheckIcon="favorite_border" :nativeValue="n.hash" :disabled="isShow" checkedIcon="favorite" v-model="getshou" />
					</p>
					<i><img src="../../img/jia.png" alt="" /></i>
				</li>

			</ul>
		</div>
		<span class="back" @click="goback"><img src="../../img/goback_1.png" alt="" style="height: 30px;margin-left: 20px;margin-top: 20px;padding: 0;"/></span>
		<xstom :list="bigimg" :get="title" :xiang="xiangxi" :outtime="outtime"></xstom>
		<xtop></xtop>
		<xplay></xplay>
		<mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup" overlayColor="#fff">
			{{collect}}
		</mu-popup>
		<p v-show="false">{{news}}</p>
	</div>
	</div>

</template>

<script>
	import axios from "axios";
	import xstom from "../xstom.vue";
	import xtop from "../xtop.vue";
	import $ from "jquery";
	import xplay from "../xplay.vue";
	export default {
		data() {
			return {
				title: null,
				bigimg: null,
				getid: 0,
				xiangxi: null,
				mylist: {},
				outtime: null,
				singer: false,
				keyong: false,
				getshou: [],
				topPopup: false,
				collect: "请先登录",
				myhash: null,
				yandn: false,
				mtss: null,
				isShow: false,
				gaoll:null
			}
		},

		methods: {

			sort: function() {

				var salf = this
				axios({
						url: "/music/singer/info/" + salf.getid + "&json=true",
						method: 'get'
					})
					.then((response) => {

						salf.title = response.data.info.singername;
						var res = response.data.info.imgurl.replace('{size}', '400');

						salf.xiangxi = response.data.info.profile;
						salf.outtime = response.data.info.intro;

						salf.bigimg = res;
						var arry = [];
						var name = [];

						response.data.songs.list.forEach(function(item) {
							var obj = {};
							obj.name = item.filename.split(' - ')[1];
							obj.list = item.filename.split(' - ')[0];
							obj.hash = item.hash

							arry.push(obj);

						});

						salf.mylist = arry;

					})
					.catch((error) => {
						console.log(error);
					});
			},
			open(position) {
				this[position + 'Popup'] = true
			},
			close(position) {
				this[position + 'Popup'] = false
			},
			goback: function() {
				history.back()
			},
			changeDirection: function() {

				this.$store.state.isshow = true;
			},
			setImg(songsPlay,mindex) {
				var arr = [songsPlay];
				this.gaoll = mindex;
				this.$store.dispatch('setImg', [this.bigimg, true]);
				this.$store.dispatch('setSongs', arr);
			},

			jiantin: function(hash) {

				this.$store.state.getshou = this.getshou;
				this.myhash = hash;
			}
		},
		mounted() {

			this.getshou = this.$store.state.getshou;

			this.$store.state.showPlay = true;

			this.getid = this.$route.params.id;

			this.sort();

			var salf = this;

			function getCookie(name) {
				var a;
				var reg = new RegExp("(^|)" + name + "=([^;]*)(;|$)");
				if(a = document.cookie.match(reg)) {
					return a[2];
				}

			};
		
			if(getCookie("tel") === undefined) {
			
				this.isShow = true;

			} else {
				
			}
			

			$(".liebiao").on("click", "li", function() {

				var myimg = $("<img/>").attr({
					src: "data:image/png;base64,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"
				}).css({
					width: "20",
					position: "absolute",
					'left': '5px',
					'top': '15px'
				});

				var gaodu = $(".play").offset().top - $(this).offset().top;

				$(this).append(myimg);

				myimg.animate({
					top: 0
				}, function() {
					myimg.animate({
						top: gaodu
					}, 1000, function() {
						myimg.remove()
					})

				})
			})

		},
		watch: {
			topPopup(val) {
				if(val) {
					setTimeout(() => {
						this.topPopup = false
					}, 1000)
				}
			},

		},
		updated() {

			var salf = this;
			$('.demo-checkbox').on("click", function() {
				if(salf.isShow){
					salf.topPopup = true;
				}else{
						salf.topPopup = false;
				}
			
			})
		},
		computed: {
			news() {
				//				console.log(this.myhash);
				if(this.getshou == "") {

				} else {
					this.$store.state.getshou = this.getshou;
				}

				return this.getshou
			}
		},
		//拿到布尔值
		components: {
			xstom,
			xtop,
			xplay
		}
	}
</script>

<style scoped>
	.back {
		position: absolute;
		left: 0px;
		top: 0px;
		display: block;
		width: 100%;
	 background-color: rgba(0, 0, 0, 0.02);
	}
	
	.back img {
		opacity: .7;
	}
	
	.liebiao li {
		position: relative;
		
		list-style-type: none;
	}
	.liebiao li i{
		position: absolute;
		left:9px;
		top:18px;
		width: 20px;
		height:20px;
		
	}
	.liebiao li i img{
		width: 100%;
		height:100%;
	}
	.gaol{
		color:#fc378c;
		border-left:3px solid #fc378c;
	}
	.liebiao li p {
		position: relative;
		margin-left: 30px;
		    padding: 10px;
		border-bottom: 1px solid #ddd;
	}
	
	.liebiao li p span {
		display: block;
		margin-bottom: 8px;
		font-size: 12px;
		color: #bbb;
	}
	
	.liebiao li p b {
		/*display: block;*/
		line-height: 0px;
	}
	
	.demo-checkbox {
		position: absolute;
		right: 15px;
		top: 19px;
	}
	
	.shouc {
		position: absolute;
		right: 5px;
		top: 4px;
		width: 24px;
		height: 24px;
		z-index: 6;
	}
	
	.demo-popup-top {
		width: 100%;
		opacity: .8;
		height: 48px;
		line-height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 375px;
	}
</style>