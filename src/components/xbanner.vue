<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide v-for="i in bannerList" :key="i.id"><img :src="i.imgurl" /></swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
	import { swiper,swiperSlide } from 'vue-awesome-swiper'
	import axios from 'axios'


	export default {
		data() {
			return {
				bannerList:null,
				dataList:null,
				swiperOption: {
					autoplay: 3000
				}
			}
		},
		mounted(){
			axios.get('http://localhost:6789/newSong')
		      .then((response) => {
		        this.bannerList = response.data.banner;
		      })
		      .catch((error) => {
		        console.log(error);
		      });
		}
	}
</script>
<style scoped>
	img {
		width: 100%;
	}
</style>