<template>
    <div id="app">
        <div class="topbar">
            <x-header>bilibili音悦台</x-header>
        </div>
        <span class="back"></span>
        <span class="search"></span>
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
    XHeader
} from 'vux'
import {
    Tab,
    TabItem
} from 'vux'
//const tab = () => ['newSong', 'range', 'songSheet', 'singer']

export default {
    components: {
        XHeader,
        Tab,
        TabItem
    },
    data() {
        return {
            index: 0
        }
    }
}
</script>
<style lang="less">
.topbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
}

.back {
    display: block;
    position: fixed;
    width: 30px;
    height: 30px;
    background-color: #fff;
    top: 9px;
    left: 9px;
    z-index: 200;
}

.search {
    display: block;
    position: fixed;
    width: 30px;
    height: 30px;
    background-color: #fff;
    top: 9px;
    right: 9px;
    z-index: 200;
}

.tabLink {
    color: #fc378c;
    width: 100%;
    height: 100%;
    display: block;
}

@import '~vux/src/styles/reset.less';
.vux-tab {
    margin-top: 46px;
}

body {
    background-color: #fbf9fe;
}
</style>
