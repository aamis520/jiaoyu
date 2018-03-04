<template>
    <div id="pre" :style="{backgroundImage:'url('+img+')'}">
        <Heads></Heads>
        <div class="main" v-for="(item,index) in data">
            <div class="left">
                <div class="center">
                    <div class="green"></div>
                    <div class="portrait">
                        <img :src="item.image" alt="" class="por">
                    </div>
                    <div class="name">
                        {{item.full_name}}
                        <!--<span class="el-icon-share"></span>-->
                    </div>
                    <ul class="datas">
                        <li>
                            <img src="../../assets/map/13.png" alt="">
                            &nbsp;&nbsp;<span v-for="(itemrs,indexrs) in item.school_roles" :key="indexrs">{{itemrs.thrid_dept_name}}</span>
                        </li>
                        <li>
                            <img src="../../../static/home-icon/school.png" alt="">
                            &nbsp;&nbsp;<span v-for="(itemxq,indexxq) in item.school_roles" :key="indexxq">{{itemxq.school_name}}</span>
                        </li>
                    </ul>
                </div>
                <div class="birthday">
                    <el-row>
                        <el-col :span="12"  style="padding-left: 30px;"><div class="grid-content bg-purple" style="border-right: dotted 1px #666666;">
                            <div style="color: #31c2b6">
                                {{myfilter(item.brithday).substring(0,2)}}.<span style="font-size: 8px;">{{myfilter(item.brithday).substring(3,6)}}</span>
                            </div>
                            <div class="bott">
                                生日
                            </div>
                        </div></el-col>
                        <el-col :span="12" style="padding-right: 30px"><div class="grid-content bg-purple-light">
                            <div style="color: #79d2ca;">
                                {{myfilter(item.induction_time).substring(0,2)}}.<span style="font-size: 8px;">{{myfilter(item.induction_time).substring(3,6)}}</span>
                            </div>
                            <div class="bott">
                                入职日期
                            </div>
                        </div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12" style="padding-left: 30px;border-top: 1px #666666 dotted;"><div class="grid-content bg-purple" style="border-right: dotted 1px #666666;">
                            <div style="color: #f6945a;">
                                {{item.teaching_time_year}}<span style="font-size: 8px;">年{{item.teaching_time_month}}月</span>
                            </div>
                            <div class="bott">
                                工龄
                            </div>
                        </div></el-col>
                        <el-col :span="12" style="padding-right: 30px;border-top: 1px #666666 dotted;"><div class="grid-content bg-purple-light">
                            <div style="color: #39bbff">
                                暂无
                            </div>
                            <div class="bott">
                                积分
                            </div>
                        </div></el-col>
                    </el-row>
                </div>
                <div class="details">
                    <div style="background: #f7f8fc;">
                        <i><img src="../../../static/perArchives/2_21.gif" alt=""></i>
                        <span style="color:#31c27c;">详细信息</span>
                    </div>
                    <!--<div>-->
                        <!--<i><img src="../../../static/perArchives/2_30.gif" alt=""></i>-->
                        <!--<span>人事变动</span>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<i><img src="../../../static/perArchives/2_03.gif" alt=""></i>-->
                        <!--<span>工作评定</span>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<i><img src="../../../static/perArchives/2_36.gif" alt=""></i>-->
                        <!--<span>个人考勤</span>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="right">
                <div class="detailed">
                    <span>详细信息</span>
                    <div>
                        <i><img src="../../../static/perArchives/2_03.gif" alt="" @click="Jump(com)"></i>
                        <i style="margin-right: 20px;"><img src="../../../static/perArchives/2_06.gif" alt=""></i>
                    </div>
                </div>
                <div class="basic">
                    <div class="bas-t">
                        <i></i>
                        <p>基本信息</p>
                    </div>
                    <div class="bas1">
                        <el-row>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>员工姓名： {{item.full_name}}</p>
                                <p>员工昵称： {{item.free_name}}</p>
                                <p>显示设置： {{item.name_type=="fullName"?"姓名":item.name_type=="nikeName"?"昵称":"自定义"}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple-light">
                                    <p>手机号码： {{item.account}}</p>
                                    <p>岗位性质： {{item.position_nature=="normal"?"正式":"试用"}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>生      日： {{myfilter(item.brithday)}}</p>
                            </div></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>学历等级： {{enducation_level}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple-light">
                                <p>居住地址： {{item.address}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple">
                            </div></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>入职时间： {{myfilter1(item.induction_time)}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple-light">
                                <p>转正时间： {{myfilters(item.become_regular_time)}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>合同期限： {{myfilters(item.contract_begin_time)}} 至 {{myfilters(item.contract_end_time)}}</p>
                            </div></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>岗位角色： <span v-for="(itemrs1,indexrs1) in item.school_roles" :key="indexrs1">{{itemrs1.thrid_dept_name}}</span></p>
                            </div></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>能否授课： {{item.is_teach == true?"能":"不能"}}</p>
                            </div></el-col>
                        </el-row>
                    </div>
                    <div class="bas-t">
                        <i class="i1"></i>
                        <p>详细信息</p>
                    </div>
                    <div class="bas2">
                        <el-row>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>员工编号： {{item.person_number}}</p>
                                <p>身份证号： {{item.id_number}}</p>
                                <p>电子邮箱： {{item.email}}</p>
                                <p>银行卡号： {{item.bank_card_number}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple-light">
                                <p>婚姻状况： {{item.marital_status=="married" ? "已婚":item.marital_status=="unmarried" ? "未婚":"离异"}}</p>
                                <p>微信号码： {{item.wechat_number}}</p>
                                <p>户籍地址： {{item.permanent_address}}</p>
                                <p>所属银行： {{item.owned_bank}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>生育状况： {{item.fertility_status=="noChildren"?"未育":"已育"}}</p>
                                <p>Q Q 号码： {{item.qq_number}}</p>
                                <p class="she">社保卡号：{{item.social_security_number}}</p>
                            </div></el-col>
                        </el-row>
                    </div>
                    <div class="bas-t">
                        <i class="i3"></i>
                        <p>求学经历</p>
                    </div>
                    <div class="bas3">
                        <el-row v-for="(itemq,index1) in item.learning_experience" :key="index1">
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>就读时间： {{itemq.learning_begin_time}}至{{itemq.learning_end_time}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple-light">
                                <p>就读学校： {{itemq.learning_school}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>就读专业： {{itemq.learning_major}}</p>
                            </div></el-col>
                        </el-row>
                    </div>
                    <div class="bas-t">
                        <i class="i4"></i>
                        <p>工作履历</p>
                    </div>
                    <div class="bas3">
                        <el-row v-for="(itemg,index2) in item.job_experience" :key="index2">
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>工作时间： {{itemg.job_begin_time}}至{{itemg.job_end_time}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple-light">
                                <p>所在机构： {{itemg.job_unit}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>工作职位： {{itemg.job_position}}</p>
                            </div></el-col>
                        </el-row>
                    </div>
                    <div class="bas-t">
                        <i class="i5"></i>
                        <p>关系人</p>
                    </div>
                    <div class="bas3">
                        <el-row v-for="(item1,index3) in item.relation_list" :key="index3">
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>夫/妻： {{item1.relation_person}}</p>
                                <p>子/女： {{item1.relation_child_name}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple-light">
                                <p>手机号码： {{item1.relation_phone}}</p>
                                <p>出生日期： {{item1.relation_child_birthday}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>工作单位： {{item1.relation_unit}}</p>
                                <p>年级： {{item1.relation_child_grade}}</p>
                            </div></el-col>
                        </el-row>
                    </div>
                    <div class="bas-t">
                        <i class="i6"></i>
                        <p>其他</p>
                    </div>
                    <div class="bas3">
                        <el-row>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>面试资格 :  {{item.interview_qualification == true?"有":"无"}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple-light">
                                <p>试听资格： {{item.audition_qualification == true?"有":"无"}}</p>
                            </div></el-col>
                            <el-col :span="8"><div class="grid-content bg-purple">
                                <p>显示范围： 所有人可见</p>
                            </div></el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Heads from '../../components/head'
    import Const from '../../common/const'
    export default {
        components:{
            Heads
        },
        data(){
            return{
                img:require('../../assets/bj.jpg'),
                com:this.$route.params.id,
                data:"",
                enducation_level:"",
                studyArrJson:[
                    {'stuId':'doctor','name':'博士研究生','showImg':false},
                    {'stuId':'master','name':'硕士研究生','showImg':false},
                    {'stuId':'undergraduate','name':'本科','showImg':false},
                    {'stuId':'specialty','name':'专科','showImg':false},
                    {'stuId':'highSchool','name':'高中','showImg':false},
                    {'stuId':'doctorReading','name':'博士研究生在读','showImg':false},
                    {'stuId':'masterReading','name':'硕士研究生在读','showImg':false},
                    {'stuId':'postDoctoral','name':'博士后','showImg':false}
                ],
            }
        },
        computed:{
//            //储存当前编辑的对象
//            editArr(){
//                let editObj = this.getNowListDate[this.nowEditCol];
//                console.log(editObj)
//                /*return{
//                    "full_name" : editObj.full_name,
//                    "account" : editObj.account,
//                    "school_roles" : editObj.school_roles,
//                }*/
//            }


        },
        beforeDestroy(){
            //eventBus.$off('huoID');
        },
        mounted() {
            let _this = this
            var urls = Const.staff+"v1/dossier/staff/findStaffById?accessToken=aaaa&account_id="+this.com;
            this.axios.post(urls).then((res) => {
                console.log("找到",res.data.messages)
                this.data = res.data.messages;
            }).catch(function(error) {
                console.log("找不到");
            });

            this.studyArrJson.map((ele,index)=>{
                console.log(ele.stuId);
                if(this.data.enducation_level == ele.stuId){
                    this.enducation_level = ele.name;
                }
            });
        },
        methods:{
            myfilter(now){
                var time = new Date(now);
                var year = time.getFullYear();
                var month = time.getMonth()+1;
                var day = time.getDate();
                if(month<10){
                    month = "0"+month;
                }
                if(day<10){
                    day = "0"+day;
                }
                return month+"-"+day;
            },
            myfilters(now){
                var time = new Date(now);
                var year = time.getFullYear();
                var month = time.getMonth()+1;
                var day = time.getDate();
                return year+"-"+month+"-"+day;
            },
            myfilter1(now) {
                var times = new Date();//今天的时间
                var time = new Date(now);//入职时间
                var years = times.getFullYear();//现在的年份
                var months = times.getMonth() + 1;//现在的月份
                var year = time.getFullYear();//入职的年份
                var month = time.getMonth() + 1;//入职的月份
                var y = years - year;
                var m = months - month;
                if (y == 0) {
                    return m + "月";
                } else {
                    return y + "年" + m + "月";
                }
                if (m < 0) {
                    return y - 1;
                    m + 12;
                }
            },
            Jump(data){
                console.log(data);
                this.$router.push('/alter/'+data)
            }

        }
    }
</script>

<style lang="less" scoped>
    #pre {
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
    .main{
        width: 1350px;
        margin: 50px auto;
        position: relative;
        overflow: hidden;
    }
    .left{
        width:280px;
        height:940px;
        float: left;
        border-radius: 5px;
        .green{
            width:280px;
            height:12px;
            background: #31c27c;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .center{
            width:280px;
            height:254px;
            background: #ffffff;
            .portrait{
                width:78px;
                height:78px;
                margin-top: 25px;
                margin-left: 100px;
                .por{
                    width: 100%;
                    height:100%;
                    border-radius: 50%;
                }
            }
        }
        .name{
            width: 100%;
            margin-top: 23px;
            text-align: center;
            .el-icon-share{
                color: palevioletred;
            }
        }
        .datas{
            margin-top: 28px;
            li{
                text-indent: 3em;
                line-height: 32px;
                color: #666666;
                img{
                    margin-top: 3px;
                }
            }
        }
        .birthday{
            width: 280px;
            height:130px;
            margin-top: 12px;
            background: #ffffff;
            border-radius: 5px;
            .el-row{
                height:65px;
                .el-col {
                    height:65px;
                    .bott{
                        color: #666666;
                        font-size: 12px;
                    }
                    div{
                        margin-top: 12px;
                        text-align: center;
                    }
                }
            }
        }
        .details{
            width:280px;
            height:528px;
            margin-top: 12px;
            background: #ffffff;
            border-radius: 5px;
            div{
                width:280px;
                height:60px;
                line-height: 60px;
                border-radius: 5px;
                i{
                    float: left;
                    margin-left: 30px;
                }
                span{
                    float: right;
                    margin-right: 30px;
                    color: #666666;
                }
            }
        }

    }
    .right{
        width:1010px;
        float: left;
        border-radius: 5px;
        margin-left: 10px;
        .detailed{
            width:1010px;
            height:52px;
            display: flex;
            align-items: center;
            background: #ffffff;
            border-radius: 5px;
            justify-content: space-between;
            i{
                float: right;
                margin-right: 40px;
            }
            span{
                color: #31c27c;
                margin-left: 30px;
            }
        }
        .basic{
            width: 1010px;
            height: 1224px;
            margin-top: 10px;
            background: #ffffff;
            border-radius: 5px;
            p{
                text-indent: 20px;
            }
            .bas-t{
                width:977px;
                height: 70px;
                /*border: 1px solid black;*/
                margin: 0 auto;
                line-height: 70px;
                i{
                    display: inline-block;
                    width:26px;
                    height:26px;
                    margin-left: 20px;
                    margin-top: 20px;
                    float: left;
                    background: url(../../../static/perArchives/2_11.gif) no-repeat 100% 100%;
                }
                .i5{
                    background: url(../../../static/perArchives/3_07.gif) no-repeat 100% 100%;
                    }
                .i6{
                    background: url(../../../static/perArchives/3_14.gif) no-repeat 100% 100%;
                }
                .i4{
                    background: url(../../../static/perArchives/3_09.gif) no-repeat 100% 100%;
                    }
                .i3{
                    background: url(../../../static/perArchives/3_11.gif) no-repeat 100% 100%;
                    }
                .i1{
                    background: url(../../../static/perArchives/3_03.gif) no-repeat 100% 100%;
                }
                p{
                    float: left;
                    margin-left: 10px;
                    color: #31c27c;
                }
            }
            .bas3{
                width:977px;
                margin: auto;
                p{
                    line-height: 39px;
                }
            }
            .bas2{
                width:977px;
                height: 150px;
                margin: auto;
                .grid-content,.grid-content,.bg-purple{
                    p{
                        line-height: 37px;
                    }
                    .she{
                        margin-top: 37px;
                    }
                }
            }
            .bas1{
                width:977px;
                margin: auto;
                .grid-content{
                    p{
                        line-height: 34px;
                    }
                }
                .bott{
                    margin-top: 40px;
                }
                .bott2{
                    margin-top: 20px;
                }
                .bott3{
                    margin-top: 100px;
                }
            }

        }
    }





</style>


