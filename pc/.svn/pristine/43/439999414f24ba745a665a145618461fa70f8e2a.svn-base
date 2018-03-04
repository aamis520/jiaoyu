<template>
    <div class="information">
        <div class="people">
            基本信息
        </div>
        <div class="single">
            <div class="single_left">
                <div class="left_chinese star">
                    员工姓名
                </div>
                <div class="sexs">
                    <input type="text" placeholder="男" v-model="Malename">
                </div>
                <div class="sexs">
                    <input type="text" placeholder="女" v-model="Femalename">
                </div>
            </div>
            <div class="single_center">
                <div class="center_chinese star">
                    手机号码
                </div>
                <div class="center_input">
                    <input type="text" v-model="form.account" @blur="tal()">
                </div>
            </div>
            <div class="single_right">
                <div class="right_chinese">
                    生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日
                </div>
                <div class="right_input">
                    <el-date-picker
                        v-model="brithdays"
                        type="date"
                        placeholder="" @change="brithday()">
                    </el-date-picker>
                </div>
            </div>
        </div>
        <div class="single">
            <div class="single_left">
                <div class="left_chinese">
                    员工昵称
                </div>
                <div class="left_input">
                    <input type="text" v-model="form.nike_name">
                </div>
            </div>
            <div class="single_long">
                <div class="long_chinese star">
                    岗位性质
                </div>
                <div class="long_input">
                    <el-radio v-model="form.position_nature" label='normal'>正式</el-radio>
                    <el-radio v-model="form.position_nature" label='trial'>非正式</el-radio>
                </div>
            </div>
        </div>
        <div class="single">
            <div class="single_left">
                <div class="left_chinese stars">
                    显示1
                    <i class="ico-init ico-hint"></i>
                </div>
                <div class="left_input">
                    <el-radio v-model="form.pc_view_type" label="realName">真实姓名</el-radio>
                    <el-radio v-model="form.pc_view_type" label="nikeName">员工昵称</el-radio>
                </div>
            </div>
            <div class="single_center">
                <div class="center_chinese stars">
                    显示2
                    <i class="ico-init ico-hint"></i>
                </div>
                <div class="center_input">
                    <el-radio v-model="form.phone_view_type" label="realName">真实姓名</el-radio>
                    <el-radio v-model="form.phone_view_type" label="nikeName">员工昵称</el-radio>
                </div>
            </div>
        </div>
        <div class="single">
            <div class="single_left">
                <div class="left_chinese">
                    学历等级
                </div>
                <div class="left_input" @click="openEd">
                    <input type="text" v-model="enducation_level">
                </div>
            </div>
            <div class="single_long">
                <div class="long_chinese">
                    居住地址
                </div>
                <div class="long_input">
                    <input type="text" v-model="form.address">
                </div>
            </div>
        </div>
        <div class="single">
            <div class="single_left">
                <div class="left_chinese star">
                    入职时间
                </div>
                <div class="left_input">
                    <el-date-picker
                        v-model="induction_time"
                        type="date"
                        placeholder="" @change="brithday()">
                    </el-date-picker>
                </div>
            </div>
            <div class="single_center">
                <div class="center_chinese">
                    转正时间
                </div>
                <div class="center_input">
                    <el-date-picker
                        v-model="become_regular_time"
                        type="date"
                        placeholder="" @change="brithday()">
                    </el-date-picker>
                </div>
            </div>
            <div class="single_right">
                <div class="right_chinese">
                    合同期限
                </div>
                <div class="right_input">
                    <el-date-picker
                        v-model="contract"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期" @change="brithday()">
                    </el-date-picker>
                </div>
            </div>
        </div>
        <div class="single">
            <div class="single_left">
                <div class="left_chinese star">
                    岗位角色
                </div>
                <div class="left_input">
                    <input type="text">
                </div>
                <i class="ico-init ico-add"></i>
            </div>
        </div>
        <div class="single">
            <div class="single_left">
                <div class="left_chinese star">
                    能否授课
                </div>
                <div class="left_input">
                    <el-radio v-model="form.is_teach" label=true @change="isTeacher()">能</el-radio>
                    <el-radio v-model="form.is_teach" label=flase @change="isTeacher()">不能</el-radio>
                </div>
            </div>
            <div class="single_long is_teach">
                <div class="long_chinese star">
                    教师类型
                </div>
                <div class="long_input">
                    <el-radio v-model="form.teacer_type" label="fullTime">专职</el-radio>
                    <el-radio v-model="form.teacer_type" label="partTime">兼职</el-radio>
                    <el-radio v-model="form.teacer_type" label="practice">实习</el-radio>
                    <el-radio v-model="form.teacer_type" label="Training">培训</el-radio>
                </div>
            </div>
        </div>
        <div class="single is_teach">
            <div class="single_only">
                <div class="only_chinese star">
                    所授课程
                </div>
                <div class="only_input" @click="openSell()">
                    <input type="text">
                </div>
            </div>
        </div>
        <div class="single is_teach">
            <div class="single_left">
                <div class="left_chinese">
                    从教时间
                </div>
                <div class="sexs">
                    <input type="text" placeholder="年" v-model="form.teaching_time_year">
                </div>
                <div class="sexs">
                    <input type="text" placeholder="月" v-model="form.teaching_time_month">
                </div>
            </div>
            <div class="single_center">
                <div class="center_chinese">
                    教师级别
                </div>
                <div class="center_input" @click="openTeaching()">
                    <input type="text" v-model="teacher_level">
                </div>
            </div>
            <div class="single_right">
                <div class="right_chinese">
                    资格证书
                </div>
                <div class="right_input">
                    <el-radio v-model="form.qualification_certificate" label=true>有</el-radio>
                    <el-radio v-model="form.qualification_certificate" label=false>无</el-radio>
                </div>
            </div>
        </div>
        <div class="blue">
          <span @click="hide()">更多选填..</span>
        </div>
        <div class="hide">
            <div class="people people_one">
                详细信息
            </div>
            <div class="single">
                <div class="single_left">
                    <div class="left_chinese">
                        员工编号
                    </div>
                    <div class="left_input">
                        <input type="text" v-model="form.person_number">
                    </div>
                </div>
                <div class="single_center">
                    <div class="center_chinese">
                        婚姻状况
                    </div>
                    <div class="center_input">
                        <el-radio v-model="form.marital_status" label="married">已婚</el-radio>
                        <el-radio v-model="form.marital_status" label="unmarried">未婚</el-radio>
                        <el-radio v-model="form.marital_status" label="divorced">离异</el-radio>
                    </div>
                </div>
                <div class="single_right">
                    <div class="right_chinese">
                        生育状况
                    </div>
                    <div class="right_input">
                        <el-radio v-model="form.fertility_status" label="fertile">已育</el-radio>
                        <el-radio v-model="form.fertility_status" label="noChildren">未育</el-radio>
                    </div>
                </div>
            </div>
            <div class="single">
                <div class="single_left">
                    <div class="left_chinese">
                        身份证号
                    </div>
                    <div class="left_input">
                        <input type="text" v-model="form.id_number">
                    </div>
                </div>
                <div class="single_center">
                    <div class="center_chinese">
                        微信号码
                    </div>
                    <div class="center_input">
                        <input type="text" v-model="form.wechat_number">
                    </div>
                </div>
                <div class="single_right">
                    <div class="right_chinese">
                        QQ号码
                    </div>
                    <div class="right_input">
                        <input type="text" v-model="form.qq_number">
                    </div>
                </div>
            </div>
            <div class="single">
                <div class="single_left">
                    <div class="left_chinese">
                        电子邮箱
                    </div>
                    <div class="left_input">
                        <input type="text" v-model="form.email">
                    </div>
                </div>
                <div class="single_long">
                    <div class="long_chinese">
                        户籍地址
                    </div>
                    <div class="long_input">
                        <input type="text" v-model="form.permanent_address">
                    </div>
                </div>
            </div>
            <div class="single">
                <div class="single_left">
                    <div class="left_chinese">
                        银行卡号
                    </div>
                    <div class="left_input">
                        <input type="text" v-model="form.bank_card_number">
                    </div>
                </div>
                <div class="single_center">
                    <div class="center_chinese">
                        所属银行
                    </div>
                    <div class="center_input">
                        <input type="text" v-model="form.owned_bank">
                    </div>
                </div>
                <div class="single_right">
                    <div class="right_chinese">
                        社保卡号
                    </div>
                    <div class="right_input">
                        <input type="text" v-model="form.social_security_number">
                    </div>
                </div>
            </div>
            <div class="people people_two">
                求学经历
            </div>
            <div class="education"  v-for="(item,index) in learning_experience" :key="index">
                <div class="single">
                    <div class="single_left">
                        <div class="left_chinese">
                            就读时间
                        </div>
                        <div class="left_input">
                            <el-date-picker v-model="item.time" type="daterange" eunlink-panels=fals range-separator=" 至 " start-placeholder="开始日期" end-placeholder="结束日期" @change="times()">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="single_center">
                        <div class="center_chinese">
                            就读学校
                        </div>
                        <div class="center_input">
                            <input type="text" v-model="item.learning_school">
                        </div>
                    </div>
                    <div class="single_right">
                        <div class="right_chinese">
                            就读专业
                        </div>
                        <div class="right_input">
                            <input type="text" v-model="item.learning_major">
                        </div>
                    </div>
                </div>
                <i class="ico-init ico-add" @click="puth()"></i>
            </div>
            <div class="people people_three">
                工作经历
            </div>
            <div class="education" v-for="(items,index) in job_experience" :key="index">
                <div class="single">
                    <div class="single_left">
                        <div class="left_chinese">
                            工作时间
                        </div>
                        <div class="left_input">
                            <el-date-picker v-model="items.time" type="daterange" eunlink-panels=fals range-separator=" 至 " start-placeholder="开始日期" end-placeholder="结束日期" @change="times()">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="single_center">
                        <div class="center_chinese">
                            工作单位
                        </div>
                        <div class="center_input">
                            <input type="text" v-model="items.job_unit">
                        </div>
                    </div>
                    <div class="single_right">
                        <div class="right_chinese">
                            工作职位
                        </div>
                        <div class="right_input">
                            <input type="text" v-model="items.job_position">
                        </div>
                    </div>
                </div>
                <i class="ico-init ico-add" @click="puths()"></i>
            </div>
            <div class="people people_four">
                关系人
            </div>
            <div class="family" v-for="(item2,index2) in relation_list" :key="index2">
                <div class="single">
                    <div class="single_left">
                        <div class="left_chinese">
                            夫/妻
                        </div>
                        <div class="left_input">
                            <input type="text" v-model="item2.relation_person">
                        </div>
                    </div>
                    <div class="single_center">
                        <div class="center_chinese">
                            手机号码
                        </div>
                        <div class="center_input">
                            <input type="text" v-model="item2.relation_phone">
                        </div>
                    </div>
                    <div class="single_right">
                        <div class="right_chinese">
                            工作单位
                        </div>
                        <div class="right_input">
                            <input type="text" v-model="item2.relation_unit">
                        </div>
                    </div>
                </div>
                <div class="single" v-for="(item1,index1) in item2.childs" :key="index1">
                    <div class="single_left">
                        <div class="left_chinese">
                            子/女
                        </div>
                        <div class="sexs">
                            <input type="text" placeholder="男" v-model="item1.Children_Male">
                        </div>
                        <div class="sexs">
                            <input type="text" placeholder="女" v-model="item1.children_Female">
                        </div>
                    </div>
                    <div class="single_center">
                        <div class="center_chinese">
                            子女生日
                        </div>
                        <div class="center_input">
                            <el-date-picker
                                v-model="item1.relation_child_birthday"
                                type="date"
                                placeholder="">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="single_right">
                        <div class="right_chinese">
                            子女年级
                        </div>
                        <div class="right_input">
                            <input type="text" v-model="item1.relation_child_grade">
                        </div>
                    </div>
                    <i class="ico-init ico-add childs_add" @click="puthParty()"></i>
                </div>

            </div>
            <div class="people people_five">
                其他
            </div>
            <div class="single">
                <div class="single_left">
                    <div class="left_chinese">
                        面试资格
                    </div>
                    <div class="left_input">
                        <el-radio v-model="form.interview_qualification" label="true">有</el-radio>
                        <el-radio v-model="form.interview_qualification" label="false">无</el-radio>
                    </div>
                </div>
                <div class="single_center">
                    <div class="center_chinese">
                        试听资格
                    </div>
                    <div class="center_input">
                        <el-radio v-model="form.audition_qualification" label="true">有</el-radio>
                        <el-radio v-model="form.audition_qualification" label="false">无</el-radio>
                    </div>
                </div>
                <div class="single_right">
                    <div class="right_chinese">
                        显示范围
                    </div>
                    <div class="right_input">
                        <input type="text" placeholder="部分人可见">
                    </div>
                </div>
            </div>
        </div>

        <div class="btn_box">
            <button @click="adds()">保存</button>
            <button>保存并填写下一位</button>
        </div>
        <!--学历等级-->
        <ed v-show="EdData" v-on:eduData="edus" v-on:studyJ="studyJ"></ed>
        <!--教师级别-->
        <Teaching v-show="TeData" v-on:teacData="teacs" v-on:TeacJ="TeacJ"></Teaching>
        <!--所授课程-->
        <sell v-show="sellData" v-on:seda="sells"></sell>
        <v-table v-if="nameTrue" @close="close" :data="constdata"></v-table>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import contapi from '@commonJS/const'
    import Teaching from './Teaching'
    import education from './education'
    import sell from './sell'
    import table from '../../../components/Popup'
    export default {
        components: {
            "Teaching":Teaching,
            "ed":education,
            "sell":sell,
            //公用的弹出框
            "v-table" : table
        },
        data() {
            return {
                //  姓名
                Malename:"",
                Femalename:"",
                //必填内容
                nameTrue:false,
                talTrue:"false",
                position_True:"false",
                display_One_True:"true",
                display_Two_True:"true",
                induction_time_True:"true",
                //关系人子女
                Children_Male:"",
                children_Female:"",
                //生日
                brithdays:"",
                //控制教师级别组件的展示
                TeData: false,
                //控制学历等级组件的展示
                EdData:false,
                //控制所授课程组件的展示
                sellData:false,
                //学历等级的回显
                enducation_level:"",
                //入职时间
                induction_time:"",
                //转正时间
                become_regular_time:"",
                //合同时间
                contract:[],
                //教师级别
                teacher_level:"",
                //求学经历的数组
                learning_experience:[
                    {
                        learning_school:"",
                        learning_major:"",
                        learning_begin_time: '',
                        learning_end_time: '',
                        time:"",
                        //加号的显示隐藏
                        addBol:'false'
                    }
                ],
                //工作经历的数组
                job_experience:[{
                    job_unit:"",
                    job_position:"",
                    job_begin_time: '',
                    job_end_time: '',
                    time:"",
                }],
                //关系人
                relation_list: [
                    {
                        relation_person: "张大山",
                        relation_phone: "15266668888",
                        relation_unit: "中国石油",
                        childs: [
                            {
                                relation_child_name: "张小山",
                                Children_Male:"",
                                children_Female:"",
                                relation_child_sex: "male",
                                relation_child_birthday: "2004-10-12",
                                relation_child_grade: "小三"
                            },
                            {
                                relation_child_name: "张小山",
                                Children_Male:"",
                                children_Female:"",
                                relation_child_sex: "male",
                                relation_child_birthday: "2004-10-12",
                                relation_child_grade: "小三"
                            }
                        ]
                    }
                ],
                //提示框组件
                constdata : {
                    title: "提醒",
                    data : "请完善必填信息",
                    isImg: true,
                },



            radio:"",
                radio2:"",
                form: {
                    //                    总校ID
                    head_id:this.$ls.get("USER_INFO").headSchoolId,
                    //                    姓名
                    full_name: '',
                    //                    姓名首字母
                    'first_name': '',
                    //                    性别
                    sex: '',
                    //                    手机号码
                    account: '',
                    //                     密码
                    password: '',
                    //                     员工状态（默认onJob:在职，leave:离职）
                    account_status: 'onJob',
                    //                     员工头像
                    image: '',
                    //                     生日
                    brithday: '',
                    //                     昵称
                    nike_name: '',
                    //                     岗位性质：normal（正式）；trial（试用）
                    position_nature: '',
                    //                     显示一
                    pc_view_type:"",
                    //                     显示二
                    phone_view_type:"",
                    //                      学历等级
                    enducation_level: '',
                    //                       居住地址
                    address: '',
                    //                        入职时间
                    induction_time: '',
                    //                        转正时间
                    become_regular_time: '',
                    //                        合同开始时间（岗位性质：normal（正式）员工才有）
                    contract_begin_time: '',
                    //                        合同结束时间（岗位性质：normal（正式）员工才有）
                    contract_end_time: '',
                    //                        岗位角色
                    school_roles: [{

                        //                                     HEADSCHOOL,    REGION,          AREA,          SCHOOL        (竖向)
                        school_type: '',
                        //                    根据school_type 为总校-总校ID，为大区-大区ID,   为地区-地区ID, 为校区-校区ID
                        school_id: '',
                        //                    根据school_id 为总校-总校名称，为大区-大区名称,为地区-地区名称, 为校区-校区名称
                        school_name: '',
                        //                    一级部门ID
                        first_dept_id: '',
                        //                    一级部门名称
                        first_dept_name: '',
                        //                     二级部门ID
                        second_dept_id: '',
                        //                     二级部门名称
                        second_dept_name: '',
                        //                     三级部门ID
                        thrid_dept_id: '',
                        //                     三级部门名称
                        thrid_dept_name: '',
                        //                     角色ID
                        role_id: '',
                        //                     角色名称
                        role_name: ''
                    }],
                    //                         是否授课(true/false)
                    is_teach: 'true',
                    //                         教师类型（fullTime专职；partTime兼职；practice实习；Training培训）
                    teacer_type: '',
                    //                         所授课程
                    courseList: [{
                        //                     科目ID
                        subject_id: '',
                        //                     科目名称
                        subject_name: '',
                        //                     课程ID
                        course_id: '',
                        //                     课程名称
                        course_name: ''
                    }],
                    //                         从教时间年
                    teaching_time_year: '',
                    //                         从教时间月
                    teaching_time_month: '',
                    //                         教师级别（lowLevel:初级，middleLevel:中级，highLevel高级，specialLevel特级） RAccountEnum.TeacerLevel
                    teacher_level: '',
                    //                          资格证书有无(true/false)
                    qualification_certificate: '',
                    //                          创建人
                    create_by: '',
                    //                          员工编号
                    person_number: '',
                    //                          婚姻状况（married:已婚，unmarried:未婚，divorced:离异）married
                    marital_status: '',
                    //                          fertility_status生育状况;（fertile:已育，noChildren未育）
                    fertility_status: '',
                    //                          身份证号
                    id_number: '',
                    //                          微信号码
                    wechat_number: '',
                    //                          QQ号码
                    qq_number: '',
                    //                          电子邮箱
                    email: '',
                    //                          户籍地址
                    permanent_address: '',
                    //                          银行账号
                    bank_card_number: '',
                    //                          所属银行
                    owned_bank: '',
                    //                          社保卡号
                    social_security_number: '',
                    //                          求学经历
                    learning_experience: [{
                        //                      求学开始时间
                        learning_begin_time: '',
                        //                      求学结束时间
                        learning_end_time: '',
                        //                      求学学校
                        learning_school: '',
                        //                      求学专业
                        learning_major: ''
                    }],
                    //                          工作经历
                    job_experience: [{
                        //                      工作开始时间
                        job_begin_time: '',
                        //                      工作结束时间
                        job_end_time: '',
                        //                      工作单位
                        job_unit: '',
                        //                      工作职位
                        job_position: ''
                    }],
                    relation_list: [
                        {
                            relation_person: "张大山",
                            relation_phone: "15266668888",
                            relation_unit: "中国石油",
                            childs: [
                                {
                                    relation_child_name: "张小山",
                                    relation_child_sex: "male",
                                    relation_child_birthday: "2004-10-12",
                                    relation_child_grade: "小三"
                                },
                                {
                                    relation_child_name: "张小山",
                                    relation_child_sex: "male",
                                    relation_child_birthday: "2004-10-12",
                                    relation_child_grade: "小三"
                                }
                            ]
                        }
                    ],
                    //                          面试资格(true有，false无)
                    interview_qualification: 'true',
                    //                          试听资格（true有，false无）
                    audition_qualification: 'true'
                },
            }
        },
        computed: {
            ...mapState({
                photoData: state => state.perData.photoData
            })
        },

        mounted() {
            let l = this.learning_experience.length;
        },
        methods: {
            //转换时间格式yy-mm-dd
            dataInit(res){
                return    new Date(res).toLocaleDateString().split('/').join("-")
            },
            //blue显示隐藏
            hide(){
                $('.hide').show(1000);
                $('.blue').hide(1000);
            },
            //添加员工档案数据
            adds(){
                console.log(this.photoData);

                //判断必填内容是否纯在
                if(!this.nameTrue){
                    console.log(0);
                    //提交
                    let urls = contapi.staff + 'v1/dossier/staff/addStaff';
                    let objs ={
                        accessToken:this.$ls.get('USER_INFO').accessToken,
                        accountJsonStr:this.form
                    }
                    this.axios.post(urls,objs).then((res)=>{
                      console.log(123456);
                    }).catch(function(error){
                        console.log(error);
                    })
                }
                //姓名，性别
              if(this.Malename!= ""&&this.Femalename == ""){
                this.form.full_name = this.Malename;
                this.form.sex = "Male";
              }
              if(this.Malename==""&&this.Femalename!=""){
                  this.form.full_name = this.Malename;
                  this.form.sex = "Female";
              }
                //关系人子女，性别
                this.relation_list[0].childs.map((ele1,index2)=>{
                  if(ele1.Children_Male!=""&&ele1.children_Female==""){
                      ele1.relation_child_name = ele1.Children_Male;
                      ele.relation_child_sex = "male";
                  }
                  if(ele1.Children_Male==""&&ele1.children_Female!=""){
                      ele1.relation_child_name = ele1.children_Female;
                      ele.relation_child_sex = "female";
                  }
                  //转换时间格式
                  if(ele1.relation_child_birthday!=""){
                      ele1.relation_child_birthday = this.dataInit(ele1.relation_child_birthday);
                  }

                });

            //求学经历转换时间样式
            this.learning_experience.map((ele,index3)=>{
                if(ele.time!=""&&ele.time!=undefined){
                    ele.learning_begin_time = this.dataInit(ele.time[0]);
                    ele.learning_end_time = this.dataInit(ele.time[1]);
                }
                if(ele.time==""){
                    ele.learning_begin_time = "";
                    ele.learning_end_time = "";
                }
                //删除多余的时间属性
                this.$delete(ele, 'time');
            });
            //工作经历转换时间样式
            this.job_experience.map((ele,index4)=>{
                if(ele.time!=""&&ele.time!=undefined){
                    ele.job_begin_time = this.dataInit(ele.time[0]);
                    ele.job_end_time = this.dataInit(ele.time[1]);
                }
                if(ele.time=""){
                    ele.learning_begin_time = "";
                    ele.learning_end_time = "";
                }
                //删除多余的时间属性
                    this.$delete(ele, 'time');

            })

            },
            //判断手机号是否存在
            tal(){
              let tal = this.form.account;
              if(tal !=""){
                  if (!(/^1(3|4|5|7|8)\d{9}$/.test(tal))){
                      console.log('手机格式不对');
                  }else{
                      let urltal = contapi.staff+'/v1/dossier/staff/existsPhone';
                      let objtal ={
                          accessToken:this.$ls.get('USER_INFO').accessToken,
                          head_school_id:this.$ls.get("USER_INFO").headSchoolId,
                          phone:tal
                      }
                      this.axios.post(urltal,objtal).then((res)=>{
                          if(res.messages.data == false){
                              console.log("手机不存在，可以使用");
                          }else{
                              console.log("您输入的手机号码已添加，请重新输入！")
                              this.nameTrue = true;
                              this.constdata.data="您输入的手机号码已添加，请重新输入！";
                          }
                      }).catch(function(error){
                          console.log(error);
                      })
                  }
              }
            },
            //转换生日的格式
            brithday(){
                this.form.brithday =new Date(this.brithdays).toLocaleDateString().split('/').join('-');
                this.form.induction_time = new Date(this.induction_time).toLocaleDateString().split('/').join('-');
                this.form.become_regular_time = new Date(this.become_regular_time).toLocaleDateString().split('/').join('-');
                this.form.contract_begin_time = new Date(this.contract[0]).toLocaleDateString().split('/').join('-');
                this.form.contract_end_time = new Date(this.contract[1]).toLocaleDateString().split('/').join('-');
            },
            //点击显示教师级别组件
            openTeaching(){
                this.TeData = true;
            },
            //点击显示学历等级组件
            openEd(){
                this.EdData = true;
            },
            //点击显示所授课程组件
            openSell(){
                this.sellData = true;
            },
            //通过学历等级子传父上来的X
            edus(data){
                this.EdData = data;
            },
            //通过所授课程子传父上来的x
            sells(data){
                this.sellData = data;
            },
            //通过所授课程子传父上来的x
            teacs(data){
                this.TeData = data;
            },
            //子传父的学历信息
            studyJ(data) {
                this.form.enducation_levels = data[0]
                this.enducation_level = data[1]
            },
            //子传父的教师级别的信息
            TeacJ(data){
                this.teacher_level = data[1];
                this.form.teacher_level = data[0];
            },
            //是否授课
            isTeacher(){
                console.log(this.form.is_teach);
                if(this.form.is_teach == 'true'){
                    $('.is_teach').show(1000);
                }
                if(this.form.is_teach == 'flase'){
                    $('.is_teach').hide(1000);
                }
            },
            //点击添加一条求学信息
            puth (){
                this.learning_experience.push({
                    learning_school:"",
                    learning_major:"",
                    learning_begin_time: '',
                    learning_end_time: '',
                    time:"",
                    addBol:'false'
                });

//                想通过数组的length长度来确定最后一项的加号显示
//                let l = this.learning_experience.length;
//                this.learning_experience[l-1].addBol='true';
            },
            //点击添加一条工作信息
            puths(){
                this.job_experience.push({
                    job_unit:"",
                    job_position:"",
                    job_begin_time: '',
                    job_end_time: '',
                    time:"",
                })
            },
            //点击添加一条关系人信息
            puthParty(){
                this.relation_list[0].childs.push({
                    //                      子女姓名
                    relation_child_name: '',
                    Children_Male:"",
                    children_Female:"",
                    //                      子女性别(male/)
                    relation_child_sex: '',
                    relation_child_birthday: '',
                    relation_child_grade: ''
                })
            },
            //提示框的关闭
            close(){
                this.nameTrue = false;
                console.log('关闭')
            },



            //时间
            times(){
                console.log(this.learning_experience);
                console.log(this.job_experience);
            }




        },
        $watch: {

        }


    }
</script>

<style lang="less" scoped>
    @ma:#31c27c;
    .information{
        width: 1008px;
    }
    .people{
        width: 944px;
        height: 70px;
        margin: 18px auto 0;
        border-bottom: dotted 1px #dcdddd;
        color: @ma;
        font-size: 14px;
        text-indent: 3em;
        line-height: 70px;
        border-top: dotted 1px #dcdddd;
    }
    .people:first-child{
        background: #fff url("../../../images/map/19.png") no-repeat 0px 22px;
        margin-top: 0;
        border-top: none;
    }
    .people_one{
        background: #fff url("../../../images/map/20.png") no-repeat 0px 22px;
    }
    .people_two{
        background: #fff url("../../../images/map/21.png") no-repeat 0px 22px;
    }
    .people_three{
        background: #fff url("../../../images/map/22.png") no-repeat 0px 22px;
    }
    .people_four{
        background: #fff url("../../../images/map/23.png") no-repeat 0px 22px;
    }
    .people_five{
        background: #fff url("../../../images/map/24.png") no-repeat 0px 22px;
    }
    input{
        width: 100%;
        height: 100%;
        font-size: 14px;
        text-indent: 1em;
    }
    .single{
        width: 944px;
        height: 36px;
        margin: 0 auto;
        margin-top: 20px;
        color: #666666;
        font-size: 14px;
        line-height: 36px;
        position: relative;
        i{
            margin-left: 6px;
            margin-top: 9px;
            width: 20px;
            height: 20px;
        }
        .childs_add{
            position: absolute;
            top: 0;
            right: -22px;
        }
        .single_left{
            width: 330px;
            height: 36px;
            float: left;
            .el-radio{
                margin-left: 10px;
            }
            .left_chinese{
                width: 72px;
                float: left;
            }
            .left_input{
                width: 215px;
                height: 36px;
                background: #f2f5f8;
                border-radius: 5px;
                float: left;
            }
            .sexs{
                width: 105px;
                height: 36px;
                background: #f2f5f8;
                float: left;
                border-radius: 5px;
            }
            .sexs:last-child{
                margin-left: 5px;
            }

        }
        .single_center{
            width: 330px;
            height: 36px;
            float: left;
            .el-radio{
                margin-left: 16px;
            }
            .center_chinese{
                width: 68px;
                float: left;
            }
            .center_input{
                width: 214px;
                height: 36px;
                float: left;
                background: #f2f5f8;
                border-radius: 5px;
                .el-radio{
                    margin-left: 10px;
                }
            }
        }
        .single_right{
            width: 284px;
            height: 36px;
            float: left;
            .el-radio{
                margin-left: 16px;
            }
            .right_chinese{
                width: 70px;
                float: left;
            }
            .right_input{
                width: 213px;
                height: 36px;
                background: #f2f5f8;
                float: left;
                border-radius: 5px;
            }
        }
        .single_long{
            width: 614px;
            height: 36px;
            float: left;
            .long_chinese{
                width: 68px;
                float: left;
            }
            .long_input{
                width: 546px;
                height: 36px;
                background: pink;
                float: left;
                border-radius: 5px;
                background: #f2f5f8;
            }
            .el-radio{
                margin-left: 10px;
            }
        }
        .single_only{
            width: 944px;
            .only_chinese{
                width: 72px;
                float: left;
            }
            .only_input{
                width: 871px;
                height: 36px;
                float: left;
                border-radius: 5px;
                background: #f2f5f8;
            }
        }
    }
    .blue{
        color: #00baff;
        margin-top: 30px;
        font-size: 14px;
        span{
            margin-left: 30px;
        }
    }
    .btn_box{
        margin-top: 155px;
        padding-bottom: 20px;
        button{
            width: 176px;
            height: 35px;
            color: #ffffff;
            background: @ma;
            line-height: 35px;
            text-align: center;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            outline:none;
        }
        button:first-child{
            margin-left: 310px;
        }
        button:last-child{
            margin-left: 20px;
        }
    }
    .education{
        position: relative;
        i{
            position: absolute;
            top:10px;
            right: 10px;
        }
    }
    .star{
        background: #fff url("../../../images/map/42.png") no-repeat 58px 8px;
    }
    .stars{
        background: #fff url("../../../images/map/42.png") no-repeat 35px 8px;
        i{
            width: 16px;
            height: 16px;
        }
    }
    .hide{
        display: none;
    }

</style>


