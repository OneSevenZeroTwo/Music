<template>
	<div>
		<!-- <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper> -->
		<!-- <swiper v-for=""></swiper> -->
		<xbanner></xbanner>	
	</div>
</template>
<script>
	import xbanner from '../components/xbanner.vue'

	/*const baseList = [{
	  img: 'https://static.vux.li/demo/2.jpg',
	  title: '送你一朵fua'
	}, {
	  img: 'https://static.vux.li/demo/2.jpg',
	  title: '送你一辆车'
	}, {
	  img: 'https://static.vux.li/demo/3.jpg',
	  title: '送你一次旅行'
	}]

	const urlList = baseList.map((item, index) => ({
	  url: 'http://m.baidu.com',
	  img: item.img,
	  title: `(可点击)${item.title}`
	}))*/

	export default {
	  components: {
	    xbanner
	  }
	}
</script>