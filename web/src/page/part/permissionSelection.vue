<template>
    <div class="main">
        <div class="head">
            咨询部长  ·  权限选择
            <span><img src="../../assets/eye.jpg" id="eye" class="eye" @click="status2=!status2"/></span>
            <span class="iconfont icon-cuo" id="alertBox1"></span>
        </div>
        <div class="top">
            <span class="sp-l">查看<input type="checkbox" name="" value=""/></span>
            <span class="sp-r">操作<input type="checkbox" name="" value=""/></span>
        </div>
        <div class="list_box2">
            <ul class="list2">
                <router-link active-class="act" :to="{path:'/part/permissions/consultation'}" tag="li">咨询</router-link>
                <router-link active-class="act" :to="{path:'/part/permissions/signup'}" tag="li">报名</router-link>
                <router-link active-class="act" :to="{path:'/part/permissions/a'}" tag="li">课表</router-link>
                <router-link active-class="act" :to="{path:'/part/permissions/b'}" tag="li">点名</router-link>
                <router-link active-class="act" :to="{path:'/part/permissions/c'}" tag="li">档案</router-link>
                <router-link active-class="act" :to="{path:'/part/permissions/d'}" tag="li">教务</router-link>
                <router-link active-class="act" :to="{path:'/part/permissions/e'}" tag="li">人事</router-link>
                <router-link active-class="act" :to="{path:'/part/permissions/f'}" tag="li">财务</router-link>
                <router-link active-class="act" :to="{path:'/part/permissions/g'}" tag="li">行政</router-link>
                <router-link active-class="act" :to="{path:'/part/permissions/h'}" tag="li">物品</router-link>
            </ul>
            <router-view class="s-rot"></router-view>
        </div>
        <div class="footer">
            <span class="col1">请允许本角色享有“所属部门层级”的最大查看与操作范围</span>
            <span class="iconfont icon-dui col3"></span>
            <a href="#" class="col2">重要通知，点击查看</a>
        </div>

        <div class="permissionView" v-if="status2">
            <permissionView class="alertBox2"></permissionView>
        </div>
    </div>
</template>

<script>
    import permissionView from '@/page/part/permissionView'

    export default {
        data() {
            return {
                status2: false
            }
        },
        components: {
            permissionView
        },
        mounted: function () {
            $("#alertBox1").click(function () {
                $(this).parents(".permissionSelection").hide()
            })
        }
    }
</script>

<style scoped>
    .main {
        width: 1200px;
        height: 620px;
        background: white;
        border-radius: 4px;
    }

    .head {
        width: 1200px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
        background: #eff3f5;
        margin: 0;
        border-radius: 4px;
    }

    .top {
        height: 50px;
        margin-bottom: 0;
    }

    .top span {
        width: 490px;
        height: 50px;
        line-height: 50px;
        margin: 0;
        text-align: center;
        font-size: 16px;
    }

    .top .sp-l {
        margin-left: 220px;
    }

    .top .sp-r {
        /*background: #F7F8FC;*/
    }

    .list_box2 {
        border-radius: 4px;
    }

    .list_box2:after {
        clear: both;
        content: '.';
        display: block;
    }

    .list_box2:after {
        content: '';
        display: block;
        clear: both;
    }

    .list2 {
        width: 220px;
        height: 462px;
        text-align: center;
        float: left;
        list-style: none;
        background: #f7f8fc;
        border-top: 1px solid #f7f8fc;
        border-bottom: 1px solid #f7f8fc;
    }

    .list2 > li {
        width: 220px;
        height: 46px;
        line-height: 46px;
        cursor: pointer;
        font-size: 16px;
    }

    .s-rot {
        width: 980px;
        height: 462px;
        background: white;
        float: left;

    }

    .s-rot:after {
        clear: both;
        content: '';
        display: block;
    }

    input {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        background: white;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        height: 48px;
        line-height: 48px;
        padding: 0 30px;
    }

    .col1 {
        color: #ff5151;
    }

    .col2 {
        width: 300px;
        color: #54a8ff;
        text-align: right;
    }

    .col3 {
        font-size: 26px;
        color: #31c27c;
    }

    #alertBox1 {
        margin-left: 10px;
    }

    #alertBox1:hover {
        color: red;
    }

    .eye {
        margin-left: 890px;
        cursor: pointer;
    }

    .permissionView {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    .permissionView .alertBox2 {
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -600px;
        margin-top: -310px;
        z-index: 999;
    }
</style>