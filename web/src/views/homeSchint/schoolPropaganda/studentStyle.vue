<style lang="less" >
    .stuSty{
        .stuPicShow {
            width: 689px;
            background-color: #fff;
            border-radius: 6px;
            padding: 23px 28px;
            h3 {
                margin-bottom: 20px;
            }
            .picShow {
                width: 110%;
                height: 673px;
                /*background-color: #3baaf0;*/
                overflow-y: auto;
                .addStu {
                    width: 147px;
                    height: 180px;
                    margin-right: 32px;
                    float: left;
                    border: 1px dashed #dfe0e8;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    cursor: pointer;
                    .posCen {
                        img {
                            margin-bottom: 4px;
                        }
                    }
                }
                .picSel-mess {
                    width: 147px;
                    height: 180px;
                    float: left;
                    margin-right: 32px;
                    position: relative;
                    margin-bottom: 44px;
                    box-sizing: border-box;
                    .pic {
                        width: 100%;
                        height: 100%;
                    }
                    .acncel {
                        display: inline-block;
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        background: url("../../../assets/interconnect/stuStyxxx.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    .evaluate-show {
                        width: 100%;
                        height: 32px;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        background: rgba(000, 000, 000, 0.3);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            cursor: pointer;
                        }
                        span {
                            color: #fff;
                            margin-left: 3px;
                            font-size: 12px;
                            margin-top: -2px;
                        }
                    }
                    .stuName {
                        width: 100%;
                        height: 44px;
                        text-align: center;
                        line-height: 44px;
                        position: absolute;
                        bottom: -44px;
                        left: 0;
                    }
                }

            }
        }
        .messageAdd{
            .stu-top{
                border-radius: 6px;
                background-color: #fff;
                padding:0 0 21px 26px;
                margin-bottom: 16px;
                h3{
                    height: 57px;
                    line-height: 57px;
                }
                .stu-end-left{
                    display: flex;
                    .pinSize{
                        width: 100%;
                        height: 100%;
                    }
                    .el-upload  {
                        display:block;
                        width: 90px;
                        height: 90px;
                        border: 1px dashed #d9d9d9;
                        border-radius: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            margin-bottom: 2px;
                        }
                        span{
                            display: block;
                            color:#8c939d ;
                        }
                    }
                    .avatar-uploader:hover {
                        border-color: #20a0ff;
                    }
                    .input-mess{
                        height: 90px;
                        margin-left: 34px;
                        input{
                            width:508px ;
                            height: 45px;
                            box-sizing: border-box;
                            border-bottom: 1px solid #eeeff5;
                        }
                    }
                }
            }
            .stu-center{
                /*height: 212px;*/
                border-radius: 6px;
                background-color: #fff;
                margin-bottom: 5px;
                padding:0 0 22px 26px;
                h3{
                    height: 57px;
                    line-height: 57px;
                }
                .picShow{
                    .ngl_img{
                        #fromImg{
                            display: flex;
                            img{
                                margin-bottom: 16px;
                            }
                            .el-upload--picture-card{
                                width: 147px;
                                height: 177px;
                                display: flex;
                                line-height: 0px;
                                justify-content: center;
                                align-items: center;
                                border-radius: 0;
                                flex-direction: column;
                                font-size: 15px;
                                color: #666;
                                background: #F7F7FB;
                                img{
                                    display: block;
                                    width: 20px;
                                    margin-bottom: 16px;
                                }
                                .pinSize{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .el-upload-list--picture-card .el-upload-list__item{
                                width: 147px;
                                height: 177px;
                            }
                            .el-upload-list--picture-card .el-upload-list__item{
                                margin-right: 14px;
                            }
                        }

                    }
                }
            }
            .stu-bottom{
                /*height: 364px;*/
                border-radius: 6px;
                background-color: #fff;
                padding:0 26px 22px 26px;
                h3{
                    height: 60px;
                    line-height: 60px;
                }
                .section{
                    width: 100%;
                    height:213px;
                    padding-top: 25px;
                    border-top: 1px solid #eeeff5;
                    font-size: 14px;
                    color: #333;
                    line-height: 30px;
                    overflow:hidden;
                    /*white-space:nowrap;*/
                    text-overflow:ellipsis;
                    .el-textarea__inner{
                        border: none;
                    }
                }
                .school-sel{
                    height: 60px;
                    line-height: 60px;
                    border-top: 1px solid  #eeeff5 ;
                    border-bottom: 1px solid  #eeeff5 ;
                    .sp-bo{
                        display: inline-block;
                        width: 108px;
                        border-bottom: 1px solid #31c27c;
                        padding: 5px 0;
                        color: #999;
                        text-indent: 3px;
                    }
                    .p1{
                        margin-right: 11px;
                    }
                    .p2{
                        span{
                            color:#878787 ;
                            margin-left: 5px;
                        }
                    }
                    .p3{
                        margin-left: 15px;
                        span{
                            margin-left: 3px;
                        }
                    }
                }
                .school-sty{
                    height: 60px;
                    line-height: 60px;
                    overflow: hidden;
                    overflow-y: auto;
                    ul{
                        li{
                            display: inline-block;
                            margin-right:16px;
                            width:125px;
                            height: 24px;
                            background-color:#f2f5f8 ;
                            line-height: 24px;
                            text-align: center;
                            position: relative;
                            border-radius: 12px;
                            i{
                                display: inline-block;
                                cursor: pointer;
                                width:10px;
                                height: 10px;
                                background: url("../../../assets/interconnect/caxx.png") no-repeat;
                                background-size: 100% 100%;
                                margin-left:13px;
                                cursor: pointer;
                            }
                        }
                    }
                }
                .stu-bo-fo{
                    border-top:1px solid #eeeff5 ;
                    padding-top: 21px;
                    width: 100%;
                    text-align: center;
                    span{
                        display: inline-block;
                        font-size: 16px;
                        height: 32px;
                        width: 172px;
                        text-align: center;
                        line-height: 32px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    span:nth-of-type(1){
                        color:#999 ;
                        margin-right: 25px;
                        border: 1px solid #e4e4e4;
                    }
                    span:nth-of-type(2){
                        color:#fff ;
                        margin-right: 25px;
                        background-color:  #31c27c;
                    }
                }
            }

        }
        .fix-com{
            position: fixed;
            margin: auto;
            z-index: 999;
            top: 50%;
            left: 50%;
            width: 896px;
            height: 620px;
            transform: translateX(-448px) translateY(-310px);
            background-color: #fff;
            border-radius: 6px;
            .fix-top{
                width: 100%;
                height: 60px;
                background-color: #eff3f5;
                text-align: center;
                line-height: 60px;
                font-size: 18px;
                position: relative;
                span{
                    position: absolute;
                    left: 44px;
                    cursor: pointer;
                }
                .ul-top-right{
                    position: absolute;
                    font-size: 16px;
                    color:  #31c27c;
                    right: 60px;
                    top:0px;
                    cursor: pointer;
                }

            }  i{
                   position: absolute;
                   cursor: pointer;
                   top:22px;
                   right: 23px;
                   display: inline-block;
                   width: 16px;
                   height: 16px;
                   background: url("../../../assets/interconnect/bigX.png") no-repeat;
                   background-size: 100% 100%;
               }
            .fix-nav{
                padding: 0 0px 0 44px;
                ul{
                    height:467px;
                    overflow: hidden;
                    overflow-y: auto;
                    font-size: 14px;
                    li{
                        padding: 22px 0 18px 72px;
                        position: relative;
                        border-bottom: 1px solid #f2f5f7;
                        .p1{
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 14px;
                            .sp1{
                                color: #31c27c;
                            }
                            .sp2{
                                color: #999;
                                margin:0 14px;
                            }
                            .sp3{
                                color: #999;
                            }
                            .riSp{
                                margin-top: -1px;
                                color: #999;
                                position: relative;
                                .zan-ri{
                                    margin-right: 30px;
                                }
                                .cancel{
                                    cursor: pointer;
                                    margin-right: 54px;
                                    &:hover{
                                        color:#31c27c ;
                                    }
                                }
                                i{
                                    display: inline-block;
                                    width:15px ;
                                    height: 13px;
                                    background: url("../../../assets/interconnect/favour.png") no-repeat;
                                    background-size: 100% 100%;
                                    position: absolute;
                                    top: 3px;
                                    left:-21px;
                                }
                            }
                        }
                        .p2{
                            display: flex;
                            justify-content: space-between;
                            span:nth-of-type(2){
                                color: #999;
                                cursor: pointer;
                                margin-top: -3px;
                                &:hover{
                                    color: #31c27c;
                                }
                            }
                        }
                        .head-pic{
                            display: inline-block;
                            width:30px ;
                            height: 30px;
                            background: url("../../../assets/interconnect/picStu.png") no-repeat;
                            background-size: 100% 100%;
                            position: absolute;
                            top: 16px;
                            left:30px;
                        }
                        .head-sel-one{
                            display: inline-block;
                            width:20px ;
                            height: 20px;
                            background: url("../../../assets/interconnect/cir1.png") no-repeat;
                            background-size: 100% 100%;
                            position: absolute;
                            top: 20px;
                            left:0px;
                            cursor: pointer;
                        }
                        .head-sel-Two{
                            display: inline-block;
                            width:20px ;
                            height: 20px;
                            background: url("../../../assets/interconnect/selTrue.png") no-repeat;
                            background-size: 100% 100%;
                            position: absolute;
                            top: 20px;
                            left:0px;
                            cursor: pointer;
                        }
                    }
                }
            }
            .btDell{
                width: 100%;
                text-align: center;
                span{
                    display: inline-block;
                    width:177px;
                    height: 33px;
                    line-height: 33px;
                    text-align: center;
                    color: #fff;
                    font-size: 16px;
                    background-color: #31c27c;
                    border-radius: 5px;
                    margin-top: 25px;
                    cursor: pointer;
                }
            }
        }
        .selCor {
            position: fixed;
            margin: auto;
            z-index: 999;
            top: 50%;
            left: 50%;
            width: 750px;
            height: 620px;
            transform: translateX(-375px) translateY(-310px);
            background-color: #fff;
            border-radius: 6px;
            .fix-top {
                width: 100%;
                height: 58px;
                background-color: #eff3f5;
                line-height: 58px;
                text-align: center;
                border-top-right-radius: 6px;
                border-top-left-radius: 6px;
                font-size: 16px;
                span{
                    &:hover{
                        color:  #31c27c;
                    }
                }
                i {
                    position: absolute;
                    cursor: pointer;
                    top: 22px;
                    right: 23px;
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    background: url("../../../assets/interconnect/bigX.png") no-repeat;
                    background-size: 100% 100%;
                }
            }
            .navArea{
                width: 100%;
                height: 62px;
                text-align: center;
                line-height: 62px;
                position: relative;
                span{
                    display: inline-block;
                    width: 66px;
                    height: 24px;
                    border-radius: 31px;
                    text-align: center;
                    line-height: 24px;
                    margin-right: 20px;
                    background-color:#f2f5f8 ;
                }
                span:last-of-type{
                    background-color: #31c27c;
                    color: #fff;
                    cursor: pointer;
                }
                .fixCue{
                    position: absolute;
                    top: 5px;
                    right: 40px;
                    color:  #31c27c;
                    display: flex;
                    align-items: center;
                    i{
                        display: inline-block;
                        width: 18px;
                        height: 14px;
                        background: url("../../../assets/interconnect/cue.png") no-repeat;
                        background-size: 100% 100%;
                        margin-right: 5px;
                    }
                }
            }
            .selSchool-se{
                padding:0 60px 0 35px ;
                .tetle{
                    color:#31c27c ;
                    display: flex;
                    align-items: center;
                    /*line-height: 14px;*/
                    i{
                        display: inline-block;
                        width: 607px;
                        height: 1px;
                        border-bottom: 1px dashed #dedede;
                        margin-left: 20px;
                    }
                }
                .reg-school{
                    .navArray{
                        height:155px;
                        overflow: hidden;
                        overflow-y: auto;
                    }
                    .tetle{
                        color:#31c27c ;
                        display: flex;
                        align-items: center;
                        /*line-height: 14px;*/
                        i{
                            display: inline-block;
                            width: 420px;
                            height: 1px;
                            border-bottom: 1px dashed #dedede;
                        }
                    }
                }
                .navArray{
                    width: 110%;
                    padding: 0 2px 20px 2px;
                    &:after{
                        content: "";
                        overflow: hidden;
                        display: block;
                        height: 0;
                        clear: both;
                    }
                    li{
                        width: 103px;
                        height:25px;
                        background-color: #f2f5f8;
                        text-align: center;
                        line-height: 25px;
                        border-radius: 12.5px;
                        float: left;
                        margin-right: 35px;
                        margin-top:17px ;
                        cursor: pointer;
                    }
                }
            }
            .btn{
                position: absolute;
                height: 99px;
                width: 100%;
                bottom: 0;
                left: 0;
                line-height: 99px;
                text-align: center;
                span{
                    display: inline-block;
                    height: 33px;
                    line-height: 33px;
                    width: 177px;
                    background-color:#31c27c ;
                    color: #fff;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
<template>
    <!--主页-->
    <div class="stuSty">
        <div class="stuPicShow" v-show="bool">
            <h3>
                展示列表( <span>{{showPeoNum}}</span>人 )
            </h3>
            <div class="picShow">
                <div class="addStu" @click="bool=false">
                    <div class="posCen">
                        <img src="../../../assets/interconnect/stuStyAdd.png" alt="">
                        <p>添加学生</p>
                    </div>
                </div>
                <div class="picSel-mess" v-for="item in stuList">
                    <img @click="upMess(item)" class="pic" :src= 'item.profilePhoto' alt="">
                    <i class="acncel" @click="delStuMess(item)"></i>
                    <div class="evaluate-show"  @click="commentList(item)">
                        <img  src="../../../assets/interconnect/stuStymess.png" alt="">
                        <span>{{item.commentCount}}</span>
                    </div>
                    <p class="stuName">{{item.studentName}}</p>
                </div>
            </div>
        </div>
        <!--学生信息添加 -->
        <div class="messageAdd" v-show="!bool">
            <div class="stu-top">
                <h3>学生信息</h3>
                <div class="stu-end-left">
                    <el-upload
                        id="from_img"
                        class="avatar-uploader"
                        action="/api/api-aliyunoss/ossController/uploadImageOss?accessToken=aaaa&folder=header/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <div>
                            <img class="pinSize" v-if="imageUrl" :src="imageUrl">
                            <img v-if="!imageUrl" src="../../../assets/interconnect/stuStyAdd.png">
                            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                            <span v-if="!imageUrl">学生头像</span>
                        </div>
                    </el-upload>
                    <div class="input-mess">
                        <input type="text" class="in-One" v-model="stuName" placeholder="姓名">
                        <input type="text" v-model="stuSchol" placeholder="校区">
                    </div>
                </div>
            </div>
            <div class="stu-center">
                <h3>照片展示</h3>
                <div class="picShow">
                    <div class="ngl_img">
                        <el-dialog :visible.sync="dialogVisible" size="tiny">
                            <img width="100%"  :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <el-upload
                            id="fromImg"
                            action="/api/api-aliyunoss/ossController/uploadImageOss?accessToken=aaaa&folder=header/"
                            list-type="picture-card"
                            limit="3"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :on-success="ok"
                            :file-list="inputData"
                        >
                            <img src="../../../../static/home-icon/addimg.png"></img>
                            <span>添加学生图片</span>
                        </el-upload>
                    </div>
                </div>
            </div>
            <div class="stu-bottom">
                <h3>学生介绍</h3>
                <div class="section">
                    <el-input
                        type="textarea"
                        :rows="10"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
                <div class="school-sel">
                    <span class="p1">展示校区 :</span>
                    <span class="p2"><el-radio v-model="radio" label="2">全部校区</el-radio></span>
                    <span  class="p3" @click = "selchBool=true"><el-radio v-model="radio" label="1"><span class="sp-bo">选择校区</span></el-radio></span>
                </div>
                <div class="school-sty">
                    <ul>
                        <li v-for="(item,index) in title">{{item.school_name}}<i @click="dele(index)"></i></li>
                    </ul>
                </div>
                <footer class="stu-bo-fo">
                    <span @click="cancel()">取消</span>
                    <span @click="affirm()">确认</span>
                </footer>
            </div>
        </div>
        <!--评论弹窗-->
        <div class="fix-com" v-if="stuMeBool">
            <div class="fix-top">
                <span @click="allSel">全选</span>
                王晶晶&nbsp;({{commonNum}})
                <div class="ul-top-right" @click="editOrcancel($event)">
                   {{okOrcancel}}
                </div>
                <i  @click="tuiCh"></i>
            </div>
            <div class="fix-nav">
                <!--<div class="ul-top">-->
                <!--<div class="ul-top-left">-->
                <!--<i class="i1"></i>-->
                <!--<span>6</span>-->
                <!--<i class="i2"></i>-->
                <!--<span>26</span>-->
                <!--</div>-->
                <!--<div class="ul-top-right">-->
                <!--编辑-->
                <!--</div>-->
                <!--</div>-->
                <ul>
                    <li v-for="(item,index) in comment">
                        <p class="p1">
                            <span><span class="sp1">{{item.createUser}}</span><span class="sp2" :title="item.createTime">{{item.createTime}}</span><span class="sp3"></span></span>
                            <span class="riSp">
                              <span class="zan-ri"><i class="geXin"></i>&nbsp;{{item.commentLikeNum}}</span> <span class="cancel" @click = delCommon(item) >删除</span>
                           </span>
                        </p>
                        <p class="p2">
                            <span>{{item.commentContent}}</span>
                        </p>
                        <i class="head-pic"></i>
                        <i :class="item.bool == false?'head-sel-one':'head-sel-Two'" v-show="showOrhide" @click="pitchOn(item,index)"></i>
                    </li>
                </ul>
            </div>
            <div class="btDell" v-if="canceBtbool">
                <span @click="delDelList">删除</span>
            </div>
        </div>
        <!--校区选择-->
        <pub v-show="selchBool" @upup="changeCacer" :msg="msg"></pub>
    </div>
</template>
<script>
    import pub from '../../../components/selCampus'
    import  qs from  'qs'
    import { mapState } from 'vuex'
    import interconnection from  "../../../common/const"
    export default {
        data(){
            return{
                saveUrl:interconnection.interconnection+"v1/studentShow/saveStudentShow?accessToken=aaaa",
                getAllStuMessuRl:interconnection.interconnection+"v1/studentShow/findStudentShowList?headSchoolId="+this.$ls.get("USER_INFO").headSchoolId+"&accessToken=aaaa",
                imageUrl: '',//上传的图片路径
                submitPath:'https://jsonplaceholder.typicode.com/posts/',
                radio:'2',//全部和选择单选框
                bool:true, //控制信息添加显示隐藏
                stuMeBool:false,//控制评论弹窗显示隐藏
                dialogImageUrl:"",
                dialogVisible: false, //关闭放大的图片,
                selchBool:false, //控制选校区弹窗显示隐藏
                stuName:"",//学生姓名
                stuSchol:"",//学校名称
                textarea:"",//个人介绍
                schgList:"",//展示校区Id
                storeArr:[],//存储校区
                picLIst:[],//图片路径列表
                partOrAll:"",//是大区还是校区
                addPicBool:true,//
                stuList:[],
                showPeoNum:"",
                comment:[],
                commonNum:"",
                showOrhide:false,
                canceBtbool:false,
                okOrcancel:"编辑",
                inputData:[],
                alterOrsave:false,
                studentShowId:""
            }
        },
        components:{
            pub
        },
        computed:{
            ...mapState({
                title: state => state.scho.arrEnd
            })
        },
        watcher:{
            radio:function (a,b) {
                console.log(b,this.radio)
            }
        },
        methods:{
            delStuMess(item){
                this.axios.post(interconnection.interconnection+"/v1/studentShow/deleteStudentShow?studentShowId="+item.studentShowId
                    +"&accessToken=aaaa",).then(res => {
                    this.showStuList();
                }).catch(error => {
                    err(error)
                })
            },
            tuiCh(){
                this.stuMeBool=false;
                this.showStuList();
            },
            //编辑或者取消
            editOrcancel(e){
                if(this.okOrcancel=="编辑"){
                    this.okOrcancel="取消"
                    this.showOrhide = true;
                    this.canceBtbool = true;
                    for(let j = 0; j < this.comment.length; j++) {
                        this.$set(this.comment, j , Object.assign(this.comment[j],{bool : false}) )
                    }
                }else {
                    this.okOrcancel="编辑"
                    this.showOrhide = false;
                    this.canceBtbool = false;
                    for(let j = 0; j < this.comment.length; j++) {
                        this.$set(this.comment, j , Object.assign(this.comment[j],{bool : false}) )
                    }
                }
            },
            //点击勾选需要删除的项
            pitchOn(item,i){
                if(item.bool == false){
                    this.$set(this.comment,i, Object.assign(this.comment[i],{bool : true}) )
                }else{
                    this.$set(this.comment, i, Object.assign(this.comment[i],{bool : false}))
//                    console.log("我是谁",item.bool)
                }
            },
            //点击确认按钮，删除已经被选取的项
            delDelList(){
//                console.log(555)
                for(let i =0;i<this.comment.length;i++){
                    if(this.comment[i].bool == true){
                        this.axios.post(interconnection.interconnection+"/v1/studentShow/deleteStudentShowComment?studentShowCommentId="+this.comment[i].studentShowCommentId
                            +"&accessToken=aaaa",).then(res => {
                            this.commentList(this.comment[0]);
                            this.showStuList();
                            this.stuMeBool = false;
                        }).catch(error => {
                            console.log(error)
                        })
                    }
                }
            },
            upMess(item){
                this.axios.post(interconnection.interconnection+"/v1/studentShow/getStudentShow?studentShowId="+item.studentShowId
                    +"&accessToken=aaaa",).then(res => {
                    if(res.data.messages.data.showScopeType == "part"){
                          this.radio = "1";
                    }else {
                        this.radio = "2";
                    }
                    this.stuName = res.data.messages.data.studentName;
                    this.stuSchol = res.data.messages.data.schoolName;
                    this.imageUrl = res.data.messages.data.profilePhoto;
                    this.textarea = res.data.messages.data.studentIntro;
                    this.$store.commit("GET_SCHOOL_SEL",res.data.messages.data.schoolList);
                    for(let j =0;j<res.data.messages.data.introImages.length;j++){
                        this.inputData.push({url:res.data.messages.data.introImages[j]})
                    };
                    this.picLIst = res.data.messages.data.introImages;
                    this.studentShowId = res.data.messages.data.studentShowId;
                    console.log(this.studentShowId)
                    this.alterOrsave = true;
                    this.bool = false;
                }).catch(error => {
                    console.log(error)
                })
            },
            handleAvatarSuccess(res, file) {
                console.log("url",file)
                this.imageUrl = URL.createObjectURL(file.raw);
//                console.log(1231213342,this.imageUrl)
//                this.inputData.logo = res.messages.firsKey
            },
            beforeAvatarUpload(file) {
//                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

//                if (!isJPG) {
//                    this.$message.error('上传头像图片只能是 JPG 格式!');
//                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return  isLt2M;
            },
            handleRemove(file, fileList) {
                this.picLIst = [];
                for(let i =0;i < fileList.length;i++){
                    console.log(55555)
                    if(fileList[i].response){
                        console.log()
                        this.picLIst[i] = fileList[i].response.messages.firsKey;
                    }else{
                        this.picLIst[i] =  fileList[i].url;
                    }
                }
                console.log("haole",fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            ok(response,file,fileList){
              if(fileList.length> this.picLIst.length){
                  for(let i = this.picLIst.length; i<fileList.length;i++){
                      this.picLIst[i] = fileList[i].response.messages.firsKey;
                  }
              }
                console.log(this.picLIst)
            },
            changeCacer(msg){
                this.selchBool = msg;
            },
            dele(i){
                this.$store.state.scho.arrEnd.splice(i,1)
                this.$store.commit("GET_SCHOOL_SEL",this.$store.state.scho.arrEnd);
//                console.log(this.$store.state.scho.arrEnd)
            },
            allSel(){
                //处理操作数据时，调用次数据的地方不刷新
                for(let j = 0; j < this.comment.length; j++) {
                    this.$set(this.comment, j , Object.assign(this.comment[j],{bool : true}))
                }
            },
            affirm(){
                if(this.alterOrsave == false){
                    if(this.radio == 1){
                        this.partOrAll = "part";
                    }else {
                        this.partOrAll = "all";
                    }
                    if(this.imageUrl == ""){
                        this.$message({
                            message: '请上传学生头像',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if( this.stuName == ""){
                        this.$message({
                            message: '请填写姓名',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if(this.stuSchol ==""){
                        this.$message({
                            message: '请填写校区',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if(this.stuSchol ==""){
                        this.$message({
                            message: '请填写校区',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if(this.picLIst.length == 0){
                        this.$message({
                            message: '请上传照片到图片展示',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if(this.radio == 1 && this.$store.state.scho.arrEnd.length == 0){
                        this.$message({
                            message: '请选择校区',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                    }
//                console.log(this.$store.state.scho.arrEnd[0].school_id)
                    for(let i =0;i<this.$store.state.scho.arrEnd.length;i++ ){
                        this.storeArr.push({school_id:this.$store.state.scho.arrEnd[i].school_id})
                    }
                    let json = {
                        "headSchoolId":this.$ls.get("USER_INFO").headSchoolId,
                        "showScopeType":this.partOrAll,
                        "studentName":this.stuName,
                        "schoolName":this.stuSchol,
                        "profilePhoto":this.imageUrl,
                        "introImages":this.picLIst,
                        "studentIntro":this.textarea,
                        "schoolList":this.storeArr }
                    this.axios.post(this.saveUrl,qs.stringify({json:JSON.stringify(json)})).then(res => {
                        this.showStuList();
                        this.partOrAll = "";
                        this.stuName = "";
                        this.stuSchol = "";
                        this.imageUrl = "";
                        this.textarea ="";
                        this.picLIst =[];
                        this.storeArr = [];
                        this.$store.state.scho.arrEnd = [];
                        this.inputData =[];
                        this.bool = true;
                        this.radio = 2;
                    }).catch(error => {
                        err(error)
                    })
                }else {
                    if(this.radio == 1){
                        this.partOrAll = "part";
                    }else {
                        this.partOrAll = "all";
                    }
                    if(this.imageUrl == ""){
                        this.$message({
                            message: '请上传学生头像',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if( this.stuName == ""){
                        this.$message({
                            message: '请填写姓名',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if(this.stuSchol ==""){
                        this.$message({
                            message: '请填写校区',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if(this.stuSchol ==""){
                        this.$message({
                            message: '请填写校区',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if(this.picLIst.length == 0){
                        this.$message({
                            message: '请上传照片到图片展示',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                        return;
                    }
                    if(this.radio == 1 && this.$store.state.scho.arrEnd.length == 0){
                        this.$message({
                            message: '请选择校区',
                            center: true,
                            duration: 1500,
                            position: 'bottom-left'
                        })
                    }
//                console.log(this.$store.state.scho.arrEnd[0].school_id)
                    for(let i =0;i<this.$store.state.scho.arrEnd.length;i++ ){
                        this.storeArr.push({school_id:this.$store.state.scho.arrEnd[i].school_id})
                    }
                    let json = {
                        "headSchoolId":this.$ls.get("USER_INFO").headSchoolId,
                        "showScopeType":this.partOrAll,
                        "studentName":this.stuName,
                        "schoolName":this.stuSchol,
                        "profilePhoto":this.imageUrl,
                        "introImages":this.picLIst,
                        "studentIntro":this.textarea,
                        "studentShowId":this.studentShowId,
                        "schoolList":this.storeArr }
                    this.axios.post(this.saveUrl,qs.stringify({json:JSON.stringify(json)})).then(res => {
                        this.showStuList();
                        this.partOrAll = "";
                        this.stuName = "";
                        this.stuSchol = "";
                        this.imageUrl = "";
                        this.textarea ="";
                        this.picLIst =[];
                        this.storeArr = [];
                        this.$store.state.scho.arrEnd = [];
                        this.inputData =[];
                        this.bool = true;
                        this.radio = 2;
                        this.alterOrsave = false;
                        this.studentShowId = "";
                        console.log(99)
                    }).catch(error => {
                        err(error)
                    })
                }
            },
            cancel(){ //取消此条保存
                this.partOrAll = "";
                this.stuName = "";
                this.stuSchol = "";
                this.imageUrl = "";
                this.textarea ="";
                this.picLIst =[];
                this.storeArr = [];
                this.$store.state.scho.arrEnd = [];
                this.radio = 2;
                this.bool = true;
                this.alterOrsave = false;
                this.studentShowId = "";
                this.inputData =[];
            },
            showStuList(){
                this.axios.post(this.getAllStuMessuRl).then(res => {
                    this.stuList = res.data.messages.data;
//                    console.log(this.stuList)
                    this.showPeoNum = res.data.messages.data.length;
                }).catch(error => {
                    err(error)
                })
            },
            commentList(item){
//                this.axios.post(interconnection.interconnection+"/v1/studentShow/saveStudentShowComment?studentShowId="+item.studentShowId
//                    +"&accessToken=aaaa&commentContent=您好美女，借你的照片用一用，不要介意").then(res => {
//                    this.comment = res.data.messages.data;
//                    console.log(8889,this.comment);
//                }).catch(error => {
//                    err(error)
//                })
                this.axios.post(interconnection.interconnection+"/v1/studentShow/findStudentShowCommentList?studentShowId="+item.studentShowId
                    +"&accessToken=aaaa").then(res => {
//                        console.log(res.data.messages.data)
                    this.comment = res.data.messages.data;
                    for(let m =0;m< this.comment.length;m++){
                        this.$set(this.comment, m, Object.assign(this.comment[m],{bool : false}))
                    }
                    this.okOrcancel ="编辑";
                    this.canceBtbool =false;
                    this.showOrhide=false;
                    this.commonNum = res.data.messages.data.length;
                }).catch(error => {
                    err(error)
                })
                this.stuMeBool = true;
            },
            delCommon(item){
                this.axios.post(interconnection.interconnection+"/v1/studentShow/deleteStudentShowComment?studentShowCommentId="+item.studentShowCommentId
                    +"&accessToken=aaaa",).then(res => {
                    this.commentList(item);
                }).catch(error => {
                    console.log(error)
                })
            }
            //确认添加学生信息
        },
        mounted(){
          this.showStuList();
        }
    }
</script>
