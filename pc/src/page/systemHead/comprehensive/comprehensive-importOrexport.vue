<style lang="less" scoped>
 .integralSet{
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
     }

 }
</style>
<template>
    <div class="integralSet">
        <div class="fixed">
            <span v-for="(item,index) in navSel"  @click = "cut(item,index)" :class="{'sel_click' : act == index}">{{item.name}}</span>
        </div>
        <div class="top">
            <span>导入导出·模板设置</span>
        </div>
        <component :is="currentView"></component>
    </div>
</template>
<script>
    import toLead from "../components/composite-toLead"
    import educeAll from "../components/composite-educe"
    export default {
        components: {
            toLead,
            educeAll
        },
        data() {
            return {
                    currentView : "toLead",
                    navSel :[
                        {
                            name :"导入",
                            currentView : 'toLead'
                        },
                        {
                            name :"导出",
                            currentView : 'educeAll'
                        }
                    ],//动态组件
                    act: 0
            };
        },
        methods:{
            cut(item,i){
                this.act = i;
                this. currentView = item.currentView;
            }
        }
    };
</script>
