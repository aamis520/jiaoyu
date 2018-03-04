<style lang="less" scoped>
    .integral {
        color: #333;
        position: relative;
        .fixed{
            position: absolute;
            width: 977px;
            height: 50px;
            top:-50px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            span{
                margin-right: 60px;
                cursor: pointer;
            }
            .sel_click{
                color: #319863;
                border-bottom: 1px solid #319863;
            }
        }
        .top {
            width: 928px;
            height: 48px;
            background-color: #fff;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 28px 0 22px;
            span {
                font-size: 16px;
                color: #319863;
            }
            .edit {
                width: 25px;
                height: 25px;
            }
        }
    }
</style>
<template>
    <div class="integral">
        <div class="fixed">
            <span v-for="(item,index) in navSel"  @click = "cut(item,index)" :class="{'sel_click' : act == index}">{{item.name}}</span>
        </div>
        <component :is="currentView"></component>
    </div>
</template>
<script>
    import integralSet from "../components/composite-integralSet"
    import shopingmall from "../components/composite-shopingmall"
    export default {
        components: {
            integralSet,
            shopingmall
        },
        data() {
            return {
                currentView : "integralSet",
                navSel :[
                    {
                        name :"积分设置",
                        currentView : 'integralSet'
                    },
                    {
                        name :"积分商城",
                        currentView : 'shopingmall'
                    }
                ],//动态组件
                title : "积分设置",
                act: 0
            }
        },
        methods: {
            cut(item,i){
                this.act = i;
                this. currentView = item.currentView;
            }

        },
        mounted(){

        }
    };
</script>
