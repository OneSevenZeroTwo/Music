<template>
	<div>
		<swiper v-model="index" height="100px" :show-dots="false">
	        <swiper-item v-for="(item, index) in list2" :key="index">
	          <div class="tab-swiper vux-center">{{item}} Container</div>
	        </swiper-item>
	    </swiper>
	</div>
</template>
<script>
	import { Swiper, SwiperItem } from 'vux'
	const list = () => ['排行']

	export default {
	  name: 'app',
	  components: {
	    Swiper,
	    SwiperItem
	  },
	  data () {
	    return {
	      list2: list(),
	      demo2: null,
	      list3: null,
	      demo3: null,
	      list4: null,
	      demo4: null,
	      demoDisabled: null,
	      index: 0,
	      getBarWidth: function (index) {
	        return (index + 1) * 22 + 'px'
	      }
	    }
	  }
	}
</script>