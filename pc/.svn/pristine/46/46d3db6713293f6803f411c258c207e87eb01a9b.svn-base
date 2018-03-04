<template>
    <div class="main">
        <div class="left">
            <div class="left_top">
                员工档案
            </div>
            <div class="uls">
                <div class="big">
                    <button v-for="(itemLeft,indexLeft) in arrLeft" :key="indexLeft" @click="toshow(itemLeft.data,indexLeft,itemLeft.name)" :class="indexLeft!=zindex ? itemLeft.classone : itemLeft.classtwo">{{itemLeft.name}}</button>
                </div>
                <div class="some">
                    <component :is="which_to_show" v-on:zbData="zbData"></component>
                </div>
            </div>
        </div>
        <div class="right">
            <router-view v-on:zbData="zbData"></router-view>
            <div class="setting" v-if="settingData">
                <p>没有任何数据</p>
            </div>
            <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="nowPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageAllTotal">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import contapi from '@commonJS/const'
    import zb from './show/zb'
    import dq from './show/dq'
    import xq from './show/xq'
    import sr from './show/sr'
    import xl from './show/xl'
    import js from './show/js'
    export default {
        components:{
            "zb":zb,
            "dq":dq,
            "xq":xq,
            "sr":sr,
            "xl":xl,
            "js":js
        },
        data(){
            return{
                arrLeft:[
                    {name:"总部",data:"zb",classone:"zb_one",classtwo:"zb_two"}
                    ,{name:"大区",classone:"bq_one",classtwo:"bq_two"}
                    ,{name:"地区",data:"dq",classone:"dq_one",classtwo:"dq_two"}
                    ,{name:"校区",data:"xq",classone:"xq_one",classtwo:"xq_two"}
                    ,{name:"教师",data:"js",classone:"js_one",classtwo:"js_two"}
                    ,{name:"生日",data:"sr",classone:"sr_one",classtwo:"sr_two"}
                    ,{name:"校龄",data:"xl",classone:"xl_one",classtwo:"xl_two"}
                ],
                which_to_show:"zb",//默认打开总部
                nowPage: 1,//当前页面
                pageSize:10,//每次请求每页多少条
                pageAllTotal:100,//总的条数
                //子传父员工的数据
                zbDatas:"",
                //控制按钮默认样式或者点击样式的转换
                zindex:0,
                //分页配置对象
                objs:{},
                //无数据时的显示内容
                settingData:false,
                // 员工档案大列表name，//部门 · 人事部 · 8人
                zname:"总部",
                ranks:"",
                s:"",
                tTrue:true
            }
        },
        computed: {
        },
        mounted() {
            //首次刷新页面时拼接路径的对象
            this.objs={
                accessToken:this.$ls.get('USER_INFO').accessToken,
                head_school_id:this.$ls.get("USER_INFO").headSchoolId,
                dept_id:"5a0d415855ebf7667fc90609",
                dept_type:'HEADSCHOOL',
                pageNumber:this.nowPage,
                pageSize:this.pageSize
            }
            //首次执行获取员工的函数
            this.Jump();
            //将分页信息给VUEX
            this.storage();
            //将部门添加到Vuex
            this.$store.commit("GET_BIGNAME",this.zname);
        },
        methods:{
            //动态路由
            toshow(x,y,z){
               this.which_to_show = x;
               this.zindex = y;
                this.zname = z;
                this.$store.commit("GET_BIGNAME",this.zname);
            },
            //elementui 分页
            handleSizeChange(val) {
                //改变路径对象的分页信息
                this.objs.pageSize = val;
                //再次执行获取data的函数
                this.Jump();
                //将分页信息放到vuex里，供子集使用
                this.storage();
            },
            handleCurrentChange(val) {
                //同上
                this.objs.pageNumber = val;
                this.Jump();
                this.storage();
            },

            //默认获取全部的员工
            Jump(){
                //页面刷新默认是总校的员工
                    let urlzb = contapi.staff+"v1/dossier/staff/getStaffListPage";
                    this.axios.post(urlzb,this.objs).then(res => {
                        if(res.messages.data==""){
                            this.settingData = true;
                        }else{
                            this.settingData = false;
                        }
                        console.log(res);
                        this.$store.commit("SET_ULS_ID",res.messages);
                    }).catch(error => {
                        console.log(error);
                    });
            },
            //将分页的信息存到vueX
            storage(){
                let objs = {
                    nowPage :  this.objs.pageNumber,
                    pageSize:this.objs.pageSize
                }
                this.$store.commit("GET_FEN",objs);
            },
            //子传父
            zbData(data){
                //将子集的路径对象获取到
                this.objs = data;
                this.Jump();
            }
    },
        $watch: {

        }
    }
</script>

<style lang="less" scoped>
    @mc:#31c27c;
    .main{
        clear:both;
    }
    .left{
        width: 280px;
        height: 686px;
        float: left;
    }
    .left_top{
        height: 52px;
        line-height: 52px;
        text-align: center;
        border-radius: 5px;
        color: @mc;
        background: #fff url("../../images/map/8.png") no-repeat 80px 18px;
    }
    .uls{
        margin-top: 12px;
        width: 280px;
        height: 620px;
        background: #ffffff;
    }
    .big{
        width: 140px;
        height: 620px;
        background: #f7f8fc;
        float: left;
        button{
            width: 140px;
            height: 54px;
            line-height: 54px;
            border: none;
            outline:none;
            cursor:pointer;
        }
        /*总部*/
        .zb_one{
            background: url("../../images/map/1.png") no-repeat 30px 18px;
        }
        .zb_two{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/1-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        button:nth-child(1):hover{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/1-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        /*大区*/
       .bq_one{
           background: url("../../images/map/2.png") no-repeat 30px 18px;
       }
        .bq_two{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/2.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        button:nth-child(2):hover{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/2.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        /*地区*/
        .dq_one{
            background: url("../../images/map/3.png") no-repeat 30px 18px;
        }
        .dq_two{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/3-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        button:nth-child(3):hover{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/3-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        /*校区*/
        .xq_one{
            background: url("../../images/map/4.png") no-repeat 30px 18px;
        }
        .xq_two{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/4-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        button:nth-child(4):hover{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/4-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        /*教师*/
        .js_one{
            background: url("../../images/map/5.png") no-repeat 30px 18px;
        }
        .js_two{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/5-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        button:nth-child(5):hover{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/5-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        /*生日*/
        .sr_one{
            background: url("../../images/map/6.png") no-repeat 30px 18px;
        }
        .sr_two{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/6-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        button:nth-child(6):hover{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/6-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        /*校龄*/
        .xl_one{
            background: url("../../images/map/7.png") no-repeat 30px 18px;
        }
        .xl_two{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/7-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
        button:nth-child(7):hover{
            color: @mc;
            background-color: #ffffff;
            background-image:url("../../images/map/7-1.png"),url("../../images/map/35.png");
            background-repeat: no-repeat, no-repeat;
            background-position: 30px 18px,120px 18px;
        }
    }
    .some{
        width: 140px;
        height: 620px;
        /*background: pink;*/
        float: left;
    }
    .right{
        width: 1008px;
        height: 686px;
        float: right;
        position: relative;
    }
    .right_top{
        width: 1008px;
        height: 52px;
        background: #ffffff;
        border-radius: 5px;
    }
    .block{
        width: 1008px;
        height: 60px;
        background: #fff;
        right: 0;
        text-align: center;
        padding-top: 20px;
        margin-top: 12px;
        margin-right: 0px;
        float: right;
        border-radius: 5px;
    }
    .setting{
        width: 1008px;
        height: 620px;
        border-radius: 5px;
        position: absolute;
        top:64px;
        left: 0;
        background: #ffffff url("../../images/map/25.png") no-repeat 380px 200px;
        p{
            margin-top: 370px;
            text-align: center;
            font-size: 16px;
            color: #999999;
        }
    }

</style>


