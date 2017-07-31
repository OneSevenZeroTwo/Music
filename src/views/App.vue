<template>
    <div id="app">
        <xheader></xheader>
        <xsilde></xsilde>
        <tab :line-width=2 active-color='#fc378c' v-model="index">
            <tab-item class="vux-center"><a class="tabLink" :href="'#/app/newSong'">新歌</a></tab-item>
            <tab-item class="vux-center"><a class="tabLink" :href="'#/app/range'">排行</a></tab-item>
            <tab-item class="vux-center"><a class="tabLink" :href="'#/app/songSheet'">歌单</a></tab-item>
            <tab-item class="vux-center"><a class="tabLink" :href="'#/app/singer'">歌手</a></tab-item>
        </tab>
        <!-- <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper> -->
        <router-view></router-view>
    </div>
</template>
<script>
import {
    Tab,
    TabItem
} from 'vux';
import xheader from '../components/xheader.vue';
import xsilde from '../components/xsilde.vue';
export default {
    components: {
        xheader,
        Tab,
        TabItem,
        xsilde
    },
    data() {
        return {
            index: NaN,
        }
    },
    mounted(){
		this.index = this.getIndex
    },
    computed:{
		getIndex(){
			if(this.$store.getters.Index) {
				return this.$store.getters.Index
			}
		}
	}
}
</script>
<style lang="less">
.tabLink {
    color: #fc378c;
    width: 100%;
    height: 100%;
    display: block;
}

@import '~vux/src/styles/reset.less';
.vux-tab {
    margin-top: 48px;
}

body {
    background-color: #fbf9fe;
}
</style>
