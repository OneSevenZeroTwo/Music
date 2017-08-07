<template>
    <div id="app">
        <!-- <xheader></xheader> -->
        <xsilde></xsilde>
        <sheader></sheader>
        <router-view></router-view>
        <xplay></xplay>
    </div>
</template>
<script>
import {
    Tab,
    TabItem
} from 'vux';
import xheader from '../components/xheader.vue';
import xsilde from '../components/xsilde.vue';
import sheader from '../components/search/sheader.vue';
import xplay from "../components/xplay.vue"
export default {
    components: {
        xheader,
        Tab,
        TabItem,
        xsilde,
        sheader,
        xplay
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
