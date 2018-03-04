<template>
    <div id="pre" :style="{backgroundImage:'url('+img+')'}">
        <Heads></Heads>
        <ed v-show="subjectData" v-on:eduData="edus" v-on:studyJ="studyJ"></ed>
        <Teaching v-show="TeData" v-on:teacData="teacs" v-on:TeacJ="TeacJ"></Teaching>
        <sell v-show="TeDatas" v-on:seda="ses" v-on:course="courseJson"></sell>
        <!--<Def></Def>-->
        <div class="stop" v-if="stop">
            <div class="prompt" v-show="tis">
                <div class="pro-t">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提示
                    <span>
                        <img src="../../images/map/2-1_04.gif" alt="" @click="close()">
                    </span>
                </div>
                <div class="pro-b">
                    <img src="../../images/map/26.png" alt="">
                    <p>{{stopp}}</p>
                </div>
            </div>

            <div class="face" v-if="faces">
                <div class="face-t">
                    &nbsp;&nbsp;&nbsp;头像设置
                    <span>
                        <img src="../../images/map/2-1_04.gif" alt="">
                    </span>
                </div>
                <!--<Jcrop v-on:father="childrens"></Jcrop>-->
            </div>
        </div>
        <div class="main">
            <div class="left">
                <div class="center">
                    <div class="green"></div>
                    <div class="portrait">
                        <img :src="Alertdata.image" alt="" class="por" @click="portraits()">
                    </div>
                    <div class="name">
                        {{Alertdata.full_name}}
                    </div>
                    <ul class="datas">
                        <li>
                            <img src="../../images/map/13.png" alt="">
                            &nbsp;&nbsp;<span v-for="(itemrs,indexrs) in Alertdata.school_roles" :key="indexrs">{{itemrs.thrid_dept_name}}</span>
                        </li>
                        <li>
                            <img src="../../images/map/14.png" alt="">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span v-for="(itemxq,indexxq) in Alertdata.school_roles" :key="indexxq">{{itemxq.school_name}}</span>

                        </li>
                    </ul>
                </div>
                <div class="birthday">
                    <el-row>
                        <el-col :span="12" style="padding-left: 30px;">
                            <div class="grid-content bg-purple" style="border-right: dotted 1px #666;">
                                <div style="color: #31c2b6">
                                    {{myfilter(Alertdata.brithday).substring(0,2)}}.<span style="font-size: 8px;">{{myfilter(Alertdata.brithday).substring(3,6)}}</span>
                                </div>
                                <div class="bott">
                                    生日
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12" style="padding-right: 30px">
                            <div class="grid-content bg-purple-light">
                                <div style="color: #79d2ca;">
                                    {{myfilter(Alertdata.induction_time).substring(0,2)}}.<span style="font-size: 8px;">{{myfilter(Alertdata.induction_time).substring(3,6)}}</span>
                                </div>
                                <div class="bott">
                                    入职日期
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12" style="padding-left: 30px;border-top: 1px #666 dotted;">
                            <div class="grid-content bg-purple" style="border-right: dotted 1px #666;">
                                <div style="color: #f6945a;">
                                    {{Alertdata.teaching_time_year}}<span style="font-size: 8px;">年{{Alertdata.teaching_time_month}}月</span>
                                </div>
                                <div class="bott">
                                    工龄
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12" style="padding-right: 30px;border-top: 1px #666 dotted;">
                            <div class="grid-content bg-purple-light">
                                <div style="color: #39bbff">
                                    暂无
                                </div>
                                <div class="bott">
                                    积分
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="details">
                    <div style="background: #f7f8fc;">
                        <i><img src="../../images/map/19.png" alt=""></i>
                        <span style="color:#31c27c;">详细信息</span>
                    </div>
                    <!--<div>-->
                        <!--<i><img src="./map/16.png" alt=""></i>-->
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
                        <i><img src="../../images/map/2_06.gif" alt=""></i>
                        <i style="margin-right: 20px;"><img src="../../images/map/2_03.gif" alt=""></i>
                    </div>
                </div>
                <div class="basic">
                    <div class="bas-t">
                        <i><img src="../../images/map/19.png" class="i1" alt=""></i>
                        <p>基本信息</p>
                    </div>

                    <div class="bas1">
                        <el-form ref="form">
                            <el-row>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;员工姓名
                                        <img src="../../images/map/42.png" alt="" class="start">
                                        <el-input v-model="malename" placeholder="男" class="male"></el-input>
                                        <el-input v-model="sex.female" placeholder="女" class="female"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple-light">
                                        手机号码
                                        <img src="../../images/map/42.png" alt="" class="start">
                                        <el-input v-model="Alertdata.account" placeholder="" class="inputt" @blur="tal()"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="info-r">
                                        <div class="ch"><span>生&nbsp;&nbsp;&nbsp;日</span></div>
                                        <div class="in">
                                            <el-date-picker type="date" v-model="Alertdata.brithday" style="width: 100%;" @change="brit"></el-date-picker>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;员工昵称&nbsp;&nbsp;
                                        <el-input v-model="Alertdata.nike_name" placeholder="" class="inputt"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple-light" style="line-height: 36px">
                                        岗位性质
                                        <img src="../../images/map/42.png" alt="" class="start">
                                        <el-radio v-model="Alertdata.position_nature" label="normal">正式</el-radio>
                                        <el-radio v-model="Alertdata.position_nature" label="trial">非正式</el-radio>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple"></div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">
                                    <div class="grid-content bg-purple-dark" style="line-height: 36px">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;显示设置
                                        <img src="../../images/map/42.png" alt="" class="start">
                                        <el-radio v-model="Alertdata.name_type" label="fullName">真实姓名</el-radio>
                                        <el-radio v-model="Alertdata.name_type" label="nikeName">员工昵称</el-radio>
                                        <el-radio v-model="Alertdata.name_type" label="customName">自定义</el-radio>
                                        <input type="text" style="border-bottom: #31c27c 1px solid;width: 100px;" v-model="form.free_name">
                                        <el-tooltip placement="top">
                                            <div slot="content">这里设置该员工在家长手机端上所显<br/>示的称呼</div>
                                            <el-button><i><img src="../../images/map/30.png" alt=""></i></el-button>
                                        </el-tooltip>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple" @click="subjects()">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学历等级&nbsp;&nbsp;
                                        <el-input v-model="xuelidj" placeholder="" class="inputt"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="16">
                                    <div class="grid-content bg-purple-light">
                                        居住地址
                                        <el-input v-model="Alertdata.address" placeholder="" class="inputts"></el-input>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;入职时间&nbsp;
                                        <img src="../../images/map/42.png" alt="" class="start">
                                        <el-date-picker
                                                v-model="Alertdata.induction_time"
                                                type="date"
                                                placeholder="" style="margin-left: 10px;width: 202px">
                                        </el-date-picker>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple-light">
                                        转正时间&nbsp;&nbsp;&nbsp;
                                        <el-date-picker
                                                v-model="Alertdata.become_regular_time"
                                                type="date"
                                                placeholder="" style="margin-left: 10px">
                                        </el-date-picker>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple">
                                        合同期限
                                        <el-date-picker v-model="contract_time" type="daterange" eunlink-panels=fals  range-separator=" 至 " start-placeholder="开始日期" end-placeholder="结束日期" @change="shijian">
                                        </el-date-picker>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple-dark">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;岗位角色
                                        <img src="../../images/map/42.png" alt="" class="start">
                                        <el-input placeholder="" class="role" v-for="(itemgw,indexgw) in "></el-input>
                                    </div>
                                </el-col>
                                <i><img src="../../images/map/2_23.gif" alt="" class="roleadd"></i>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能否授课
                                        <img src="../../images/map/42.png" alt="" class="start">
                                        <el-radio v-model="is_teach" label="1" @change="radioT">能</el-radio>
                                        <el-radio v-model="is_teach" label="2" @change="radioT">否</el-radio>
                                    </div>
                                </el-col>
                                <el-col :span="16" v-show="teachers">
                                    <div class="grid-content bg-purple-light">
                                        教师类型
                                        <img src="../../images/map/42.png" alt="" class="start">
                                        <el-radio v-model="Alertdata.teacer_type" label="fullTime">专职</el-radio>
                                        <el-radio v-model="Alertdata.teacer_type" label="partTime">兼职</el-radio>
                                        <el-radio v-model="Alertdata.teacer_type" label="practice">实习</el-radio>
                                        <el-radio v-model="Alertdata.teacer_type" label="Training">培训</el-radio>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row v-show="teachers">
                                <el-col :span="24">
                                    <div class="grid-content bg-purple-dark" @click="Tefun" v-for="(list,index1) in Alertdata.courseList" :key="index1">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所授课程
                                        <img src="../../images/map/42.png" alt="" class="start">
                                        <el-input placeholder="" class="roles" v-model="list.subject_name">
                                        </el-input>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row v-show="teachers">
                                <el-col :span="8">
                                    <div class="grid-content bg-purple">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从教时间&nbsp;&nbsp;
                                        <el-input v-model="Alertdata.teaching_time_year" placeholder="年" class="male"></el-input>
                                        <el-input v-model="this.Alertdata.teaching_time_month" placeholder="月" class="female"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple-light" @click="closeT">
                                        教师级别
                                        <el-input v-model="jiaosj" placeholder="" class="inputt"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content bg-purple" style="line-height: 36px">
                                        资格证书
                                        <el-radio v-model="qualification_certificate" label="1">有</el-radio>
                                        <el-radio v-model="qualification_certificate" label="2">无</el-radio>
                                    </div>
                                </el-col>
                            </el-row>
                            <div class="yin">
                                <div class="bas-t">
                                    <i><img src="../../images/map/20.png" alt="" class="i1"></i>
                                    <p>详细信息</p>
                                </div>
                                <el-row>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;员工编号&nbsp;&nbsp;
                                            <el-input placeholder="" style="width: 217px" v-model="Alertdata.person_number"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple-light">
                                            <div class="grid-content bg-purple" style="line-height: 36px">
                                                婚姻状况
                                                <el-radio v-model="Alertdata.marital_status" label="married">已婚
                                                </el-radio>
                                                <el-radio v-model="Alertdata.marital_status" label="unmarried">未婚
                                                </el-radio>
                                                <el-radio v-model="Alertdata.marital_status" label="divorced">离异
                                                </el-radio>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            <div class="grid-content bg-purple" style="line-height: 36px">
                                                生育状况
                                                <el-radio v-model="Alertdata.fertility_status" label="fertile">已育
                                                </el-radio>
                                                <el-radio v-model="Alertdata.fertility_status" label="noChildren">
                                                    未育
                                                </el-radio>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身份证号&nbsp;&nbsp;
                                            <el-input placeholder="" style="width: 217px" v-model="Alertdata.id_number"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple-light">
                                            微信号码
                                            <el-input placeholder="" style="width: 217px" v-model="Alertdata.wechat_number"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            QQ号码
                                            <el-input placeholder="" style="width: 217px" v-model="Alertdata.qq_number"></el-input>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子邮箱&nbsp;&nbsp;
                                            <el-input placeholder="" style="width: 217px" v-model="Alertdata.email"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="16">
                                        <div class="grid-content bg-purple-light">
                                            户籍地址
                                            <el-input placeholder="" style="width: 540px" v-model="Alertdata.permanent_address"></el-input>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;银行卡号&nbsp;&nbsp;
                                            <el-input placeholder="" style="width: 217px" v-model="Alertdata.bank_card_number"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple-light">
                                            所属银行
                                            <el-input placeholder="" style="width: 217px" v-model="Alertdata.owned_bank"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            社保卡号
                                            <el-input placeholder="" style="width: 217px" v-model="Alertdata.social_security_number"></el-input>
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="bas-t">
                                    <i><img src="../../images/map/21.png" alt="" class="i1"></i>
                                    <p>求学经历</p>
                                </div>
                                <!--求学经历组件-->
                                <study v-on:studydata="studyJson" :echo="Alertdata.learning_experience"></study>

                                <div class="bas-t">
                                    <i><img src="../../images/map/22.png" alt="" class="i1"></i>
                                    <p>工作履历</p>
                                </div>
                                <work v-on:workdata="workJson" :echoWork="Alertdata.job_experience"></work>
                                <div class="bas-t">
                                    <i><img src="../../images/map/23.png" alt="" class="i1"></i>
                                    <p>关系人</p>
                                </div>
                                <el-row v-for="(item,index) in this.Alertdata.relation_list" :key="index">
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夫/妻&nbsp;&nbsp;
                                            <el-input placeholder="" style="width: 215px" v-model="item.relation_person"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple-light">
                                            手机号码
                                            <el-input placeholder="" style="width: 215px" v-model="item.relation_phone"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            工作单位
                                            <el-input placeholder="" style="width: 215px" v-model="item.relation_unit"></el-input>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row v-for="(items,index) in this.Alertdata.relation_list" :key="index">
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;子/女&nbsp;&nbsp;
                                            <el-input v-model="childrenMale" placeholder="男" class="male"></el-input>
                                            <el-input v-model="childrenFamale" placeholder="女" class="female"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple-light">
                                            出生日期
                                            <el-input placeholder="" style="width: 215px" v-model="items.relation_child_birthday"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级
                                            <el-input placeholder="" style="width: 215px" v-model="items.relation_child_grade"></el-input>
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="bas-t">
                                    <i><img src="../../images/map/24.png" class="i1" alt=""></i>
                                    <p>其他</p>
                                </div>
                                <el-row>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            <div class="grid-content bg-purple" style="line-height: 36px">
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;面试资格&nbsp;&nbsp;
                                                <el-radio v-model="interview_qualification" label="1">有</el-radio>
                                                <el-radio v-model="interview_qualification" label="2">无</el-radio>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            <div class="grid-content bg-purple" style="line-height: 36px">
                                                试听资格
                                                <el-radio v-model="form.audition_qualification" label="1">有</el-radio>
                                                <el-radio v-model="form.audition_qualification" label="2">无</el-radio>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="grid-content bg-purple">
                                            显示范围
                                            <el-input placeholder="部分人可见" style="width: 215px" v-model="form.moneys1"></el-input>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="dian"></div>
                            <div class="cang">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="text" @click="yin()" style="color: #10beff">
                                更多选填..
                            </el-button>
                            </div>
                            <el-row>
                                <button @click.stop.prevent="adds()" class="btn btn-left">提交修改</button>
                            </el-row>
                            <div class="dian"></div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Heads from '../../components/head'
    import Const from '../../base/commonJS/const'
    import qs from 'qs'
//    import Jcrop from '../../components/jcrops'
    import Education from './education'
//    import Teaching from './Teaching'
    import sell from './sell'
    import work from './work'
    import study from './study'
//    import DefiningRoles from '../../page/accountNumber/DefiningRoles/DefiningRoles'

    export default {
        components: {
            Heads,
//            Jcrop,
            'ed': Education,
//            'Teaching': Teaching,
            'sell': sell,
            'study': study,
            'work': work,
//            'Def': DefiningRoles
        },
        data() {
            return {
                com: this.$route.params.data,
                img:require('../../images/system-campus/bj.jpg'),
                sex: {
                    'male': '',
                    'female': ''
                },
                tis: false,
                stop: false,
                faces: false,
                subjectData: false,
                TeData: false,
                teachers: true,
                TeDatas: false,
                talBol: false,
                stopp: '',
                teacher_levels: '',
                enducation_levels: '',
                is_teach: '',
                Alertdata: {},
                malename: '',
                femalename: '',
                childrenFamale: '',
                childrenMale: '',
                contract_time: '',
                qualification_certificate: '',
                interview_qualification: '',
                form: {
                    //                    总校ID
                    'head_id': '',
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
                    'account_status': '',
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
                    //                          婚姻状况（married:已婚，unmarried:未婚，divorced:离异）
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
                xueli:[
                    {'stuId':'doctor','name':'博士研究生','showImg':false},
                    {'stuId':'master','name':'硕士研究生','showImg':false},
                    {'stuId':'undergraduate','name':'本科','showImg':false},
                    {'stuId':'specialty','name':'专科','showImg':false},
                    {'stuId':'highSchool','name':'高中','showImg':false},
                    {'stuId':'doctorReading','name':'博士研究生在读','showImg':false},
                    {'stuId':'masterReading','name':'硕士研究生在读','showImg':false},
                    {'stuId':'postDoctoral','name':'博士后','showImg':false}
                ],
                jiaos:[
                    {'stuId':'lowLevel','name':'初级教师','showImg':false},
                    {'stuId':'middleLevel','name':'中级教师','showImg':false},
                    {'stuId':'undergraduate','name':'高级教师','showImg':false},
                    {'stuId':'specialty','name':'特级教师','showImg':false},
                ],
                jiaosj:"",
                xuelidj:"",
            }
        },
        mounted() {
            console.log(this.com)
            var urls1 = Const.staff+"v1/dossier/staff/findStaffById?accessToken=aaaa&account_id="+this.com;
            this.axios.post(urls1).then((res) => {
                console.log('找到要改变的数据', res.data.messages.data)
                let newArr  = [this.goDay(res.data.messages.data.contract_begin_time) ,this.goDay(res.data.messages.data.contract_end_time)];
                this.contract_time = newArr

                //回显学历等级
                this.xueli.map((ele,index)=>{
                    if(res.data.messages.data.enducation_level == ele.stuId){
                        this.xuelidj = ele.name;
                    }
                });
                //回显教师级别
                this.jiaos.map((ele,index)=>{
                    if(res.data.messages.data.teacher_level == ele.stuId){
                        this.jiaosj = ele.name;
                    }
                });




                this.Alertdata = res.data.messages.data
                //回显名字
                if (this.Alertdata.sex == 'Male') {
                    this.sex.male = "Male";
                    this.malename = this.Alertdata.full_name
                }
                if (this.Alertdata.sex == 'Female') {
                    this.sex.male = "Famale";
                    this.femalename = this.Alertdata.full_name
                }


                if (this.Alertdata.is_teach == true) {
                    this.is_teach = '1'
                }
                if (this.Alertdata.is_teach == false) {
                    this.is_teach = '2'
                }
                if (this.Alertdata.qualification_certificate == true) {
                    this.qualification_certificate = '1'
                }
                if (this.Alertdata.qualification_certificate == false) {
                    this.qualification_certificate = '2'
                }
                if (this.Alertdata.interview_qualification == true) {
                    this.interview_qualification = '1'
                }
                if (this.Alertdata.interview_qualification == false) {
                    this.interview_qualification = '2'
                }
                if (this.Alertdata.audition_qualification == true) {
                    this.audition_qualification = '1'
                }
                if (this.Alertdata.audition_qualification == false) {
                    this.audition_qualification = '2'
                }


            })
        },
        methods: {
            goDay(num) {
                let oldTime = new Date();
                let newTimeToString = oldTime.toString().split(' ') //转成字符串
                return  newTimeToString[0] + ' ' + newTimeToString[1] + ' ' + newTimeToString[2] + ' 00:00:00 CST ' + newTimeToString[3] ///拼接成CST日期格式
            },
            //转换时间样式
            dataInit(res) {
                return new Date(res).toLocaleDateString().split('/').join('-')
            },


            adds() {
                //修改名字后判断
                if (this.malename != '' && this.femalename == '') {
                    this.Alertdata.sex = 'Male'
                    this.Alertdata.full_name = this.malename;
                }
                if (this.femalename == '' && this.femalename != '') {
                    this.Alertdata.sex = 'Female'
                    this.Alertdata.full_name = this.femalename
                }




                var urls = Const.staff + '/v1/dossier/staff/modifyStaff?accessToken=aaaa'
                //判断是否存在姓名（必填信息）
                if (this.sex.male == '' && this.sex.female == '') {
                    this.stopp = '请完善必填信息！'
                    this.stop = true
                    this.faces = false
                    this.tis = true
                    console.log(10086)
                }
                //判断男女性别
                if (this.sex.male == '' && this.sex.female != '') {
                    this.form.full_name = this.sex.female
                    this.form.sex = 'female'
                }
                if (this.sex.male != '' && this.sex.female == '') {
                    this.form.full_name = this.sex.male
                    this.form.sex = 'male'
                }
                //删除多余项的Time
//                this.Alertdata.job_experience.map((ele, index3) => {
//                    if(ele.time){
//                        delete ele.time;
//                    }
//                });
//                this.Alertdata.learning_experience.map((ele, index4) => {
//                    if(ele.time){
//                        delete ele.time;
//                    }
//                });

                if (this.talBol = true) {
                    //提交
                    delete this.Alertdata.person_number;
                    this.Alertdata = JSON.stringify(this.Alertdata);

                    this.axios.post(urls, qs.stringify({accountJsonStr:this.Alertdata})).then((res) => {
                        this.data1 = res.data
                        console.log('成功修改员工信息', this.data1)
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
                        let urltall = Const.staff+'/v1/dossier/staff/existsPhone?accessToken=aaaa&head_school_id='+this.headSchoolId+'&phone=' + tal
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
                this.Alertdata.courseList = data
                console.log(this.Alertdata.courseList)
            },
            //学历等级组件子传父
            studyJ(data) {
//                this.enducation_levels = data[1]
                this.xuelidj = data[1];
                this.Alertdata.enducation_level = data[0]
                //                console.log(this.form.enducation_level);
            },
            //教师级别组件子传父
            TeacJ(data) {
                this.jiaosj = data[1]
                this.Alertdata.teacher_level = data[0]
                //                console.log(this.form.teacher_level);
            },
            //点击更多选填
            yin() {
                $('.yin').toggle(1000)
                $('.cang').hide()
            },
            //求学经历组件的数据
            studyJson(data) {
                this.Alertdata.learning_experience = data
            },
            //工作经历组件的数据
            workJson(data) {
                this.Alertdata.job_experience = data
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
                if (this.is_teach == 1) {
                    this.teachers = true
                    this.Alertdata.is_teach = true
                } else {
                    this.teachers = false
                    this.Alertdata.is_teach = false
                }
                if (this.is_teach == 2) {
                    console.log('执行2')
                    this.teachers = false
                    this.Alertdata.is_teach = false
                } else {
                    this.teachers = true
                    this.Alertdata.is_teach = true
                }

            },
            //生日
            brit() {
                console.log(this.Alertdata.brithday)
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

                this.Alertdata.contract_begin_time = this.contract_time[0]
                this.Alertdata.contract_end_time = this.contract_time[1]
                console.log(this.contract_time)
            },
            //点击添加求学经历
            add1() {
                console.log(0)
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
        /*background: url(../assets/bj.jpg) no-repeat;*/
        background-size: 100% 100%;
        background-position: 0 58px;
    }

    .main {
        width: 1350px;
        margin: 50px auto;
        position: relative;
        overflow: hidden;
    }

    .el-input__icon {
        display: none;
    }

    .el-icon-date {
        display: none;
    }

    .info-r {
        width: 283px;
        height: 36px;
        float: left;
        /*margin-left: 47px;*/
        box-sizing: border-box;
        .ch {
            width: 72px;
            height: 36px;
            float: left;
            span {
                line-height: 36px;
                font-size: 16px;
                color: #666;
            }
        }
        .in {
            width: 211px;
            height: 36px;
            float: left;
            i {
                display: none;
            }
            .el-input__inner {
                width: 100%;
                background: #f2f5f8;
            }
        }
    }

    .stop {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        /*display: none;*/
        .prompt {
            width: 380px;
            height: 240px;
            position: absolute;
            top: 50%;
            left: 50%;
            background: #fff;
            margin-left: -190px;
            margin-top: -120px;
            border-radius: 5px;
            .pro-t {
                width: 380px;
                height: 50px;
                background: #f2f5f8;
                font-size: 16px;
                text-align: center;
                line-height: 50px;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
                span {
                    float: right;
                    margin-top: 3px;
                    margin-right: 10px;
                }
            }
            .pro-b {
                width: 380px;
                height: 190px;
                img {
                    margin-top: 45px;
                    margin-left: 170px;
                }
                p {
                    color: #959595;
                    text-align: center;
                    font-size: 16px;
                    margin-top: 20px;
                }
            }
        }

        .face {
            width: 380px;
            height: 560px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -190px;
            margin-top: -280px;
            background: #fff;
            .face-t {
                width: 380px;
                height: 54px;
                line-height: 54px;
                font-size: 16px;
                background: #f2f5f8;
                text-align: center;
                color: #636464;
                span {
                    position: absolute;
                    right: 15px;
                    top: 2px;
                }
            }
        }
    }

    .left {
        width: 280px;
        height: 940px;
        float: left;
        /*border: 1px solid #ffffff;*/
        border-radius: 5px;
        .green {
            width: 280px;
            height: 12px;
            background: #31c27c;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .center {
            width: 280px;
            height: 254px;
            background: #fff;
            position: relative;
            .portrait {
                width: 78px;
                height: 78px;
                margin-top: 25px;
                margin-left: 100px;
                .por {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }
        .name {
            width: 100%;
            margin-top: 23px;
            text-align: center;
            color: #7a7a7a;
            .el-icon-share {
                color: palevioletred;
            }
        }
        .datas {
            margin-top: 28px;
            li {
                text-indent: 3em;
                line-height: 32px;
                color: #666;
                img {
                    margin-top: 3px;
                }
            }
        }
        .birthday {
            width: 280px;
            height: 130px;
            margin-top: 12px;
            background: #fff;
            border-radius: 5px;
            .el-row {
                height: 65px;
                .el-col {
                    height: 65px;
                    position: relative;
                    .bott {
                        color: #666;
                        font-size: 12px;
                    }
                    div {
                        margin-top: 12px;
                        text-align: center;
                        position: relative;
                        .add1 {
                            display: inline-block;
                        }
                    }
                }
            }
        }
        .details {
            width: 280px;
            height: 528px;
            margin-top: 12px;
            background: #fff;
            border-radius: 5px;
            div {
                width: 280px;
                height: 60px;
                border-radius: 5px;
                line-height: 60px;
                i {
                    float: left;
                    margin-left: 30px;
                }
                span {
                    float: right;
                    margin-right: 30px;
                    color: #666;
                }
            }
        }

    }

    .right {
        width: 1010px;
        float: left;
        /*background: #ffffff;*/
        /*border: 1px solid red;*/
        border-radius: 5px;
        margin-left: 10px;
        .detailed {
            width: 1010px;
            height: 52px;
            display: flex;
            align-items: center;
            background: #fff;
            border-radius: 5px;
            justify-content: space-between;
            i {
                float: right;
                margin-right: 40px;
            }
            span {
                color: #31c27c;
                margin-left: 30px;
            }
        }
        .basic {
            background: #fff;
            width: 1010px;
            border-radius: 5px;
            margin-top: 10px;
            p {
                text-indent: 20px;
            }
            .cang {
                width: 977px;
                height: 210px;
            }
            .dian {
                width: 977px;
                height: 30px;
            }
            .btn {
                width: 176px;
                height: 35px;
                background: #31c27c;
                border: none;
                border-radius: 5px;
                color: #fff;
                font-size: 16px;
            }
            .btn-left {
                margin-left: 284px;
            }
            .btn-lefts {
                margin-left: 20px;
            }
            .bas-t {
                width: 977px;
                height: 70px;
                /*border: 1px solid black;*/
                margin: 0 auto;
                line-height: 70px;
                p {
                    font-size: 14px;
                    color: #31c27c;
                }
                i {
                    display: inline-block;
                    width: 26px;
                    height: 26px;
                    margin-left: 20px;
                    margin-top: 20px;
                    float: left;
                    .i1 {
                        float: left;
                        margin-top: 5px;
                        margin-left: 12px;
                    }
                }
            }
            .yin {
                display: none;
            }
            .bas1 {
                width: 977px;
                margin: 0 auto;
                /*border: 1px solid yellow;*/
                .el-row {
                    margin-top: 18px;
                    .el-button {
                        background: none;
                        border: none;
                    }
                }
                .male, .female {
                    width: 105px;
                    height: 35px;
                }
                .el-input {
                    background: #f2f5f8;
                }
                .inputt {
                    width: 215px;
                }
                .inputts {
                    width: 540px
                }
                .role {
                    width: 215px;
                }
                .roleadd {
                    margin-top: 8px;
                }
                .roles {
                    width: 840px;
                }
                .el-date-editor {
                    width: 215px;
                }
            }
        }
        .start {
            position: relative;
            top: -6px;
            left: 0;
        }
    }
</style>

