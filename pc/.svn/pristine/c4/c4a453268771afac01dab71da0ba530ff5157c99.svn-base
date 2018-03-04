<template>
    <div>
        <div class="main">
            <addLeft></addLeft>
            <div class="right">
                <div class="detailed">
                    <span>详细信息</span>
                    <div>
                        <i class="ico-init ico-pen"></i>
                        <i class="ico-init ico-book"></i>
                    </div>
                </div>
                <div class="right_bottom">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import addLeft from './adds/addleft'
    import Const from '../../base/commonJS/const'
    export default {
        components: {
            'addLeft':addLeft,
        },
        data() {
            return {

                form: {
                    //                    总校ID
                    'head_id': this.headSchoolId,
                    //                    姓名
                    'full_name': '',
                    //                    姓名首字母
                    'first_name': '',
                    //                    性别
                    'sex': '',
                    //                    手机号码
                    'account': '',
                    //                     密码
                    'password': '',
                    //                     员工状态（默认onJob:在职，leave:离职）
                    'account_status': 'onJob',
                    //                     员工头像
                    'image': '',
                    //                     生日
                    'brithday': '',
                    //                     昵称
                    'nike_name': '',
                    //                     岗位性质：normal（正式）；trial（试用）
                    'position_nature': 'normal',
                    //                     手机端显示（fullName:姓名，nikeName昵称，customName自定义）
                    'name_type': 'customName',
                    //                      自定义名称
                    'free_name': '',
                    //                      学历等级
                    'enducation_level': 'undergraduate',
                    //                       居住地址
                    'address': '',
                    //                        入职时间
                    'induction_time': '',
                    //                        转正时间
                    'become_regular_time': '',
                    //                        合同开始时间（岗位性质：normal（正式）员工才有）
                    'contract_begin_time': '',
                    //                        合同结束时间（岗位性质：normal（正式）员工才有）
                    'contract_end_time': '',
                    //                        岗位角色
                    'school_roles': [{

                        //                                     HEADSCHOOL,    REGION,          AREA,          SCHOOL        (竖向)
                        'school_type': '',
                        //                    根据school_type 为总校-总校ID，为大区-大区ID,   为地区-地区ID, 为校区-校区ID
                        'school_id': '',
                        //                    根据school_id 为总校-总校名称，为大区-大区名称,为地区-地区名称, 为校区-校区名称
                        'school_name': '',
                        //                    一级部门ID
                        'first_dept_id': '',
                        //                    一级部门名称
                        'first_dept_name': '',
                        //                     二级部门ID
                        'second_dept_id': '',
                        //                     二级部门名称
                        'second_dept_name': '',
                        //                     三级部门ID
                        'thrid_dept_id': '',
                        //                     三级部门名称
                        'thrid_dept_name': '',
                        //                     角色ID
                        'role_id': '',
                        //                     角色名称
                        'role_name': ''
                    }],
                    //                         是否授课(true/false)
                    'is_teach': true,
                    //                         教师类型（fullTime专职；partTime兼职；practice实习；Training培训）
                    'teacer_type': '',
                    //                         所授课程
                    'courseList': [{
                        //                     科目ID
                        'subject_id': '',
                        //                     科目名称
                        'subject_name': '',
                        //                     课程ID
                        'course_id': '',
                        //                     课程名称
                        'course_name': ''
                    }],
                    //                         从教时间年
                    'teaching_time_year': '',
                    //                         从教时间月
                    'teaching_time_month': '',
                    //                         教师级别（lowLevel:初级，middleLevel:中级，highLevel高级，specialLevel特级） RAccountEnum.TeacerLevel
                    'teacher_level': '',
                    //                          资格证书有无(true/false)
                    'qualification_certificate': '',
                    //                          创建人
                    'create_by': '',
                    //                          员工编号
                    'person_number': '',
                    //                          婚姻状况（married:已婚，unmarried:未婚，divorced:离异）married
                    'marital_status': '',
                    //                          fertility_status生育状况;（fertile:已育，noChildren未育）
                    'fertility_status': '',
                    //                          身份证号
                    'id_number': '',
                    //                          微信号码
                    'wechat_number': '',
                    //                          QQ号码
                    'qq_number': '',
                    //                          电子邮箱
                    'email': '',
                    //                          户籍地址
                    'permanent_address': '',
                    //                          银行账号
                    'bank_card_number': '',
                    //                          所属银行
                    'owned_bank': '',
                    //                          社保卡号
                    'social_security_number': '',
                    //                          求学经历
                    'learning_experience': [{
                        //                      求学开始时间
                        'learning_begin_time': '',
                        //                      求学结束时间
                        'learning_end_time': '',
                        //                      求学学校
                        'learning_school': '',
                        //                      求学专业
                        'learning_major': ''
                    }],
                    //                          工作经历
                    'job_experience': [{
                        //                      工作开始时间
                        'job_begin_time': '',
                        //                      工作结束时间
                        'job_end_time': '',
                        //                      工作单位
                        'job_unit': '',
                        //                      工作职位
                        'job_position': ''
                    }],
                    //                          关系人
                    'relation_list': [{
                        //                      关系人姓名
                        'relation_person': '',
                        //                      关系人手机
                        'relation_phone': '',
                        //                      工作单位
                        'relation_unit': '',
                        //                      子女姓名
                        'relation_child_name': '',
                        //                      子女性别(male/)
                        'relation_child_sex': '',
                        //                      子女生日
                        'relation_child_birthday': '',
                        //                      子女年级
                        'relation_child_grade': ''
                    }],
                    //                          面试资格(true有，false无)
                    'interview_qualification': 'true',
                    //                          试听资格（true有，false无）
                    'audition_qualification': 'true'
                },
            }
        },
        mounted() {
            this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId;
        },
        methods: {
            //转换时间样式
            dataInit(res) {
                return new Date(res).toLocaleDateString().split('/').join('-')
            },
            Dr(){
                console.log('角色');
            },
            adds() {
                var urls = Const.staff + 'v1/dossier/staff/addStaff?accessToken=aaaa'
                //判断是否存在姓名（必填信息）
                if (this.sex.male == '' && this.sex.female == '') {
                    this.stopp = '请完善必填信息！'
                    this.stop = true
                    this.faces = false
                    this.tis = true
                }
                //判断是否生育
                console.log(this.fertility_status);
                if(this.fertility_status == "1"){
                    this.from.fertility_status = 'fertile';
                }
                if(this.fertility_status == "2"){
                    this.from.fertility_status = 'noChildren';
                }
                //判断男女性别
                if (this.sex.male == '' && this.sex.female != '') {
                    this.form.full_name = this.sex.female
                    this.form.sex = 'Female'
                }
                if (this.sex.male != '' && this.sex.female == '') {
                    this.form.full_name = this.sex.male
                    this.form.sex = 'Male'
                }
                if(this.childrenmale==""&&this.childrenfamale == ''){
                    this.form.relation_list.relation_child_name = ""
                    this.form.relation_list.relation_child_sex = ""
                }else{
                    if (this.childrenmale != '' && this.childrenfamale == '') {
                        this.form.relation_list.relation_child_name = this.childrenmale
                        this.form.relation_list.relation_child_sex = 'Male'
                    }
                    if (this.childrenmale == '' && this.childrenfamale != '') {
                        this.form.relation_list.relation_child_name = this.childrenfamale
                        this.form.relation_list.relation_child_sex = 'Female'
                    }
                }

                this.form.job_experience.map((ele, index3) => {
                    delete ele.time;
                });
                this.form.learning_experience.map((ele, index4) => {
                    delete ele.time;
                });

                if (this.talBol = true) {
                    //提交
					delete this.form.person_number;
					console.log(123,this.headSchoolId);
					this.form.head_id = this.headSchoolId;
					this.form = JSON.stringify(this.form);
                   this.axios.post(urls,qs.stringify({accountJsonStr:this.form})).then((res) => {
                        this.data1 = res.data;
                        console.log('增加员工信息', this.data1)
                    })
                }
            },
            //验证手机格式及是否存在
            tal() {
                let tal = this.form.account
                if (tal != '') {
                    if (!(/^1(3|4|5|7|8)\d{9}$/.test(tal))) {
                        console.log('手机格式不对')
                        this.stop = true
                        this.tis = true
                        this.stopp = '手机格式不对'

                    } else {

                        let urltall = Const.staff+'/v1/dossier/staff/existsPhone?accessToken=aaaa&head_school_id='+this.headSchoolId+'&phone=' + tal;
                        this.axios.post(urltall).then((res) => {
                            //                        console.log("手机存在",res.data.messages.data);
                            if (res.data.messages.data == false) {
                                console.log('手机不存在,可以使用')
                                this.talBol = true
                            } else {
                                this.stopp = '您输入的手机号码已添加，请重新输入！'
                                this.stop = true
                                this.faces = false
                                this.tis = true
                            }
                        }).catch(function (error) {
                            console.log('调取手机是否存在失败')
                        })
                    }
                }
            },
            //上传头像组件X
            childrens(data) {
                this.stop = data
            },
            //学历等级组件的X
            edus(data) {
                this.subjectData = data
            },
            //教师级别组件X
            teacs(data) {
                this.TeData = data
            },
            //科目组件的X
            ses(data) {
                this.TeDatas = data
            },
            //科目组件的数据
            courseJson(data) {
                this.form.courseList = data
                console.log(114, this.form.courseList)
            },
            //工作经历组件的数据
            workJson(data) {
                this.form.job_experience = data
            },
            //求学经历组件的数据
            studyJson(data) {
                this.form.learning_experience = data
            },
            //学历等级组件子传父
            studyJ(data) {
                this.enducation_levels = data[1]
                this.form.enducation_level = data[0]
                //                console.log(this.form.enducation_level);
            },
            //教师级别组件子传父
            TeacJ(data) {
                this.teacher_levels = data[1]
                this.form.teacher_level = data[0]
                //                console.log(this.form.teacher_level);
            },
            //点击更多选填
            yin() {
              $('.yin').toggle(1000);
                $('.cang').hide();
            },
            //所授课程的弹框出现
            Tefun() {
                this.TeDatas = true
            },
            //警告框X
            close() {
                this.stop = false
            },
            //上传头像弹框出现
            portraits() {
                this.stop = true
                this.faces = true
            },
            //学历等级组件子传父的关闭
            subjects() {
                this.subjectData = true
            },
            //能否授课
            radioT() {
                console.log(0)
                console.log(this.is_teach)
                if (this.is_teach == 1) {
                    console.log('执行1')
                    this.teachers = true
                    this.form.is_teach = true
                } else {
                    this.teachers = false
                    this.form.is_teach = false
                }
                if (this.is_teach == 2) {
                    console.log('执行2')
                    this.teachers = false
                    this.form.is_teach = false
                } else {
                    this.teachers = true
                    this.form.is_teach = true
                }

            },
            //生日
            brit() {
                console.log(this.form.brithday)
                //                var d = new Date(this.form.brithday);
                //                var youWant=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
                //                console.log(youWant);
                //                this.form.brithday = youWant;
            },
            //关闭科目选择弹框
            closeT() {
                this.TeData = true
            },
            //合同的起始时间
            shijian() {
                console.log(this.contract_begin_time[0])
                this.form.contract_begin_time = this.contract_begin_time[0]
                this.form.contract_end_time = this.contract_begin_time[1]
            },
            //点击添加求学经历
            add1() {
                console.log(0)
            }
        }
    }
</script>
<style lang="less" scoped>
    @ma:#31c27c;
    .main {
        width: 1350px;
        margin: 50px auto;
        position: relative;
        overflow: hidden;
    }
    .right {
        width: 1008px;
        float: left;
        border-radius: 5px;
        margin-left: 12px;
        .detailed {
            width: 1008px;
            height: 52px;
            display: flex;
            align-items: center;
            background: #fff;
            border-radius: 5px;
            justify-content: space-between;
            i {
                float: right;
            }
            span {
                color: #31c27c;
                margin-left: 30px;
                font-size: 16px;
            }
        }
        .ico-pen{
            margin-right: 40px;
        }
        .ico-book{
            margin-right: 15px;
        }
    }
    .right_bottom{
        width: 1008px;
        background: #ffffff;
        margin-top: 12px;
        border-radius: 5px;
    }

</style>

