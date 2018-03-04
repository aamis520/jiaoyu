<style lang="less" scoped>
    .approve{
        color: #333;
        .top{
            width: 928px;
            height:48px ;
            background-color: #fff;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 28px 0 22px;
            span{
                font-size: 16px;
                color:#319863 ;
            }
        }
        .scion{
            width: 977px;
            margin-top: 12px;
            position: relative;
            .no-page{
                background-color: #fff;
                height: 169px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                img{
                    width: 180px;
                    height: 90px;
                }
                p{
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    text-align: center;
                    height: 42px;
                    line-height: 42px;
                    font-size: 14px;
                    color: #999;
                }
            }
            .ico-init{
                position: absolute;
                right: 18px;
                bottom: 0px;
                width: 70px;
                height: 70px;
            }
        }
    }
</style>
<template>
    <div class="approve">
        <div class="top">
            <span>积分商城</span>
            <!--<i class="edit ico-init ico-edit" @click="cancelBool=!cancelBool"></i>-->
        </div>
        <div class="scion">
            <div class="no-page">
                <img src="../../../images/system-head/nopage.png" alt="">
                <p>您还没有兑换任何课程，点击下方加号即可兑换</p>
                <i class="ico-init ico-addBig"></i>
            </div>
        </div>
        <inWindew></inWindew>
    </div>
</template>
<script>
    import ElRadio from "../../../../node_modules/element-ui/packages/radio/src/radio.vue";
    import system  from  '@commonJS/const';
    import inWindew from './integral-window'
    export default {
        components: {
            ElRadio,
            inWindew
        },
        data() {
            return {

            };
        },
        methods:{

        },
        mounted(){

        }
    };
</script>
