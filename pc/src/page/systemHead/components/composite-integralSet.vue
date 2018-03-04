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
            font-size: 16px;
            span{
                margin-right: 60px;
            }
            .sel_click{
                color: #319863;
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
        .section{
            width: 979px;
            .grade-set {
                background-color: #fff;
                min-height: 185px;
                padding: 0 22px;
                margin-top: 12px;
                border-radius: 5px;
                .sec-top {
                    height: 49px;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px dashed #999;
                    position: relative;
                    span {
                        color: #319863;
                        font-weight: 500;
                        margin-right: 8px;
                    }
                    .addRed{
                        color: red;
                    }
                }
                .sec_section{
                    margin-top: 26px;
                    display: flex;
                    flex-wrap: wrap;
                    input{
                        width: 26px;
                        border-bottom: 1px solid #999;
                        text-align: center;
                    }
                    /*.wire{*/
                        /*display: inline-block;*/
                        /*width: 91px;*/
                        /*border-bottom: 1px solid #319863;*/
                        /*color: #999;*/
                        /*font-size: 12px;*/
                        /*padding-bottom: 2px;*/
                    /*}*/
                    div{
                        margin-right: 86px;
                        margin-bottom: 25px;
                        span:nth-of-type(1){
                            margin-right: 24px;
                        }
                    }
                    div:nth-of-type(1){
                        span:nth-of-type(2){
                            margin-right: 15px;
                        }
                    }
                    div:nth-of-type(2){
                        span:nth-of-type(2){
                            margin-right: 34px;
                        }
                    }
                    div:nth-of-type(3){
                        input{
                            width: 42px;
                        }
                        span:nth-of-type(2){
                            margin-right: 10px;
                        }
                    }
                }
            }
            .self-motion{
                .self_fees{
                    margin-top: 31px;
                    display: flex;
                    input{
                        width: 40px;
                        border-bottom: 1px solid #999;
                        text-align: center;
                    }
                    p{
                        margin-right: 135px;
                    }
                }
            }
            .addStuPart{
                .show_List{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 20px;
                    p{
                        width: 33.33%;
                        margin-bottom: 21px;
                        span:nth-of-type(2){
                            position: relative;
                            margin-left: 24px;
                        }
                        input{
                            border-bottom: 1px solid #999;
                            font-size: 12px;
                        }
                    }
                    p:last-child{
                        input:nth-of-type(1){
                            width: 95px;
                            padding-left: 20px;
                        }
                        input:nth-of-type(2){
                            width: 29px;
                            text-align: center;
                        }
                        i{
                            margin-bottom: -7px;
                        }
                    }
                }
            }
            .addTePartAdd{
                .playAdd{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 32px;
                }
                p{
                    width: 33.33%;
                    margin-bottom: 21px;
                    span{
                        position: relative;
                    }
                    input{
                        border-bottom: 1px solid #333;
                        font-size: 12px;
                        width: 25px;
                        text-align: center;
                    }
                }
            }
        }
        .sub-bt{
            width: 977px;
            height: 46px;
            background-color: #fff;
            border-radius: 5px;
            margin-top: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
<template>
    <div class="integral">
        <div class="top">
            <span>积分设置</span>
            <i class="edit ico-init ico-edit" @click="cancelBool=!cancelBool"></i>
        </div>
        <div class="section">
            <div class="grade-set">
                <div class="sec-top">
                    <span>学生积分·设置</span>
                </div>
                <div class="sec_section">
                    <div>
                        <span>全体学生积分</span>
                        <span><el-radio v-model="allStuiInRa" label="1">
                          每年  <el-date-picker
                            v-model="value8"
                            type="date"
                            format = "MM-dd"
                            placeholder="选择日期"
                            default-value="10-01">
                              </el-date-picker>，自动清零
                       </el-radio> </span>
                        <span><el-radio v-model="allStuiInRa" label="2">不清零</el-radio> </span>
                    </div>
                    <div>
                        <span>学生流失后，积分</span>
                        <span><el-radio v-model="washSelRa" label="1">
                            清零
                       </el-radio> </span>
                        <span><el-radio v-model="washSelRa" label="2">积分不清零</el-radio> </span>
                    </div>
                    <div>
                        <span>额外赠送积分 , 超过 <input type="te " v-model="surpassPart"> 分，需要审批，审批人</span>
                        <span><el-radio v-model="extraPartRa" label="1">
                            <span class="wire">{{selPerson}}</span>
                       </el-radio> </span>
                        <span><el-radio v-model="extraPartRa" label="2"><span class="wire">{{branchRote}}</span></el-radio> </span>
                    </div>
                </div>
            </div>

            <div class="grade-set">
                <div class="sec-top">
                    <span>教师积分·设置</span>
                </div>
                <div class="sec_section">
                    <div>
                        <span>全体教师积分</span>
                        <span><el-radio v-model="allTeaiInRa" label="1">
                          每年 <input type="text" v-model="monthTe">  月 <input type="text" v-model="dateTe"> 日，自动清零
                       </el-radio> </span>
                        <span><el-radio v-model="allTeaiInRa" label="2">不清零</el-radio> </span>
                    </div>
                    <div>
                        <span>教室离职后，积分</span>
                        <span><el-radio v-model="washTeSelRa" label="1">
                            清零
                       </el-radio> </span>
                        <span><el-radio v-model="washTeSelRa" label="2">积分不清零</el-radio> </span>
                    </div>
                    <div>
                        <span>额外赠送积分 , 超过 <input type="text" v-model="teachPart"> 分，需要审批，审批人</span>
                        <span><el-radio v-model="extePartRa" label="1">
                            <span class="wire">{{selTePerson}}</span>
                       </el-radio> </span>
                        <span><el-radio v-model="extePartRa" label="2"><span class="wire">{{branchTeRote}}</span></el-radio> </span>
                    </div>
                </div>
            </div>
            <div class="self-motion grade-set">
                <div class="sec-top">
                    <span>学生积分· 自动增加 · 规则设置</span>
                </div>
                <div class="self_fees">
                    <p>
                        每缴费 <input type="text" v-model="stePortMon">, 加 <input type="text" v-model="numPart"> 分
                    </p>
                    <p>
                        每介绍一名同学，加 <input type="text" v-model="numReferral">分
                    </p>
                </div>
            </div>
            <div class="addStuPart grade-set">
                <div class="sec-top">
                    <span>学生积分· <span>手动增加</span> · 规则设置 · 限10条</span>
                </div>
                <div class="show_List">
                    <p v-for="(item,index) in stuPartHandArr">
                        <span>{{item.name}}</span>
                        <span>+{{item.part}}分 <i class="ico-camcel-X" v-if="cancelBool" @click = "canStuArr(index)"></i></span>
                    </p>
                    <p v-if="stuHandBool">
                        <input type="text" v-model="stuHandCon" placeholder="限制8字以内"> &nbsp;&nbsp;&nbsp;加 <input type="text" v-model="stuHandNum"> 分 <i class="ico-init ico-add" @click = "stuAddBt"></i>
                    </p>
                </div>
            </div>
            <div class="addStuPart grade-set">
                <div class="sec-top">
                    <span>学生积分· <span class="addRed">手动扣减</span> · 规则设置 · 限10条</span>
                </div>
                <div class="show_List">
                    <p v-for="item in stuHandSubtractArr">
                        <span>{{item.name}}</span>
                        <span>-{{item.part}}分 <i class="ico-camcel-X" v-if="cancelBool" @click="cancelDelArr(index)"></i></span>
                    </p>
                    <p v-if="stuDedBool">
                        <input type="text" v-model="stuDedCon"  placeholder="限制8字以内"> &nbsp;&nbsp;&nbsp;加 <input v-model="stuDedConNum" type="text"> 分 <i class="ico-init ico-add" @click="stuDed"></i>
                    </p>
                </div>
            </div>

            <div class="addTePartAdd grade-set">
                <div class="sec-top">
                    <span>教师积分· 自动增加 · 规则设置</span>
                </div>
                <div class="playAdd">
                    <p>
                        <span>介绍一名新生加 <input type="text"> 分</span>
                    </p>
                    <p>
                        <span>介绍同学扩科加 <input type="text"> 分</span>
                    </p>
                    <p>
                        <span>发表一篇教师圈推文加 <input class="inP" type="text"> 分</span>
                    </p>
                </div>
            </div>
            <div class="addStuPart grade-set">
                <div class="sec-top">
                    <span>教师积分· <span>手动增加</span> · 规则设置 · 限10条</span>
                </div>
                <div class="show_List">
                    <p v-for="(item,index) in teaHandAddArr">
                        <span>{{item.name}}</span>
                        <span>+{{item.part}}分 <i class="ico-camcel-X" v-if="cancelBool" @click = "cancelDelTe(index)"></i></span>
                    </p>
                    <p v-if="teaacherAddBool">
                        <input type="text" v-model="teachAddCon"  placeholder="限制8字以内"> &nbsp;&nbsp;&nbsp;加<input v-model="teachAddConNum" type="text">分 <i class="ico-init ico-add" @click = "teacherAddArr"></i>
                    </p>
                </div>
            </div>
            <div class="addStuPart grade-set">
                <div class="sec-top">
                    <span>教师积分· <span class="addRed">手动扣减</span> · 规则设置 · 限10条</span>
                </div>
                <div class="show_List">
                    <p v-for="(item,index) in tachHandSubtractArr ">
                        <span>{{item.name}}</span>
                        <span>-{{item.part}}分 <i class="ico-camcel-X" v-if="cancelBool" @click = canDelTeaArr(index)></i></span>
                    </p>
                    <p v-if="teaDelBool">
                        <input type="text" v-model="teaDelCon"  placeholder="限制8字以内"> &nbsp;&nbsp;&nbsp;加<input v-model="teaDelNum" type="text">分 <i class="ico-init ico-add" @click="addTeaDelArr"></i>
                    </p>
                </div>
            </div>
        </div>
        <div class="sub-bt">
            <i class ="sel-circle-ok" @click = "save"></i>
        </div>
    </div>
</template>
<script>
    import ElRadio from "../../../../node_modules/element-ui/packages/radio/src/radio.vue";

    export default {
        components: {ElRadio},
        data() {
            return {
                value8 :"",
                allStuiInRa : "",//全体学生积分单选值
                monthS : "",//全体学生积分填写月
                dateS : "",//全体学生积分填写日
                washSelRa : "",//学生流失后积分单选
                surpassPart : "",//赠送积分填写
                extraPartRa : "",//额外赠送积分单选
                selPerson : "选择一位人员",//学生积分选择人员
                branchRote : "选择分校角色",//学生积分选择分校角色
                allTeaiInRa : "",//全体教师积分单选值
                monthTe : "",//全体教师积分填写月
                dateTe : "",//全体教师积分填写日
                washTeSelRa : "",//教师离职后积分单选
                teachPart : "",//教师赠送积分填写
                extePartRa : "",//教师额外赠送积分单选
                selTePerson : "选择一位人员",//教师积分选择人员
                branchTeRote : "选择分校角色",//教师积分选择分校角色
                stePortMon : "",//学生积分规则每缴费几元
                numPart : "",//学生积分规则每缴费几元,加几分
                numReferral : "",//每介绍一位同学加几分
                stuPartHandArr : [
                    {name:"主动帮助同学",part:10},
                    {name:"按时完成作业",part:10},
                    {name:"积极回答问题",part:10},
                    {name:"考试成绩优异",part:20},
                    {name:"参加大赛获奖",part:20},
                ],//学生积分手动增加容器
                stuHandSubtractArr :[
                    {name:"不按时写作业",part:10},
                    {name:"经常迟到早退",part:10},
                    {name:"扰乱课堂纪律",part:10},
                    {name:"参加考试作弊",part:20},
                    {name:"和同学打架",part:20},
                ],//学生积分手扣减容器
                teaHandAddArr :[

                ],//教师积分手动增加容器
                tachHandSubtractArr : [
                    {name:"流失一名学生",part:10},
                    {name:"试听学生未报",part:10},
                    {name:"家长严重投诉",part:10},
                ],//教师积分手动扣减容器
                cancelBool : false,//编辑的删除叉是否渲染
                stuHandCon : "",//学生积分· 手动增加 · 规则设置 · 限10条 输入内容
                stuHandNum  : "",//学生积分· 手动增加 · 规则设置 · 限10条 输入分数
                stuHandBool : true,//控制学生积分· 手动增加 · 规则设置 · 限10条添加的按钮显隐
                stuDedBool :true,//学生积分· 手动扣减 · 规则设置 添加的按钮显隐
                stuDedCon : "",//学生积分· 手动扣减 输入内容
                stuDedConNum :"",//学生积分· 手动扣减  输入分数
                teaacherAddBool : true,//教师积分· 手动增加是否渲染
                teachAddCon : "",//教师积分· 手动增加 输入内容
                teachAddConNum : "",//教师积分· 手动增加 输入分数
                teaDelBool : true,//老师积分· 手动扣减 添加的按钮显隐
                teaDelCon : "",//老师积分· 手动扣减 输入内容
                teaDelNum : "",//老师积分· 手动扣减 输入分数
            }
        },
        methods:{
            save(){

            }, //保存
            stuAddBt(){
                if(this.stuHandCon.replace(/(^\s*)|(\s*$)/g, "")  == "" || this.stuHandNum.replace(/(^\s*)|(\s*$)/g, "") == ""){
                    this.$message({
                        message: '请将当前输入信息补充完整',
                        center: true,
                        duration: 1500,
                    })
                }else {
                    if(this.stuHandCon.replace(/(^\s*)|(\s*$)/g,"").length > 8){
                        this.$message({
                            message: '输入信息限八字以内',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.stuPartHandArr.push({
                            name : this.stuHandCon,
                            part : this.stuHandNum
                        })
                        this.stuHandCon = "";
                        this.stuHandNum = ""
                    }
                }
                if( this.stuPartHandArr.length == 10){
                    this.stuHandBool = false;
                }
            },//学生积分· 手动增加 · 规则设置条数添加
            canStuArr(i){
                this.stuPartHandArr.splice(i,1);
                this.stuHandBool = true;
            },//删除添加的学生积分· 手动增加 · 规则设置
            stuDed(){
                if(this.stuDedCon.replace(/(^\s*)|(\s*$)/g, "")  == "" || this.stuDedConNum.replace(/(^\s*)|(\s*$)/g, "") == ""){
                    this.$message({
                        message: '请将当前输入信息补充完整',
                        center: true,
                        duration: 1500,
                    })
                }else {
                    if(this.stuDedCon.replace(/(^\s*)|(\s*$)/g,"").length > 8){
                        this.$message({
                            message: '输入信息限八字以内',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.stuHandSubtractArr.push({
                            name : this.stuDedCon,
                            part : this.stuDedConNum
                        })
                        this.stuDedCon = "";
                        this.stuDedConNum = ""
                    }
                }
                if( this.stuHandSubtractArr.length == 10){
                    this.stuDedBool = false;
                }
            },//学生积分· 手动扣减 条数添加
            cancelDelArr(i){
                this.stuHandSubtractArr.splice(i,1);
                this.stuDedBool = true;
            },//学生积分· 手动扣减 条数添加 条数删除
            teacherAddArr(){
                if(this.teachAddCon.replace(/(^\s*)|(\s*$)/g, "")  == "" || this.teachAddConNum.replace(/(^\s*)|(\s*$)/g, "") == ""){
                    this.$message({
                        message: '请将当前输入信息补充完整',
                        center: true,
                        duration: 1500,
                    })
                }else {
                    if(this.teachAddCon.replace(/(^\s*)|(\s*$)/g,"").length > 8){
                        this.$message({
                            message: '输入信息限八字以内',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.teaHandAddArr.push({
                            name : this.teachAddCon,
                            part : this.teachAddConNum
                        })
                        this.teachAddCon = "";
                        this.teachAddConNum = ""
                    }
                }
                if( this.teaHandAddArr.length == 10){
                    this.teaacherAddBool = false;
                }
            },//教师积分· 手动增加
            cancelDelTe(i){
                this.teaHandAddArr.splice(i,1);
                this.teaacherAddBool = true;
            },//教师积分· 手动增加  删除
            addTeaDelArr(){
                if(this.teaDelCon.replace(/(^\s*)|(\s*$)/g, "")  == "" || this.teaDelNum.replace(/(^\s*)|(\s*$)/g, "") == ""){
                    this.$message({
                        message: '请将当前输入信息补充完整',
                        center: true,
                        duration: 1500,
                    })
                }else {
                    if(this.teaDelCon.replace(/(^\s*)|(\s*$)/g,"").length > 8){
                        this.$message({
                            message: '输入信息限八字以内',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.tachHandSubtractArr.push({
                            name : this.teaDelCon,
                            part : this.teaDelNum
                        })
                        this.teaDelCon = "";
                        this.teaDelNum = ""
                    }
                }
                if( this.tachHandSubtractArr.length == 10){
                    this.teaDelBool = false;
                }
            },
            canDelTeaArr(i){
                this.tachHandSubtractArr.splice(i,1);
                this.teaDelBool = true;
            },
            save(){
                let datZeroBool= "";
                if(this.allStuiInRa == "1"){
                    datZeroBool = true;
                }else {
                    datZeroBool = false;
                    this.monthS = "";
                    this.dateS = "";
                };//积分是否按照时间清零
               let washSelBool = "";
               if(this.washSelRa =="1" ){
                   washSelBool = true;
               }else {
                   washSelBool = false;
               };//学生流失后，积分是否清零

                let headIntegralRule = {
                    head_school_id : this.$ls.get("USER_INFO").headSchoolId,
                };
                let data = {
                    accessToken:"aaa",
                    headIntegralRule : headIntegralRule
                }
            }
        },
    };
</script>
