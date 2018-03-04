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
    }

    .top .sp2 {
        width: 1008px;
        text-indent: 30px;
    }

    .list_box {
        width: 280px;
        height: 626px;
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
        height: 626px;
        text-align: center;
        font-size: 14px;
        float: left;
        list-style: none;
        padding-top: 20px;
    }

    .list > li {
        width: 154px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
    }

    .rot1 {
        width: 124px;
        height: 600px;
        float: left;
        border-radius: 4px;
        background: white;
        padding-top: 20px;
    }

    .act {
        background: white;
        color: #59ce97;
    }

    .list_2 {
        list-style: none;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
    }

    .list_2 > li {
        text-align: center;
    }

</style>
<template>
    <div id="app" :style="{backgroundImage:'url('+img+')'}">
        <header-item></header-item>
        <div class="main">
            <div class="top">
                <span class="sp1">设置</span>
                <span class="sp2">动态数据</span>
            </div>
            <div class="list_box">
                <ul class="list">
                    <!--<router-link active-class="act" :to="{path:'/campus'}" tag="li">校区</router-link>-->
                    <router-link active-class="act" :to="{path:'/part'}" tag="li">部门</router-link>
                    <router-link active-class="act" :to="{path:'/accountNumber'}" tag="li">账号</router-link>
                    <!--<router-link active-class="act" :to="{path:'/finance'}" tag="li">财务</router-link>
                    <router-link active-class="act" :to="{path:'/comprehensive'}" tag="li">综合</router-link>
                    <router-link active-class="act" :to="{path:'/curriculum'}" tag="li">课程</router-link>
                    <router-link active-class="act" :to="{path:'/class'}" tag="li">班级</router-link>
                    <router-link  active-class="act" :to="{path:'/vip'}" tag="li">VIP</router-link>
                    <router-link active-class="act" :to="{path:'/discount'}" tag="li">优惠</router-link>
                    <router-link active-class="act" :to="{path:'/goods'}" tag="li">物品</router-link>
                    	<router-link  active-class="act" :to="{path:'/workTime'}" tag="li">考勤</router-link>-->
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
                img: require('../assets/bj.jpg')
            }
        }
    }
</script>

