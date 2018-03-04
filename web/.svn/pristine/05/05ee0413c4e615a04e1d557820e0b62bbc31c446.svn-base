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
        margin: 50px auto;
        position: relative;
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
    }

    .top .sp2 {
        width: 1008px;
        text-indent: 30px;
    }

    .list_box {
        min-height: 626px;
        overflow: hidden;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        padding-bottom: 10px;
    }

    .list {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        list-style: none;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
    }

    .rot1 {
        margin-top: 50px;
        min-height: 600px;
        background: #fff;
    }

    .list > li {
        width: 120px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        display: inline-block;
    }

    .list_2 > li {
        text-align: center;
    }
</style>
<template>
    <div id="app" :style="{backgroundImage:'url('+img+')'}">

        <header-item></header-item>
        <div class="main">
            <div class="list_box">
                <ul class="list">
                    <router-link active-class="act" :to="{path:'/finance/incomeForm'}" tag="li">财务收入</router-link>
                    <router-link active-class="act" :to="{path:'/finance/expenditureForm'}" tag="li">财务支出</router-link>
                </ul>
                <router-view class="rot1"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import headItem from '@/components/head'

    export default {
        name: 'app',
        components: {
            "header-item": headItem
        },
        data() {
            return {
                img: require('../../assets/bj.jpg')
            }
        }
    }
</script>


