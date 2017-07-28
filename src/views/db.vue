<template>
    <div>
        <header>
            <h4>后台管理系统</h4>
        </header>
        <div class="container">
            <div class="sidebar">
                <div>
                    <p><a href="">评论数据</a></p>
                </div>
                <div>
                    <p><a href="">用户数据</a></p>
                </div>
                <div>
                    <p><a href="">文章列表</a></p>
                </div>
            </div>
            <section class="main">
                <table cellspacing='0'>
                    <tr>
                        <th>ID</th>
                        <th>作者</th>
                        <th>标题</th>
                        <th>类目</th>
                        <th>等级</th>
                        <th>内容</th>
                        <th>时间</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="d in data" v-model = 'data'>
                        <td>{{d.id}}</td>
                        <td>{{d.author}}</td>
                        <td>{{d.title|shortTitle}}</td>
                        <td>{{d.subtitle|shortTitle}}</td>
                        <td>{{d.rating}}</td>
                        <td>{{d.content|shortTitle}}</td>
                        <td>{{d.editetime}}</td>
                        <td>
                            <button @click="sendId(d.id)"><a :href="'#/mod/'+d.id">编辑</a></button>
                            <button>删除</button>
                        </td>
                    </tr>
                </table>
                <div class="pagenation">
                    <span v-for="(item,index) in pageNum" @click="changeContent(index)">{{item}}</span>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
            return {
                page: 1,
                //comment:[]
                data: null,
                total: null,
                pageConut: null,
                pageNum: []
            }
        },
        methods: {
            changeContent(index) {
            	var self = this;
                axios.get('http://localhost:8008/comment', {
                        params: {
                            page:index+1 
                        }
                    })
                    .then(function(response) {
                        self.data = response.data.data;
                        console.log(self.data);
                        console.log(self);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            sendId(did){
            	console.log(did);
            }
        },
        mounted() {
            // this指向的问题
            var self = this;
            axios.get('http://localhost:8008/comment', {
                    params: {
                        page: this.page
                    }
                })
                .then(function(response) {
                    self.data = response.data.data;
                    self.total = response.data.num;
                    self.pageCount = Math.ceil(self.total / 10);
                    console.log(self.pageNum, self.pageCount, self.total);
                    for (var i = 1; i <= self.pageCount; i++) {
                        //console.log(i);
                        self.pageNum.push(i);
                    }
                    console.log(self.pageNum);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        filters: {
            shortTitle(input) {
                if (input.length > 10) {
                    return input.slice(0, 10) + '...';
                } else {
                    return input
                }
            }
        },
        computed:{

        }
}
</script>
<style scoped>
h4 {
    font-size: 24px;
    color: #fff;
    text-align: center;
    font-weight: normal;
    line-height: 60px;
}

header {
    height: 60px;
    width: 100%;
    background-color: #20a0ff;
}

.sidebar {
    float: left;
    width: 20%;
    height: 710px;
    background-color: #ddd;
}

.sidebar p a {
    display: block;
    line-height: 40px;
    text-align: center;
    width: 100%;
    color: #48576a;
    font-size: 16px;
}

button {
    border: 0;
    background-color: #ddd;
    width: 40px;
    height: 30px;
    border-radius: 6px;
}

.container {
    width: 100%;
    overflow: hidden;
}

.sidebar p:hover {
    background-color: #1d8ade;
}

.sidebar p:hover a {
    color: #fff;
}

.main {
    float: left;
    width: 80%;
}

.pagenation {
    float: right;
    margin-right: 300px;
    margin-top: 20px;
}

.pagenation span {
    margin: 0 10px;
}

table {
    width: 90%;
    margin-top: 40px;
    margin-left: 20px;
    border: 1px solid #ddd;
    border-collapse: collapse;
}

th {
    border: 1px solid #ddd;
    padding: 10px;
}

td {
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
}
</style>
