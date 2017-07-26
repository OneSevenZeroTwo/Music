<template>
  <div id="app">
      <div class="topbar">
        <x-header>bilibili音悦台</x-header>
      </div>
      <span class="back"></span>
      <span class="search"></span>
    <router-view></router-view>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
	data(){
		return{
			
		}
	},
  components:{
    XHeader,
  },
  methods:{
			getDetails(){
				return this.$store.dispatch("rangeDetails");
			}
		},
  mounted(){
			this.getDetails();
			console.log(this)
			this.$store.dispatch('setDetails',this.$route.params.id)
		},
		computed:{
			info(){
				if(this.$store.getters.getDetails){
					var str = this.$store.getters.getDetails.info;
						str.banner7url =  str.banner7url.replace(/{size}/g,'400');
						str.bannerurl =  str.bannerurl.replace(/{size}/g,'400');
						str.imgurl =  str.imgurl.replace(/{size}/g,'400');
					return 	str;
				}
			},
			songs(){
				if(this.$store.getters.getDetails){
					return 	this.$store.getters.getDetails.songs.list
				}
			}
		}
}
</script>