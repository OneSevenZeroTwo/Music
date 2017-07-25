<template>
  <div id="app">
    <x-header>bilibili音悦台
    </x-header>
    <span class="back"></span>
    <span class="search"></span>
    <tab :line-width=2 active-color='#fc378c' v-model="index" >
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
import { XHeader } from 'vux'

import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
const list = () => ['新歌', '排行', '歌单', '歌手']
const tab = () => ['newSong', 'range', 'songSheet', 'singer']

export default {
  components:{
    XHeader,
    Tab,
    TabItem
  },
  data () {
    return {
      index: 0
    }
  }
}
</script>

<style lang="less">
.back{
  display: block;
  position: fixed;
  width: 30px;
  height: 30px;
  background-color: #fff;
  top:9px;
  left:9px;
}
.search{
  display: block;
  position: fixed;
  width: 30px;
  height: 30px;
  background-color: #fff;
  top:9px;
  right:9px;
}
.tabLink{color:#fc378c;width: 100%;height: 100%;display:block;}
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
