<style lang="less" scoped>
.apply{
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
        .edit{
            width: 25px;
            height: 25px;
        }
    }
    .section{
        width: 977px;
        .grade-set {
            background-color: #fff;
            height: 180px;
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
            }
        }
        .sel-nav{
            margin-top: 28px;
            p{
                float: left;
                margin-bottom: 24px;
            }
            p:nth-of-type(1),
            p:nth-of-type(3)
            {
                width: 390px;
            }
            .show-tay{
                font-size: 12px;
                color: #999;
                margin-left:29px ;
            }
        }
        .couse-age{
            .apply-vai{
                margin-top: 28px;
                span{
                    margin-right: 29px;
                }
            }
        }
        .couse-tea-ch{
            .apply-cosClass{
                margin-top: 20px;
                p{
                    span{
                        display: inline-block;
                        width: 285px;
                    }
                    .timeSel{
                       .el-input_prefix{
                           display: none;
                       }
                        .el-input_suffix{
                            display: none;
                        }
                    }
                }
            }
        }
        .Vip{
            .sec-top{
                display: flex;
                justify-content: space-between;
                span:nth-of-type(2){
                    margin-right: 5px;
                    color: #999;
                }
            }
            p{
                margin-top: 28px;
            }
        }
        .mustFill{
           p{
               margin-top: 27px;
               span:nth-of-type(1){
                   margin-right: 0;
               }
               span{
                   margin-right:43px ;
                   position: relative;
                   i{
                      position: absolute;
                       right: -21px;
                       bottom: 2px;
                   }
               }
           }
            p:nth-of-type(1),
            p:nth-of-type(2)
            {
                span{
                    cursor: pointer;
                }
                span:nth-of-type(1){
                    cursor: default;
                }
            }
        }
        .sub-bt{
            width: 100%;
            height: 46px;
            background-color: #fff;
            border-radius: 5px;
            margin-top: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .el-date-editor.el-input, .el-date-editor.el-input__inner{
            width: 80px;
            border: none;
        }
    }
}
</style>
<template>
    <div class="apply">
        <div class="top">
            <span>报名设置</span>
            <i class="edit ico-init ico-edit"></i>
        </div>
        <div class="section">
            <div class="grade-set">
                <div class="sec-top">
                    <span>报名方式 · 设置</span>
                </div>
                <div class="sel-nav hf">
                    <p>
                        <el-radio v-model="radio" label="学生报名，直接报名入班">
                            学生报名，直接报名入班
                        </el-radio>
                    </p>
                    <p>
                        <el-radio v-model="radio" label="  学生先报入课程（而非班级），然后由校区根据该课程的报名情况自行分班">
                            学生先报入课程（而非班级），然后由校区根据该课程的报名情况自行分班
                        </el-radio>
                    </p>
                    <p>
                        <el-radio v-model="radio" label=" 学生报入某个班级的N个课程，而后校方再进行分班">
                            学生报入某个班级的N个课程，而后校方再进行分班
                        </el-radio>
                    </p>
                </div>
        </div>
            <div class="grade-set">
                <div class="sec-top">
                    <span>年级课 · 家长端 ·报名 · 设置</span>
                </div>
                <div class="sel-nav hf">
                    <p>
                        <el-radio v-model="ageClass" label=" 家长端随时可报当期和下期">
                            家长端随时可报当期和下期
                        </el-radio>
                    </p>
                    <p>
                        <el-radio v-model="ageClass" label="家长端随时可报当期（校方开启下期报名后，可报当期和下期）">
                            家长端随时可报当期（校方开启下期报名后，可报当期和下期）
                        </el-radio>
                    </p>
                    <p>
                        <el-radio v-model="ageClass" label="只能在校方设定的时段报读某其课程">
                            只能在校方设定的时段报读某其课程
                        </el-radio>
                    </p>
                </div>
            </div>
            <div class="grade-set">
                <div class="sec-top">
                    <span>年级课 · 教师端 · PC端 · 报名 · 设置</span>
                </div>
                <div class="sel-nav hf">
                    <p>
                        <el-radio v-model="claCosePc" label="随时可报当期和下期">
                            随时可报当期和下期
                        </el-radio>
                    </p>
                    <p>
                        <el-radio v-model="claCosePc" label="只能在校方设定的时段报读某其课程，与家长端同步开启或关闭">
                            只能在校方设定的时段报读某其课程，与家长端同步开启或关闭
                        </el-radio>
                    </p>
                    <p>
                        <el-radio v-model="claCosePc" label="家长端随时可报当期（校方开启下期报名后，可报当期和下期）">
                            家长端同步，只能在校方设定的时段报读某期课程
                        </el-radio>
                    </p>
                    <p class="show-tay">
                        无论选择哪项，校方为某课程开启的 “多期连报”，都不受影响
                    </p>
                </div>
            </div>
            <div class="couse-age grade-set">
                <div class="sec-top">
                    <span>报课程 · 报年级课 · 设置</span>
                </div>
                <div class="apply-vai hf">
                    <p>
                        <span>报名有效期结束后，如继续有学生报读入学</span>
                        <el-radio v-model="applyCorse" label="可以报入具体的班级">可以报入具体的班级</el-radio>
                        <el-radio v-model="applyCorse" label="只能报年级课">只能报年级课</el-radio>
                    </p>
                </div>
            </div>
            <div class="couse-tea-ch grade-set">
                <div class="sec-top">
                    <span>报课程 · 报年级课 · 设置</span>
                </div>
                <div class="apply-cosClass hf">
                    <p>
                        <span>家长手机端的报名时间为</span>
                        <el-radio v-model="parApplyTime" label="1">每天24小时随时报名</el-radio>
                        <el-radio v-model="parApplyTime" label="2">每天&nbsp;&nbsp;&nbsp;&nbsp; <el-time-picker
                            class="timeSel"
                            v-model="value1"
                            :picker-options="{}"
                            placeholder="任意时间点">
                        </el-time-picker>
                            ——
                            <el-time-picker
                                class="timeSel"
                                v-model="value2"
                                :picker-options="{}"
                                placeholder="任意时间点">
                            </el-time-picker></el-radio>
                    </p>
                    <p>
                        <span>教师手机端可以操作报名时间为</span>
                        <el-radio v-model="teApplyTime" label="1">每天24小时随时报名</el-radio>
                        <el-radio v-model="teApplyTime" label="2">每天&nbsp;&nbsp;&nbsp;&nbsp; <el-time-picker
                            class="timeSel"
                            v-model="value3"
                            :picker-options="{}"
                            placeholder="任意时间点">
                        </el-time-picker>
                            ——
                            <el-time-picker
                                class="timeSel"
                                :title = "value4"
                                v-model="value4"
                                :picker-options="{}"
                                placeholder="任意时间点">
                            </el-time-picker></el-radio>
                    </p>
                </div>
            </div>
            <div class="Vip grade-set">
                <div class="sec-top">
                    <span>VIP报名 · 报名 · 设置</span>
                    <span>本项内容由系统规则，无需设置</span>
                </div>
                <p>一对一课程与一对N课程家长首次报名，只可在教室手机端操作，家长手机端不可操作</p>
            </div>
            <div class="mustFill grade-set">
                <div class="sec-top">
                    <span>系统默认的学生报名必填项目为：学生姓名 · 学生性别 · 年级年龄 · 公立学校 · 信息来源 · 联系人姓名 · 联系人关系 · 联系人电话 · 备注</span>
                </div>
                <p class="mustSel">
                    <span>贵校增设的学生报名必填项目为：</span><span>生日<i ></i></span><span>身份证号<i ></i></span><span>出生日期<i ></i></span><span>住址<i ></i></span><span>接送人<i ></i></span>
                </p>
                <p class="selInput">
                    <span>贵校增设的学生报名选填项目为：</span><span>联系人工作单位<i ></i></span><span>接送工具<i ></i></span><span>性格特点<i ></i></span>
                </p>
            </div>
            <div class="sub-bt">
                    <i class ="sel-circle-ok" @click = "ok"></i>
            </div>
        </div>
        <v-table :data = "constdata"  v-if="tableShow" @close = "close"></v-table>
    </div>
</template>
<script>
    import ElRadio from "../../../../node_modules/element-ui/packages/radio/src/radio.vue";
    import system  from  '@commonJS/const'
    import table from '../../../components/Popup.vue'
    export default {
        components: {
            ElRadio,
            'v-table' : table
        },
        data() {
            return {
                radio:"学生报名，直接报名入班", //报名方式
                ageClass:"",//年级课 · 家长端 ·报名 · 设置
                claCosePc:"",//年级课 · 教师端 · PC端 · 报名 · 设置
                parApplyTime:"",//家长手机端的报名时间
                teApplyTime:"",//教师手机端可以操作报名时间
                value1: new Date(2017, 9, 10, 18, 40),
                value2: new Date(2017, 9, 10, 18, 40),
                value3: new Date(2017, 9, 10, 18, 40),
                value4: new Date(2017, 9, 10, 18, 40),
                applyCorse:"",
                tableShow: false,
                constdata : {
                    title: "提示",
                    data : "&nbsp;&nbsp;&nbsp; 保存成功！",
                    isCheck : true,
 //                   isMark : false
//                    isImg: true,//图片
//                    isWords: true,//文字
//                    warn : true,//叹号
//                    succe : true,//对号
        },
            };
        },
        methods:{
            close(){
                this.tableShow = false
                console.log('关闭')
            },
            ok(){
                this.tableShow = true;
                console.log('打开')
            }
        },
        mounted(){
            /*滚动条回顶部*/
            $("html,body").scrollTop(0);
            /*贵校增设的学生报名必填项目*/
            $(".mustSel span").on("click",function () {
                if($(this).find("i").hasClass("ico-selOk")){
                    $(this).find("i").removeClass("ico-selOk")
                }else {
                    $(this).find("i").addClass("ico-selOk")
                }
            })
            /*贵校增设的学生报名必填项目*/
            $(".selInput span").on("click",function () {
                if($(this).find("i").hasClass("ico-selOk")){
                    $(this).find("i").removeClass("ico-selOk")
                }else {
                    $(this).find("i").addClass("ico-selOk")
                }
            })
//            let obj ={
//                headSchoolId:this.$ls.get("USER_INFO").headSchoolId
//            }
//            console.log(888,system.integrated)
//            this.axios.post(system.integrated+"v1/integrated/registerRule/initRegisterRule",obj).then(res => {
//                console.log(666,res)
//            }).catch(error => {
//                err(error)
//            })
        }
    };
</script>
