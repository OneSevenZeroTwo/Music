import axios from 'axios'
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
        //唱片
        record: '',
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
        loginStatus: null,
        sildeShow:false,
        loginStatus: null,
        //音乐详情的封面
        recordCover: '',
        sildeShow:false
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
        getRecord(state) {
            return state.record
        },
        getrecordCover(state) {
            state.recordCover = state.record[0].cover;
            return state.recordCover
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
            axios.get('https://bird.ioliu.cn/v1?url=http://m.kugou.com/rank/list&json=true')
                .then((response) => {
                    state.newClass = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        rangeDetails(state) {
            axios.get('https://bird.ioliu.cn/v1?url=http://m.kugou.com/rank/info/?rankid=' + state.range_id + '&page=' + state.range_page + '&json=true', {})
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
            axios.get('https://bird.ioliu.cn/v1?url=http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=' + data)
                .then((response) => {
                    state.getMusic = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        setRecord(state, data) { //添加音乐详情页面的歌单列表;
            var arr = [];
            data.forEach(function(item) {
                item.hash
                axios.get('https://bird.ioliu.cn/v1?url=http://www.kugou.com/yy/index.php?r=play/getdata&hash=' + item.hash)
                    .then((response) => {
                        var temp = {}
                        temp.name = response.data.data.song_name;
                        temp.author = response.data.data.author_name;
                        temp.src = response.data.data.play_url;
                        temp.cover = response.data.data.img.replace('{size}', '400');
                        temp.lyric = response.data.data.lyrics;
                        arr.push(temp);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            state.record = arr;


        },
        setrecordCover(state, data) {
            state.recordCover = data
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
        setRecord(context, data) {
            context.commit('setRecord', data)
        },
        setrecordCover(context, data) { //设置音乐详情的封面
            context.commit('setrecordCover', data)
        }

    }
}
