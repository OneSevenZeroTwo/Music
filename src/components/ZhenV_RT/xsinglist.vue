<template>
	<div>
		<xtitle></xtitle>
		<div class="gridlist-demo-container" style="margin-top:48px;">
			<div class="hot">热门</div>
			<mu-row gutter>
				<mu-col width="20" tablet="30" desktop="25" v-for="n in title" :key="n.singerid" style="margin: 10px;">
					<img :src="n.imgurl" alt="" style="width:100%;height: 100%;border-radius: 50%;" />
					<p style="text-align: center;font-size: 12px;">{{n.singername}}</p>
				</mu-col>

			</mu-row>
			<div class="hot">A</div>
			<mu-list>
				<template v-for="item in myA" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">B</div>
			<mu-list>
				<template v-for="item in myB" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">C</div>
			<mu-list>
				<template v-for="item in myC" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">D</div>
			<mu-list>
				<template v-for="item in myD" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">E</div>
			<mu-list>
				<template v-for="item in myE" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">F</div>
			<mu-list>
				<template v-for="item in myF" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">G</div>
			<mu-list>
				<template v-for="item in myG" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">H</div>
			<mu-list>
				<template v-for="item in myH" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">I</div>
			<mu-list>
				<template v-for="item in myI" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">J</div>
			<mu-list>
				<template v-for="item in myJ" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">K</div>
			<mu-list>
				<template v-for="item in myK" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">L</div>
			<mu-list>
				<template v-for="item in myL" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">M</div>
			<mu-list>
				<template v-for="item in myM" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">N</div>
			<mu-list>
				<template v-for="item in myN" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">O</div>
			<mu-list>
				<template v-for="item in myO" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">P</div>
			<mu-list>
				<template v-for="item in myP" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">Q</div>
			<mu-list>
				<template v-for="item in myQ" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">R</div>
			<mu-list>
				<template v-for="item in myR" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">S</div>
			<mu-list>
				<template v-for="item in myS" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">T</div>
			<mu-list>
				<template v-for="item in myT" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">U</div>
			<mu-list>
				<template v-for="item in myU" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">V</div>
			<mu-list>
				<template v-for="item in myV" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">W</div>
			<mu-list>
				<template v-for="item in myW" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">X</div>
			<mu-list>
				<template v-for="item in myX" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">Y</div>
			<mu-list>
				<template v-for="item in myY" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">Z</div>
			<mu-list>
				<template v-for="item in myZ" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<div class="hot">#</div>
			<mu-list>
				<template v-for="item in my" >
					<mu-list-item disableRipple :title="item.singername" />
					<mu-divider/>
				</template>
			</mu-list>
			<xtop></xtop>

		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import xtop from "../xtop.vue";
	import xtitle from "../xtitle.vue";
	import "../../lib/pinyin_dict_firstletter";

	export default {
		data() {
			return {
				getid: '',
				list: '',
				title: [],
				totlelist: [],
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
				my: []
			}
		},
		methods: {
			getlist: function() {
				var salf = this;

				axios({
					method: 'get',
					url: '/music/singer/list/' + salf.getid + '?json=true'

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
			getl: function() {
				var salf = this;

				this.page++;
				axios({
					method: 'get',
					url: '/music/singer/list/' + salf.getid + '/' + salf.page + '?json=true'

				}).then((response) => {
					var mylist = response.data.singers.list.info;

					salf.totlelist = salf.totlelist.concat(mylist);
					
				})
			},
			getl1: function() {
				var salf = this;

				this.page++;
				axios({
					method: 'get',
					url: '/music/singer/list/' + salf.getid + '/' + salf.page + '?json=true'

				}).then((response) => {
					var mylist = response.data.singers.list.info;

					salf.totlelist = salf.totlelist.concat(mylist);
					for(var c = 0; c < this.totlelist.length; c++) {

						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "A") {
							salf.myA = salf.myA.concat(this.totlelist[c]);

						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "B") {
							salf.myB = salf.myB.concat(this.totlelist[c]);

						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "C") {
							salf.myC = salf.myC.concat(this.totlelist[c]);

						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "D") {
							salf.myD = salf.myD.concat(this.totlelist[c]);

						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "E") {
							salf.myE = salf.myE.concat(this.totlelist[c]);

						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "F") {
							salf.myF = salf.myF.concat(this.totlelist[c]);

						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "G") {
							salf.myG = salf.myG.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "H") {
							salf.myH = salf.myH.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "I") {
							salf.myI = salf.myI.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "J") {
							salf.myJ = salf.myJ.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "K") {
							salf.myK = salf.myK.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "L") {
							salf.myL = salf.myL.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "M") {
							salf.myM = salf.myM.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "N") {
							salf.myN = salf.myN.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "O") {
							salf.myO = salf.myO.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "P") {
							salf.myP = salf.myP.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "Q") {
							salf.myQ = salf.myQ.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "R") {
							salf.myR = salf.myR.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "S") {
							salf.myS = salf.myS.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "T") {
							salf.myT = salf.myT.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "U") {
							salf.myU = salf.myU.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "V") {
							salf.myV = salf.myV.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "W") {
							salf.myW = salf.myW.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "X") {
							salf.myX = salf.myX.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "Y") {
							salf.myY = salf.myY.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == "Z") {
							salf.myZ = salf.myZ.concat(this.totlelist[c]);
							
						}
						if(pinyinUtil.getFirstLetter(this.totlelist[c].singername.charAt(0)) == undefined) {
							salf.my = salf.my.concat(this.totlelist[c]);
							
						}
					}
				})
			}
		},
		mounted() {

			//重要一步获取id进行对象的逻辑
			this.getid = this.$route.params.id;
			this.getlist();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			this.getl();
			var salf = this;
			setTimeout(function(){
				salf.getl1();
			},100)
			
			
		

		},

		components: {
			xtitle,
			xtop
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
</style>