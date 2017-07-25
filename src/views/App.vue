<template>
  <div id="app">
    <x-header>bilibili音悦台</x-header>
    <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="click" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
        <!-- <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item> -->
        <router-view></router-view>
    </swiper>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
const list = () => ['新歌', '排行', '歌单', '歌手']
const tab = () => ['newSong', 'range', 'songSheet', 'singer']

export default {
  name: 'app',
  components: {
    XHeader,
    Tab,
    TabItem,
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
  },
  methods:{
    click(){
      // this.item = index;
      console.log(index);
      //windows.location.href = '#/app/'+ 
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
