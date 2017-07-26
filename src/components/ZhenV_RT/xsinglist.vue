<template>
	
	<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo">
    <mu-sub-header>图片展示</mu-sub-header>
    <mu-grid-tile v-for="tile, index in list" :key="index">
      <img :src="tile.imgurl"/>
      <span slot="title">{{tile.singername}}</span>
      
      <mu-icon-button icon="star_border" slot="action"/>
    </mu-grid-tile>
  </mu-grid-list>
   <mu-back-top :height="500" :bottom="67" :right="45" :duration="1000"  >
   	<!--<i  class="mu-icon material-icons">keyboard_arrow_up</i>-->
    <mu-raised-button label="keyboard_arrow_up" class="demo-raised-button mu-icon material-icons" primary/>
  </mu-back-top>
</div> 
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				getid: '',
				list:''
			}
		},
		methods: {
			getlist: function() {
				var salf = this;
				axios({
					method: 'get',
					url: 'http://localhost:6565/singlist',
					params: {
						setid:salf.getid
					}
				}).then((response)=>{
//					salf.list = response.data.singers.list.info;
					salf.list = response.data.singers.list.info.map(function(item){
                       item.imgurl =  item.imgurl.replace('{size}','400')
                        return item
                   });
					console.log(response.data.singers.list.info);
				})

			}
		},
		mounted() {
			//重要一步获取id进行对象的逻辑
			this.getid = this.$route.params.id;
			this.getlist();
			console.log(this.axios)
		}
	}
</script>

<style scoped>
	.mu-back-up{
		opacity: 0.6;
		/*border-radius: 50px;*/
	}
	.mu-raised-button{
		border-radius: 100%;
	}
	.material-icons{
		font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
	}
	.mu-raised-button{
		min-width:0px;
	}
	.mu-raised-button-primary{
		background-color: #fc378c;
	}
	.mu-ripple-wrapper{
		     padding-left: 0px; 
		      padding-right: 0px; 
		      padding: 7px;
		     /*padding-right.: 10px;*/ 
	}
</style>