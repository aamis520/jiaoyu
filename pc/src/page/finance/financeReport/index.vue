<style scoped>
    #app {
        font-family: '微软雅黑', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        list-style: none;
        height: 100%;
        background-size: 100% 100%;
        background-position: 0 58px;
    }

    .main {
        width: 1300px;
        margin: 0 auto;
        position: relative;
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
    }

    .top .sp2 {
        width: 1008px;
        text-indent: 30px;
    }

    .list {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
    }

    .list > li {
        width: 120px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        display: inline-block;
    }

    .rot1ABC {
        min-height: 600px;
        background: #fff;
        overflow: hidden;
        width: 100%;
    }

    .list_2 > li {
        text-align: center;
    }
</style>
<template>
    <div id="app">

        <header-item></header-item>
        <ul class="list" style="visibility: hidden;">
            <!--<router-link active-class="act" :to="{path:'/finance/incomeReport'}" tag="li">收入报表</router-link>-->
            <!--<router-link active-class="act" :to="{path:'/finance/expenditureReport'}" tag="li">支出报表</router-link>-->
        </ul>

        <div class="main">
            <router-view class="rot1ABC"></router-view>
        </div>

    </div>
</template>

<script>
      import headItem from '@components/head'

    export default {
        name: 'app',
        components: {
            'header-item': headItem
        },
        data() {
            return {
            }
        }
    }
</script>


