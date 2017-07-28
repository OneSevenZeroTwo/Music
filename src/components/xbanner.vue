<template>
    <swiper :options="swiperOption" ref="mySwiper" v-if="bannerList">
        <!-- slides -->
        <swiper-slide v-for="i in bannerList" :key="i.id"><img :src="i.imgurl" /></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
import {
    swiper,
    swiperSlide
} from 'vue-awesome-swiper'
import axios from 'axios'


export default {
    data() {
            return {
                bannerList: null,
                dataList: null,
                swiperOption: {
                    autoplay: 3000,
                    setWrapperSize: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    observeParents: true
                }
            }
        },
        mounted() {
            axios.get('/music/?json=true')
                .then((response) => {
                    this.bannerList = response.data.banner;
                })
                .catch((error) => {
                    console.log(error);
                });
            //this.swiper.slideTo(4, 1000, false);
        }
}
</script>
<style scoped>
img {
    width: 100%;
}
</style>
