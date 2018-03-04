<style lang="less" scoped>

    .shade {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background: rgba(0,0,0,0.5);
        display: none;
    }

    .clearfix:after {
        display: block;
        content: "";
        clear: both;
    }

    .compile, .handle {
        position: absolute;
        right: 20px;
        top: -48px;
        cursor: pointer;
    }

    .handle {
        display: none;
        .cancel {
            margin-right: 12px;
        }
    }

    .setting {
        background: #fff;
        border-radius: 5px;
        font-size: 14px;
        color: #666;
        padding: 5px 20px 5px 20px;
        margin-bottom: 12px;
        cursor: pointer;
    }

    .settingTitle {
        height: 37px;
        line-height: 37px;
        color: #31c27c;
        position: relative;
        border-bottom: 1px dotted #dedede;
        img {
            vertical-align: middle;
            margin-left: 5px;
        }
        .tip {
            width: 276px;
            height: 64px;
            line-height: 23px;
            background: #31c27c;
            position: absolute;
            color: #fff;
            left: 93px;
            top: -65px;
            border-radius: 5px;
            box-shadow: 0 0 15px #31c27c;
            padding: 10px;
            display: none;
            p {
                font-size: 14px;
                position: relative;
                padding: 0 10px;
                img {
                    width: 13px;
                    height: 6px;
                    position: absolute;
                    left: 10px;
                    bottom: -14px;
                }
            }
        }
    }

    .consult {
        padding: 10px 0 20px 0;
        li {
            float: left;
            width: 100px;
            text-align: left;
            height: 30px;
            line-height: 30px;
            img {
                display: none;
                margin-left: 5px;
            }
        }
    }

    #num {
        li {
            height: 35px;
            line-height: 35px;
            width: 70px;
        }
    }

    #grade {
        li {
            width: 30%;
            height: 35px;
            line-height: 35px;
        }
    }

    #result {
        padding-bottom: 60px;
        li {
            width: 120px;
            position: relative;
            img {
                display: block;
                position: absolute;
                right: 50px;
                top: 5px;
            }
            input {
                border: 0;
                outline: 0;
                background: none;
                width: 75px;
                border-bottom: 1px solid #666;
            }
        }
    }

    #jibie {
        li {
            width: 120px;
            position: relative;
            img {
                display: block;
                position: absolute;
                right: 35px;
                top: 5px;
            }
            input {
                border: 0;
                outline: 0;
                background: none;
                width: 75px;
                border-bottom: 1px solid #666;
            }
        }
    }

    #ku {
        padding-bottom: 30px;
        p {
            height: 40px;
            line-height: 40px;
            span:nth-child(1) {
                margin-right: 50px;
            }
            input {
                width: 35px;
                border-bottom: 1px dotted #666;
                margin: 0 3px;
            }
        }
    }

    #message {
        padding-bottom: 40px;
        span {
            height: 40px;
            line-height: 40px;
        }
        span:nth-child(1) {
            margin-right: 100px;
        }
    }

    #xitong {
        p {
            height: 40px;
            line-height: 40px;
            color: #666;
        }
        span:nth-child(1) {
            height: 40px;
            line-height: 40px;
            margin-right: 100px;
        }
    }

    #xiangguan {
        p {
            height: 30px;
            line-height: 30px;
            position: relative;
            span {
                position: absolute;
                right: 450px;
            }
        }
    }

    #xiangguan2 {
        padding-bottom: 20px;
        li {
            width: 50%;
            position: relative;
            span {
                position: absolute;
                right: 130px;
            }
        }
    }

    #setting1 {
        p {
            height: 40px;
            line-height: 40px;
            position: relative;
            span {
                position: absolute;
                right: 650px;
            }
        }
    }

    #setting2 {
        p {
            height: 30px;
            line-height: 30px;
        }
        .customAdd {
            width: 70px;
            border-bottom: 1px solid #31c27c;
            margin: 0 2px;
        }
    }

    .baoming {
        padding: 20px 0 60px 0;
        input {
            width: 60%;
            border-bottom: 1px solid #31c27c;
        }
    }

    .sett {
        padding-bottom: 50px;
        li:nth-child(1) {
            width: 190px;
        }
        li:nth-child(2) {
            width: 700px;
            span {
                display: inline-block;
                width: 200px;
            }
        }
    }

    #last {
        padding-bottom: 100px;
        position: relative;
        li {
            float: left;
            width: 50%;
        }
        li:nth-child(1) {
            position: relative;
            #inp1 {
                position: absolute;
                left: 0;
                top: 50px;
            }
            #inp2 {
                width: 60px;
                height: 60px;
                border: 1px solid #666;
                position: absolute;
                top: 30px;
                left: 80px;
            }
            #inp3 {
                position: absolute;
                right: 0;
                top: 50px;
                width: 240px;
                border-bottom: 1px solid #31c27c;
            }
        }
        li:nth-child(2) {
            position: absolute;
            bottom: 10px;
            right: -50px;
        }
    }

    .text-radio-s1 {
        padding: 10px 0;
        .text {
            margin-right: 40px;
        }
    }

</style>

<template>

    <div>

        <img src="../../assets/edit.png" class="compile">

        <p class="handle">
            <img src="../../assets/cancel.png" class="cancel">
            <img src="../../assets/confirm_normal.png" class="confirm">
        </p>

        <div class="setting">
            <div class="settingTitle">
                学生年级段 · 设置
                <tip content="请选择适合贵校的年级段，多选对于系统显示和操作并无益处"></tip>
            </div>
            <check-box class="consult" :list="student_grade_list" @result="getGradeConfig"></check-box>
        </div>

        <div class="setting">
            <div class="settingTitle">
                学生年龄段 · 设置
                <tip content="请选择适合贵校的年龄段，多选对于系统显示和操作并无益处"></tip>
            </div>
            <check-box class="consult" :list="student_age_list" @result="getGradeConfig"></check-box>
        </div>

        <div class="setting">
            <div class="settingTitle">
                学生 · 年级年龄 · 设置（六选一）
            </div>
            <ul class="consult clearfix" id="grade">
                <li>
                    <el-radio class="radio" v-model="radio" label="1">仅显示年级</el-radio>
                </li>
                <li>
                    <el-radio class="radio" v-model="radio" label="2">仅显示年龄，并精确到岁数</el-radio>
                </li>
                <li>
                    <el-radio class="radio" v-model="radio" label="3">仅显示年龄，并精确到月份</el-radio>
                </li>
                <li>
                    <el-radio class="radio" v-model="radio" label="4">优先显示年级</el-radio>
                </li>
                <li>
                    <el-radio class="radio" v-model="radio" label="5">优先显示年龄，并精确到岁数</el-radio>
                </li>
                <li>
                    <el-radio class="radio" v-model="radio" label="6">优先显示年龄，并精确到月份</el-radio>
                </li>
            </ul>
        </div>

        <div class="setting">
            <p class="settingTitle">特殊学生身份 · 限12条</p>
            <ul class="consult clearfix" id="result">
                <li v-for="i in student_special_identity_list">
                    {{i.name}}<img src="../../assets/delete2_normal.png" alt=""></li>
                <!--<li>教工直系亲属</li>
                <li>贫困生<img src="../../assets/delete2_normal.png" alt=""></li>
                <li>特优生<img src="../../assets/delete2_normal.png" alt=""></li>-->
                <span><input type="text" placeholder="自定义添加" class="customAdd" maxlength="4"/></span>
            </ul>
        </div>

        <div class="setting">
            <p class="settingTitle">教师级别 · 设置 · 限12条</p>
            <ul class="consult clearfix" id="jibie">
                <li v-for="i in teacher_level_list">{{i.name}}<img src="../../assets/delete2_normal.png" alt=""></li>
                <!--<li>一级教师<img src="../../assets/delete2_normal.png" alt=""></li>
                <li><input type="text" placeholder="自定义添加" class="customAdd" maxlength="4"/></li>-->
            </ul>
        </div>

        <!--<div class="setting">-->
            <!--<p class="settingTitle">课表相关 · 设置1</p>-->
            <!--<div class="consult" id="xiangguan">-->
                <!--<p>-->
                    <!--<b>分校课表，是否显示在该校区任课教师在所有校区的课表</b>-->
                    <!--<span>-->
                        <!--<el-radio class="radio" v-model="radio3" label="1">否</el-radio>-->
                        <!--<el-radio class="radio" v-model="radio3" label="2">是</el-radio>-->
                    <!--</span>-->
                <!--</p>-->
                <!--<p>-->
                    <!--<b>分校课表，是否显示在该校区任课教师的坐班时间表</b>-->
                    <!--<span>-->
                        <!--<el-radio class="radio" v-model="radio4" label="3">否</el-radio>-->
                        <!--<el-radio class="radio" v-model="radio4" label="4">是</el-radio>-->
                    <!--</span>-->
                <!--</p>-->
            <!--</div>-->
        <!--</div>-->

        <!--<div class="setting">-->
            <!--<p class="settingTitle">课表相关·设置2</p>-->
            <!--<ul class="consult clearfix" id="xiangguan2">-->
                <!--<li>-->
                    <!--<b>是否允许专职教师为自己排课</b>-->
                    <!--<span>-->
                        <!--<el-radio class="radio" v-model="radio5" label="1">否</el-radio>-->
                        <!--<el-radio class="radio" v-model="radio5" label="2">是</el-radio>-->
                    <!--</span>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<b>专职教师排课是否需要审批</b>-->
                    <!--<span>-->
                        <!--<el-radio class="radio" v-model="radio6" label="3">否</el-radio>-->
                        <!--<el-radio class="radio" v-model="radio6" label="4">是</el-radio>-->
                    <!--</span>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<b>是否允许各分校自己排课</b>-->
                    <!--<span>-->
                        <!--<el-radio class="radio" v-model="radio7" label="3">否</el-radio>-->
                        <!--<el-radio class="radio" v-model="radio7" label="4">是</el-radio>-->
                    <!--</span></li>-->
                <!--<li>-->
                    <!--<b>各分校排课是否需要审批</b>-->
                    <!--<span>-->
                        <!--<el-radio class="radio" v-model="radio8" label="3">否</el-radio>-->
                        <!--<el-radio class="radio" v-model="radio8" label="4">是</el-radio>-->
                    <!--</span>-->
                <!--</li>-->
            <!--</ul>-->
        <!--</div>-->

        <!--<div class="setting">-->
            <!--<p class="settingTitle">班级课程 · 设置</p>-->
            <!--<div class="consult" id="setting1">-->
                <!--<p>-->
                    <!--<b>班级课程的统计单位为</b>-->
                    <!--<span>-->
                        <!--<el-radio class="radio9" v-model="radio9" label="1">次</el-radio>-->
                        <!--<el-radio class="radio9" v-model="radio9" label="2">课时</el-radio>-->
                    <!--</span>-->
                <!--</p>-->
            <!--</div>-->
        <!--</div>-->

        <!--<div class="setting">-->
            <!--<p class="settingTitle">班级课程 · 排课系数统计 · 设置</p>-->
            <!--<div class="consult" id="setting2">-->
                <!--<p>-->
                    <!--春秋季，教室日最大可排课<input type="tel" placeholder="" class="customAdd" maxlength="3"/>次，寒暑季<input type="tel" placeholder="" class="customAdd" maxlength="3"/>次；教师上课天数，春秋季按<input type="tel" placeholder="" class="customAdd" maxlength="3"/>日/周计算，寒暑季按<input type="tel" placeholder="" class="customAdd" maxlength="3"/>日/周计算-->
                <!--</p>-->
                <!--<p>-->
                    <!--春秋季，教师周一至五，日最多可上课<input type="tel" placeholder="" class="customAdd" maxlength="3"/>次，寒暑季<input type="tel" placeholder="" class="customAdd" maxlength="3"/>次；周六日，教师日最多可上课次数，春秋季<input type="tel" placeholder="" class="customAdd" maxlength="3"/>次，寒暑季<input type="tel" placeholder="" class="customAdd" maxlength="3"/>次-->
                <!--</p>-->
            <!--</div>-->
        <!--</div>-->

        <div class="setting">
            <p class="settingTitle">报名须知 · 设置</p>
            <div class="consult baoming">
                <input type="text" placeholder="请填写报名须知，家长将会在手机端看到并确认，才可报名；如不填写则手机端不予显示">
            </div>
        </div>

        <div class="setting">
            <p class="settingTitle">退费须知 · 设置</p>
            <div class="consult baoming">
                <input type="text" placeholder="请填写退费须知，家长将会在手机端看到并确认，如不填写则手机端不予显示">
            </div>
        </div>

        <div class="setting">
            <p class="settingTitle">手机APP·家长端·设置</p>
            <ul class="consult clearfix sett">
                <li>家长在手机端可看到：</li>
                <li>
                    <span>
                        <el-radio class="radio" v-model="radio11" label="1">孩子就读班级的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio11" label="2">孩子就读校区的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio11" label="3">全部校区的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio11" label="4">孩子就读班级的教师圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio11" label="5">孩子就读校区的教师圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio11" label="6">全部校区的教师圈</el-radio>
                    </span>
                </li>
            </ul>
        </div>

        <div class="setting">
            <p class="settingTitle">手机APP · 教师端 · 设置</p>
            <ul class="consult clearfix sett">
                <li>教师在手机端可看到：</li>
                <li>
                    <span>
                        <el-radio class="radio" v-model="radio13" label="1">孩子就读班级的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio13" label="2">孩子就读校区的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio13" label="3">全部校区的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio13" label="4">孩子就读班级的教师圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio13" label="5">孩子就读校区的教师圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio13" label="6">全部校区的教师圈</el-radio>
                    </span>
                </li>
            </ul>
        </div>

        <div class="setting">
            <p class="settingTitle">手机APP · 分校教工 · 设置</p>
            <ul class="consult clearfix sett">
                <li>分校教工在手机端可看到：</li>
                <li>
                    <span>
                        <el-radio class="radio" v-model="radio12" label="1">孩子就读班级的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio12" label="2">孩子就读校区的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio12" label="3">全部校区的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio12" label="4">孩子就读班级的教师圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio12" label="5">孩子就读校区的教师圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio12" label="6">全部校区的教师圈</el-radio>
                    </span>
                </li>
            </ul>
        </div>

        <div class="setting">
            <p class="settingTitle">手机APP · 总校教工 · 设置</p>
            <ul class="consult clearfix sett">
                <li>总校教工在手机端可看到：</li>
                <li>
                    <span>
                        <el-radio class="radio" v-model="radio14" label="1">孩子就读班级的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio14" label="2">孩子就读校区的家长圈</el-radio>
                    </span>
                    <span>
                        <el-radio class="radio" v-model="radio14" label="3">全部校区的家长圈</el-radio>
                    </span>
                </li>
            </ul>
        </div>

        <div class="setting">
            <p class="settingTitle">上传学校LOGO</p>
            <ul class="consult clearfix" id="last">
                <li>
                    <input type="text" name="imgName" value="点击上传" id="inp1"/>
                    <input type="file" name="image" accept="" id="inp2"/>
                    <input type="text" placeholder="请输入我们的学校校训（或口号" id="inp3">
                </li>
                <li>
                    <el-radio class="radio" v-model="radio15" label="1">将此信息将会在系统顶部导航区域展示，用以激励我们的同事</el-radio>
                </li>
            </ul>
        </div>

        <div class="setting">
            <span class="btn-s btn-ok" @click="submit">提交</span>
        </div>

    </div>
</template>

<script>
    
    import checkBox from '../../components/sk-check-box.vue'
    import tip from '../../components/sk-tip.vue'
    
    export default {
        
        components: {
            'check-box': checkBox,
            tip
        },
        
        data() {
            return {
                radio: '1',
                radio1: '1',
                radio2: '1',
                radio3: '1',
                radio4: '1',
                radio5: '1',
                radio6: '1',
                radio7: '1',
                radio8: '1',
                radio9: '1',
                radio10: '1',
                radio11: '1',
                radio12: '1',
                radio13: '1',
                radio14: '1',
                radio15: '1',
                data: [],
                data1: [],
                data2: [],
                data3: [],
                student_age_list: [],
                student_grade_list: [],
                student_special_identity_list: [],
                teacher_level_list: []
            }
        },
        
        mounted() {
            
            let submitPath = "/api/api-integrated/v1/integrated/commonInfo/initCommonInfo?accessToken=aaaa&headSchoolId=1";
            this.axios.post(submitPath).then(res => {
                this.student_age_list = res.data.messages.headCommonInfo.student_age_list;
                this.student_grade_list = res.data.messages.headCommonInfo.student_grade_list;
                this.student_special_identity_list = res.data.messages.headCommonInfo.student_special_identity_list;
                this.teacher_level_list = res.data.messages.headCommonInfo.teacher_level_list;
            }).catch(error => {
                console.log(error)
            })
            
        },
        
        methods: {

            getGradeConfig(data) {
                console.log(data);
                return data
            },

            submit: function () {

                let path = '/api/api-integrated/v1/integrated/commonInfo/insertOrUpdateHeadCommonInfo?accessToken=aaaa';

                let json = {
                    "head_school_id": "1",
                    "student_grade_list": [
                        {
                            "name": "小一",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "小二",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "小三",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "student_age_list": [
                        {
                            "name": "小一",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "小二",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "小三",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "student_age_setting": "1",
                    "teaching_course_list": [
                        {
                            "name": "1对1课程",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "班级课程",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "1对N课程",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "register_first_course_list": [
                        {
                            "name": "1对1",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "班级",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "1对N",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "is_register_class_choose_manager": false,
                    "grade_age_list": [
                        {
                            "name": "仅显示年级",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "仅显示年龄，并精确到岁数",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "teacher_level_list": [
                        {
                            "name": "一级教师",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "特级教师",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "resource_library": {
                        "roll_back_to_branch_time": 3,
                        "roll_back_to_head_time": 5,
                        "head_school_id": "1",
                        "user_id": "1",
                        "create_time": 1504952790,
                        "is_delete": false
                    },
                    "customer_setting_list": [
                        {
                            "name": "人工客服",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "机器人客服",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "attendance_list": [
                        {
                            "name": "开通考勤",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "不开通考勤",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "registration": {
                        "content": "测试！测试！测试！测试！测试！测试！测试！测试！",
                        "head_school_id": "1",
                        "user_id": "1",
                        "create_time": 1504952790,
                        "is_delete": false
                    },
                    "refound_notice": {
                        "content": "你们都是小青蛙，呱呱呱呱呱！",
                        "head_school_id": "1",
                        "user_id": "1",
                        "create_time": 1504952790,
                        "is_delete": false
                    },
                    "app_parents_circle_list": [
                        {
                            "name": "孩子就读校区教师圈",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "孩子就读班级教师圈",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "app_teachers_circle": [
                        {
                            "name": "全部校区教师圈",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "本校教师圈",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "app_branch_school_person_circle_list": [
                        {
                            "name": "自己校区教师圈",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "所有教师圈",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "app_head_school_person_circle_list": [
                        {
                            "name": "自己校区教师圈",
                            "is_check": false,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "所有教师圈",
                            "is_check": true,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "other_fee_list": [
                        {
                            "name": "建档",
                            "money": 50,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        },
                        {
                            "name": "服装",
                            "money": 500,
                            "head_school_id": "1",
                            "user_id": "1",
                            "create_time": 1504952790,
                            "is_delete": false
                        }
                    ],
                    "school_info": {
                        "logo_url": "https://www.baidu.com",
                        "watch_or_word": "你瞅啥？",
                        "head_school_id": "1",
                        "user_id": "1",
                        "create_time": 1504952790,
                        "is_delete": false
                    },
                    "user_id": "1",
                    "create_time": 1504952790,
                    "is_delete": false,
                    "version": "v1"
                };

                this.axios.post(path, json).then(res => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                })

            }
        }
    }
</script>
