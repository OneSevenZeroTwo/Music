import App from '../views/App'
import rangeDetails from '../views/rangeDetails'
import search from '../views/search'

import newSong from '../views/newSong'
import range from '../views/range'
import songSheet from '../views/songSheet'
import singer from '../views/singer'

//import 'muse-ui/dist/muse-ui.css';

import db from '../views/db'
import mod from '../views/mod'
import passageDetail from '../views/passageDetail'
import song from '../views/song'
import connection from '../views/connection'
//引入登录注册
import Register from "../views/register.vue";
import Login from "../views/login.vue";
//引入收藏
import Shoucang from "../views/shoucang.vue";
//吴镇宇项目需要引入的子路由
import xtotalist from "../components/ZhenV_RT/xtotallist.vue";
import xsong from "../components/ZhenV_RT/xsong.vue";
import singlist from "../components/ZhenV_RT/xsinglist.vue";
import hotSearch from "../components/search/hotSearch.vue"
import keywordSearch from "../components/search/keywordSearch.vue"

export default [{
        path: '/app',
        component: App,
        children: [{
            path: 'newSong',
            component: newSong
        }, {
            path: 'range',
            component: range
        }, {
            path: 'songSheet',
            component: songSheet
        }, {
            path: 'singer',
            component: singer,
            children: [{
                path: 'tolist',
                component: xtotalist
            }, {
                path: '/app/singer',
                redirect: '/app/singer/tolist'
            }]
        }]
    }, {
        path: '/rangeDetails/:id',
        component: rangeDetails,
    }, {
        path: '/singlist/:id',
        component: singlist
    }, {
        path: '/xsong/:id',
        component: xsong
    }, {
        path: '/db',
        component: db,
    }, {
        path: '/mod/:id',
        component: mod,
    }, {
        // 文章详情路由
        path: '/passageDetail/:id',
        component: passageDetail,
    }, {
        path: "/song",
        component: song
    },
    //注册登录路由
    {
        path: '/register',
        component: Register
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/search',
        component: search,
        children: [{
            path: 'hotSearch',
            component: hotSearch
        }, {
            path: 'keywordSearch',
            component: keywordSearch
        }, {
            path: '/search',
            redirect: '/search/hotSearch'
        }]
    }, {
        path: '/shoucang',
        component: Shoucang
    }, {
        path: '/connection',
        component: connection
    }, {
        path: '/',
        redirect: '/app/newSong'
    }
]
