
export default {
    state: {
        newSong: null,
        newClass: null,
        newDetails: null,
        range_id: null,
        range_page: 1,
        songsPlay: [],
        scrolly: null,
        showComment: false,
        // 播放器数据状态管理
        showPlay: false,
        imgUrl: '',
        isshow: false,
        getIndex: null,
        getMusic: null,
        louti:false,
        zimu:null,
        zxrm:null,
        newsearch:'',
        getsearch:null,
        newId:1,
        commentNum:null,
        isShowContainer:true,
        //唱片
        record:'',
        //侧边栏初始化
        direction: 'left',
        telephone: '',
        password: '',
        //收藏
        singername: [],
        louti: false,
        zimu: null,
        commentNum: null,
        isShowContainer: true,
        newComment:null,
        newCommentCount:null,
        // 存放文章的历史浏览高度
        arrHight:[],
        getshou:[],
        loginStatus: null
    },
    getters: {
        getRange(state) {
            return state.newClass
        },
        getDetails(state) {
            return state.newDetails
        },
        giePage(state) {
            return state.range_page
        },
        getImgurl(state) {
            return state.imgUrl
        },
        showPlay(state) {
            return state.showPlay
        },
        songsPlay(state) {
            return state.songsPlay
        },
        Index(state) {
            return state.getIndex
        },
        newMusic(state) {
            return state.getMusic
        },
        getzxrm(state) {
            return state.zxrm
        },
        getsearch(state) {
            return state.getsearch
        },
        getId(state) {
            return state.newId
        },
        getRecord(state){
            return state.record
        }
    },
    mutations: {
        getMusic(state) {
            axios.get('http://localhost:6787/')
                .then((response) => {
                    state.newSong = response.data
                    console.log(state.newSong)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getRange(state) {
            axios.get('/music/rank/list&json=true')
                .then((response) => {
                    state.newClass = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        rangeDetails(state) {
            axios.get('/music/rank/info/?rankid=' + state.range_id + '&page=' + state.range_page + '&json=true', {})
                .then((response) => {
                    state.newDetails = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        setDetails(state, data) {
            state.range_id = data
        },
        setPage(state, data) {
            state.range_page = data
        },
        setImg(state, data) {
            state.imgUrl = data[0];
            state.showPlay = data[1]
        },
        setSongs(state, data) {
            state.songsPlay = data
        },
        setIndex(state, data) {
            state.getIndex = data
        },
        setMusic(state, data) {
            axios.get('/music/app/i/getSongInfo.php?cmd=playInfo&hash=' + data)
                .then((response) => {
                    state.getMusic = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getzxrm(state, data) {
            axios.get('/search/api/v3/search/hot?format=json&plat=0&count=30')
            .then((response) => {
                state.zxrm = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
        setsearch(state, data) {
			state.newsearch = data
        },
        getsearch(state, data) {
			axios.get('/search/api/v3/search/song?format=json&keyword='+state.newsearch+'&page='+state.newId+'&pagesize=30&showtype=1')
            .then((response) => {
                state.getsearch = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
        setId(state, data) {
			state.newId = data
        },
        setgq(state, data) {
			state.newsearch = data
        },
        setRecord(state,data){//添加音乐详情页面的歌单列表;
            var arr = [];
            data.forEach(function(item) {
            item.hash
            axios.get('/music/app/i/getSongInfo.php?cmd=playInfo&hash=' +item.hash)
                .then((response) => {
                   var temp = {}
                   temp.name = response.data.songName;
                   temp.author = response.data.singerName;
                   temp.src = response.data.url;
                   temp.cover = response.data.imgUrl.replace('{size}', '400')
                   arr.push(temp)
                })
                .catch((error) => {
                    console.log(error);
                });
             })
            state.record = arr;

        }
    },
    actions: {
        getMusic(context, data) {
            context.commit('getMusic')
        },
        getRange(context, data) {
            context.commit('getRange')
        },
        rangeDetails(context, data) {
            context.commit('rangeDetails')
        },
        setDetails(context, data) {
            context.commit('setDetails', data)
        },
        setPage(context, data) {
            context.commit('setPage', data)
        },
        setImg(context, data) { //点击改变播放控制器的图片
            context.commit("setImg", data)
        },
        setSongs(context, data) {
            context.commit("setSongs", data)
        },
        setIndex(context, data) {
            context.commit("setIndex", data)
        },
        setMusic(context, data) {
            context.commit("setMusic", data)
        },
        getzxrm(context, data) {
            context.commit("getzxrm", data)
        },
        setsearch(context, data) {
            context.commit("setsearch", data)
        },
        getsearch(context, data) {
            context.commit("getsearch", data)
        },
        setId(context, data) {
            context.commit("setId", data)
        },
        setgq(context, data) {
            context.commit("setgq", data)
        },
        setRecord(context,data){
            context.commit('setRecord',data)
        }
    }
}