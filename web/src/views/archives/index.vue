<style>
    #app {
        font-family: '微软雅黑', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        list-style: none;
        height: 100%;
        /*background: url(../assets/bj.jpg) no-repeat;*/
        background-size: 100% 100%;
        background-position: 0 58px;
    }

    .main {
        position: relative;
        width: 1300px;
        margin: 50px auto;
    }

    .top {
        margin-bottom: 12px;
        height: 48px;
    }

    .top span {
        float: left;
        line-height: 48px;
        background: #fff;
        border-radius: 4px;
        color: #31c27c;
        font-size: 16px;
    }

    .top .sp1 {
        width: 280px;
        text-align: center;
        margin-right: 12px;
        background: url("../../assets/archives/1.0.png") #ffffff no-repeat 75px 16px;
    }

    .top .sp2 {
        width: 1008px;
        text-indent: 30px;
    }

    .list_box {
        width: 280px;
        height: 620px;
        border-radius: 4px;
        background: #f7f8fc;
    }

    .list_box:after {
        clear: both;
        content: '.';
        display: block;
    }

    .list {
        width: 154px;
        height: 620px;
        text-align: center;
        font-size: 14px;
        float: left;
        list-style: none;
    }

    .list > li {
        width: 154px;
        height: 54px;
        line-height: 54px;
        cursor: pointer;
    }


    /*less循环失败*/
    /*.list(@navicon) when (@navicon < 5){*/
        /*.su@{navicon}{*/
            /*background: url("../../assets/archives/1.@{navicon}.png") no-repeat 0 0;*/
        /*}*/
        /*.list((@navicon+1));*/
    /*}*/
    /*.list(1);*/



    .rot1 {
        width: 124px;
        height: 620px;
        float: left;
        border-radius: 4px;
        background: white;
    }

    .act {
        background: white;
        color: #59ce97;
    }

    .list_2 {
        list-style: none;
        cursor: pointer;
        height: 40px;
        line-height: 54px;
    }

    .list_2 > li {
        text-align: center;
        height: 54px;
    }

</style>
<template>
    <div id="app" :style="{backgroundImage:'url('+img+')'}">
        <header-item></header-item>
        <div class="main">
            <div class="top">
                <span class="sp1">班级列表</span>
                <span class="sp2">语文 · 全部30</span>
            </div>
            <div class="list_box">
                <ul class="list">
                    <router-link active-class="act" :to="{path:'/chinese'}" tag="li" class="su">语文</router-link>
                    <router-link active-class="act" :to="{path:'/math'}" tag="li" class="su">数学</router-link>
                    <router-link active-class="act" :to="{path:'/english'}" tag="li" class="su">英语</router-link>
                    <router-link active-class="act" :to="{path:'/geography'}" tag="li" class="su">地理</router-link>
                    <router-link active-class="act" :to="{path:'/physics'}" tag="li" class="su">物理</router-link>
                </ul>
                <router-view class="rot1"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import headerItem from '@/components/head'

    export default {
        name: 'app',
        components: {
            'header-item': headerItem
        },
        data() {
            return {
                img: require('../../assets/bj.jpg')
            }
        },
        mounted(){
            $('.su').eq(0).css('background','url("../../assets/archives/1.2.png")');
            $('.su').eq(1).css('background','url("../../assets/archives/1.4.png")');
        }
    }
</script>

