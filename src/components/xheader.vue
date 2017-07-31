<template>

    <div>
        <div class="topbar">
            <span>bilibili音悦台</span>
        </div>
        <span class="back" @click="changeDirection()"></span>
        <!--<span class="search" ></span>-->
        <a class="search" href="#/search"></a>
    </div>
</template>
<script type="text/javascript">
	module.exports = {
		computed: {
			title() {
				//暴力获取状态
				//this.$store.state.title
				return this.$store.getters.getCount
			}
		},
		methods:{
			changeDirection() {
				this.$store.state.direction = "right";
				//console.log(this.$store.state.direction)
			}
		}
	}
</script>

<style scoped>
.topbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fc378c;
    height: 48px
}
.topbar span{
	text-align: center;
	line-height: 48px;
	display: block;
	width: 100%;
	height: 100%;
	font-size: 20px;
	color: #fff;
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
    /*background-color: #fff;*/
    top: 9px;
    right: 9px;
    z-index: 200;
    background: url(../img/search.png) no-repeat center;
    background-size: 22px;
}
</style>

