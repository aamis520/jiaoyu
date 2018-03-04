<template>
    <div id="app" :style="{backgroundImage:'url('+img+')'}">
        <head-item></head-item>
        <div class="main">
            <div class="top">
                <span class="sp1">设置</span>
                <span class="sp2">
                	{{title}}
                	<!--<img class="img_t" src="../../../static/home-campus/title__book.png" />-->
                </span>
            </div>
            <div class="list_box">
                <ul class="list">
                    <router-link active-class="act" :to="{path:'/branCampus/accountView' }" tag="li">账号查看</router-link>
                    <router-link active-class="act" :to="{path:'/branCampus/classroomSetting' }" tag="li">教室设置
                    </router-link>
                    <router-link v-if="false" active-class="act" :to="{path:'/branCampus/checkClassChain'}" tag="li">查看课链
                    </router-link>
                    <router-link active-class="act" :to="{path:'/branCampus/openingNewClass' }" tag="li">开设新班
                    </router-link>
                    <router-link v-if="false" active-class="act" :to="{path:'/branCampus/privilegeGroup'}" tag="li">
                        建特权组
                    </router-link>
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
            'head-item': headItem
        },
        data() {
            return {
                img: require('../../../images/system-campus/bj.jpg'),
                title: '分校设置 · '+ this.$store.state.OldStore.fxTitle
            }
        },
        updated(){
        	this.title = '分校设置 · '+ this.$store.state.OldStore.fxTitle
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>
    #app {
        font-family: '微软雅黑', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        list-style: none;
        height: 100%;
        /*background: url(../../assets/bj.jpg) no-repeat;*/
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
        position: relative;
    }

		.img_t{
			position: absolute;
    		right: 30px;
    		top: 13px;
		}

    .list_box {
        width: 280px;
        height: 626px;
        border-radius: 4px;
        background: #f7f8fc;
    }

    .list {
        width: 280px;
        height: 626px;
        text-align: center;
        font-size: 14px;
        list-style: none;
        padding-top: 20px;
    }

    .list > li {
        width: 280px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
    }

    .rot1 {
        width: 1008px;
        border-radius: 4px;
        position: absolute;
        top: 60px;
        left: 292px;
        background: none;
        padding: 0;
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
