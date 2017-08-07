<template>
	<div>
		<xtitle></xtitle>
		<div class="gridlist-demo-container" style="margin-top: 48px;">
			<div class="hot">热门</div>
			<mu-row gutter>
				<mu-col width="20" tablet="30" desktop="25" v-for="n in title" :key="n.singerid" style="margin: 10px;" >
					<img :src="n.imgurl" alt="" style="width:100%;height: 100%;border-radius: 50%;" @click="songlist(n.singerid)" />
					<p style="text-align: center;font-size: 12px;">{{n.singername}}</p>
				</mu-col>

			</mu-row>
			<div class="hot A" v-if="xianA">A</div>

			<mu-list>
				<template v-for="item in myA" class="wo1" >
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot B" v-if="xianB">B</div>
			<mu-list>
				<template v-for="item in myB">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot C" v-if="xianC">C</div>
			<mu-list>
				<template v-for="item in myC">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot D" v-if="xianD">D</div>
			<mu-list>
				<template v-for="item in myD">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot E" v-if="xianE">E</div>
			<mu-list>
				<template v-for="item in myE">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot F" v-if="xianF">F</div>
			<mu-list>
				<template v-for="item in myF">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot G" v-if="xianG">G</div>
			<mu-list>
				<template v-for="item in myG">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot H" v-if="xianH">H</div>
			<mu-list>
				<template v-for="item in myH">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot I" v-if="xianI">I</div>
			<mu-list>
				<template v-for="item in myI">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot J" v-if="xianJ">J</div>
			<mu-list>
				<template v-for="item in myJ">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot K" v-if="xianK">K</div>
			<mu-list>
				<template v-for="item in myK">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot L" v-if="xianL">L</div>
			<mu-list>
				<template v-for="item in myL">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot M" v-if="xianM">M</div>
			<mu-list>
				<template v-for="item in myM">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot N" v-if="xianN">N</div>
			<mu-list>
				<template v-for="item in myN">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot O" v-if="xianO">O</div>
			<mu-list>
				<template v-for="item in myO">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot P" v-if="xianP">P</div>
			<mu-list>
				<template v-for="item in myP">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot Q" v-if="xianQ">Q</div>
			<mu-list>
				<template v-for="item in myQ">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot R" v-if="xianR">R</div>
			<mu-list>
				<template v-for="item in myR">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot S" v-if="xianS">S</div>
			<mu-list>
				<template v-for="item in myS">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot T" v-if="xianT">T</div>
			<mu-list>
				<template v-for="item in myT">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot U" v-if="xianU">U</div>
			<mu-list>
				<template v-for="item in myU">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot V" v-if="xianV">V</div>
			<mu-list>
				<template v-for="item in myV">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot W" v-if="xianW">W</div>
			<mu-list>
				<template v-for="item in myW">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot X" v-if="xianX">X</div>
			<mu-list>
				<template v-for="item in myX">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot Y" v-if="xianY">Y</div>
			<mu-list>
				<template v-for="item in myY">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot Z" v-if="xianZ">Z</div>
			<mu-list>
				<template v-for="item in myZ">
					<mu-list-item disableRipple :title="item.singername"  @click="songlist(item.singerid)"/>
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot jin" v-if="xian">#</div>
			<mu-list>
				<template v-for="item in my">
					<mu-list-item disableRipple :title="item.singername" @click="songlist(item.singerid)" />
					<mu-divider/>
				</template>
			</mu-list>
			<!--<xtop></xtop>-->
			<!--<xstairs :mystairs="shouzimu"></xstairs>-->
			<div class="outbox">
				<div class="word_sort" id="J_word_sort">
					<ul>
						<!--<li @click="setsl" class="gao">热</li>-->
						<li v-for="(ele,index) in shouzimu" :name="index" @click="setscroll(ele,index)" v-bind:class="{'gao':isShow==index}">{{ele}}</li>

					</ul>
				</div>

			</div>
			<xload :getload="load"></xload>
			<xlouti></xlouti>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import $ from "jquery";

	import xload from "../xload.vue";
	import xtitle from "../xtitle.vue";
	import xlouti from "../xlouti.vue";
	import "../../lib/pinyin_dict_firstletter";

	export default {
		data() {
			return {
				isShow: 0,
				getid: '',
				list: '',
				title: [],
				totlelist: [],
				load: false,
				bool: 0,
				mytitle: "",
				page: 0,
				myA: [],
				myB: [],
				myC: [],
				myD: [],
				myE: [],
				myF: [],
				myG: [],
				myH: [],
				myI: [],
				myJ: [],
				myK: [],
				myL: [],
				myM: [],
				myN: [],
				myO: [],
				myP: [],
				myQ: [],
				myR: [],
				myS: [],
				myT: [],
				myU: [],
				myV: [],
				myW: [],
				myX: [],
				myY: [],
				myZ: [],
				my: [],
				xianA: false,
				xianB: false,
				xianC: false,
				xianD: false,
				xianE: false,
				xianF: false,
				xianG: false,
				xianH: false,
				xianI: false,
				xianJ: false,
				xianK: false,
				xianL: false,
				xianM: false,
				xianN: false,
				xianO: false,
				xianP: false,
				xianQ: false,
				xianR: false,
				xianS: false,
				xianT: false,
				xianU: false,
				xianV: false,
				xianW: false,
				xianX: false,
				xianY: false,
				xianZ: false,
				xian: false,
				shouzimu: []
			}
		},
		methods: {
			getlist: function() {
				var salf = this;

				axios({
					method: 'get',
					url: 'https://bird.ioliu.cn/v1?url=http://m.kugou.com/singer/list/' + salf.getid + '?json=true'

				}).then((response) => {
					
					salf.list = response.data.singers.list.info.map(function(item) {
						//因为获取到数据里面需要传入宽高所以这边做了一层小处理
						item.imgurl = item.imgurl.replace('{size}', '400')
						return item
					});

					//用来获取头部热门的信息
					for(var i = 0; i < salf.list.length; i++) {
						salf.title = salf.title.concat(salf.list[i]);
						if(i > 6) {

							break;
						}
					}

				})

			},
			songlist:function(getid){

				window.location.href = "#/xsong/" + getid;
			},
			setscroll: function(ele, e) {

				this.isShow = e;
				this.$store.state.louti = true;
				this.$store.state.zimu = ele;
				var salf = this;
				setTimeout(function(){
					
					salf.$store.state.louti = false;
				},1000)
				var $top = null;
				try {
					if(ele === "热") {
						$('body').animate({
							scrollTop: 0
						});
					} else {
						$top = $("." + ele + "").offset().top - 49;
						$('body').animate({
							scrollTop: $top
						});
					}
				} catch(error) {
					$(".hot").offset().top
				}

			},
			setsl: function() {

				$('body').animate({
					scrollTop: 0
				});
			},
			getl: function() {
				this.load = true;
				var salf = this;

				this.page++;

				axios({
					method: 'get',
					url: 'https://bird.ioliu.cn/v1?url=http://m.kugou.com/singer/list/' + salf.getid + '/' + salf.page + '?json=true'

				}).then((response) => {
					var mylist = response.data.singers.list.info;

					salf.totlelist = salf.totlelist.concat(mylist);

					if(salf.page < 10) {
						salf.getl();
					} else {
						salf.getl1();
						return;
					}

				})
			},
			getl1: function() {
				var salf = this;
				
				this.page++;
				axios({
					method: 'get',
					url: 'https://bird.ioliu.cn/v1?url=http://m.kugou.com/singer/list/' + salf.getid + '/' + salf.page + '?json=true'

				}).then((response) => {
					var mylist = response.data.singers.list.info;
					//					console.log(salf.totlelist);
					salf.totlelist = salf.totlelist.concat(mylist);
					//关键一步去掉重复的名字
					var res = [this.totlelist[0].singername];
					for(var c = 1; c < this.totlelist.length; c++) {
						var repeat = false;
						for(var j = 0; j < res.length; j++) {
							if(this.totlelist[c].singername == res[j]) {
								repeat = true;
								break;
							}
						}
						if(!repeat) {
							res.push(this.totlelist[c].singername);
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "A") {
								salf.myA = salf.myA.concat(this.totlelist[c]);
								salf.xianA = true;
							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "B") {
								salf.myB = salf.myB.concat(this.totlelist[c]);
								salf.xianB = true;
							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "C") {
								salf.myC = salf.myC.concat(this.totlelist[c]);
								salf.xianC = true;
							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "D") {
								salf.myD = salf.myD.concat(this.totlelist[c]);
								salf.xianD = true;
							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "E") {
								salf.myE = salf.myE.concat(this.totlelist[c]);
								salf.xianE = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "F") {
								salf.myF = salf.myF.concat(this.totlelist[c]);
								salf.xianF = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "G") {
								salf.myG = salf.myG.concat(this.totlelist[c]);
								salf.xianG = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "H") {
								salf.myH = salf.myH.concat(this.totlelist[c]);
								salf.xianH = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "I") {
								salf.myI = salf.myI.concat(this.totlelist[c]);
								salf.xianI = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "J") {
								salf.myJ = salf.myJ.concat(this.totlelist[c]);
								salf.xianJ = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "K") {
								salf.myK = salf.myK.concat(this.totlelist[c]);
								salf.xianK = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "L") {
								salf.myL = salf.myL.concat(this.totlelist[c]);
								salf.xianL = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "M") {
								salf.myM = salf.myM.concat(this.totlelist[c]);
								salf.xianM = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "N") {
								salf.myN = salf.myN.concat(this.totlelist[c]);
								salf.xianN = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "O") {
								salf.myO = salf.myO.concat(this.totlelist[c]);
								salf.xianO = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "P") {
								salf.myP = salf.myP.concat(this.totlelist[c]);
								salf.xianP = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "Q") {
								salf.myQ = salf.myQ.concat(this.totlelist[c]);
								salf.xianQ = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "R") {
								salf.myR = salf.myR.concat(this.totlelist[c]);
								salf.xianR = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "S") {
								salf.myS = salf.myS.concat(this.totlelist[c]);
								salf.xianS = true;
							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "T") {
								salf.myT = salf.myT.concat(this.totlelist[c]);
								salf.xianT = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "U") {
								salf.myU = salf.myU.concat(this.totlelist[c]);
								salf.xianU = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "V") {
								salf.myV = salf.myV.concat(this.totlelist[c]);
								salf.xianV = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "W") {
								salf.myW = salf.myW.concat(this.totlelist[c]);
								salf.xianW = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "X") {
								salf.myX = salf.myX.concat(this.totlelist[c]);
								salf.xianX = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "Y") {
								salf.myY = salf.myY.concat(this.totlelist[c]);
								salf.xianY = true;

							}
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "Z") {
								salf.myZ = salf.myZ.concat(this.totlelist[c]);
								salf.xianZ = true;

							}
							
							//用来判断首字母不为a-z的字母进去#号里面
							if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "A" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "B" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "C" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "D" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "E" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "F" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "G" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "H" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "I" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "G" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "K" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "L" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "M" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "N" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "O" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "P" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "Q" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "R" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "S" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "T" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "U" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "V" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "W" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "X" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "Y" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "Z" && pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) !== "J") {
								salf.my = salf.my.concat(this.totlelist[c]);
								salf.xian = true;

							}
						}
					}
					salf.load = false;
					var getlis = [];
					for(var i = 0; i < res.length; i++) {
						var mylis = pinyinUtil.getFirstLetter(res[i].charAt(0));

						getlis = getlis.concat(mylis);
					}
					var bcc = [getlis[0]];
					var bbb = "";
					var panduan = false;
					for(var a = 1; a < getlis.length; a++) {
						var repeat = false;
						for(var b = 0; b < getlis.length; b++) {
							if(getlis[a] == bcc[b]) {
								repeat = true;
								break;
							}
						}
						if(!repeat) {
							bcc.push(getlis[a]);
							bcc.sort();

						}
					}
					var bbb;
					for(var f = 0; f < bcc.length; f++) {
						if(bcc[f] !== "A" && bcc[f] !== "B" && bcc[f] !== "C" && bcc[f] !== "D" && bcc[f] !== "E" && bcc[f] !== "F" && bcc[f] !== "G"&& bcc[f] !== "S" && bcc[f] !== "H" && bcc[f] !== "I" && bcc[f] !== "G" && bcc[f] !== "K" && bcc[f] !== "L" && bcc[f] !== "M" && bcc[f] !== "N" && bcc[f] !== "O" && bcc[f] !== "P" && bcc[f] !== "Q" && bcc[f] !== "R" && bcc[f] !== "S" && bcc[f] !== "U" && bcc[f] !== "V" && bcc[f] !== "W" && bcc[f] !== "X" && bcc[f] !== "Y" && bcc[f] !== "Z" && bcc[f] !== "T" && bcc[f] !== "J") {
							//										console.log(bcc[f]);									
						} else {
							bbb += bcc[f] + ",";

						}
					}
					
					bbb = bbb.slice(0, bbb.length - 1)

					bbb = bbb.split(",")
					bbb.unshift("热");
					salf.shouzimu = bbb;

				})
			}
		},
		mounted() {
			
			//重要一步获取id进行对象的逻辑
			this.getid = this.$route.params.id;
			this.getlist();
			this.getl();
			var sale = this;
			//感应手动触动屏幕拖动
			$(document).on('touchmove',function (eve) {

					var page = 0;
					for(var i = 0; i < sale.shouzimu.length; i++) {
						//					console.log(sale.shouzimu);
						if(sale.shouzimu[i] == "热") {
							sale.isShow = 0;
							//					
						} else {
							try {
								if($(this).scrollTop() > $("." + sale.shouzimu[i] + "").offset().top - 49) {

									page = i;
									beack;

								}

							} catch(error) {

							}
							//						
						}
						//					
					}
					sale.isShow = page;
				

			})

		},

		components: {
			xtitle,
			xlouti,
			xload

		}
	}
</script>

<style scoped>
	.hot {
		width: 100%;
		height: 25px;
		background-color: #E5E5E5;
		color: #fc378c;
		line-height: 25px;
		text-indent: 1em;
		font-family: "微软雅黑";
	}
	
	ul li {
		list-style-type: none;
	}
	
	.top_box {
		display: none;
	}
	
	.word_sort {
		font-size: 0.16rem;
		overflow: hidden;
	}
	
	.word_sort ul {
		position: fixed;
		right: 7px;
		top: 38%;
		margin-top: -36%;
		background: #FFFDEF;
		opacity: 0.5;
		width: 40px;
		height: 100%;
	}
	
	.word_sort ul li {
		text-align: center;
		border-bottom: 0.013333rem solid #ddd;
		height:20px;
	}
	
	.word_sort ul li .gaoliang {
		background-color: #FC378C;
	}
	
	.gao {
		background-color: #FC378C;
		color: white
	}
	
	.active_alp {
		color: #C70034;
	}
</style>