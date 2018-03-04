<style lang="less" scoped>
.teach-remark{
    color: #333;
.top {
    width: 929px;
    height: 48px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px 0 22px;
   .top-l{
       display: flex;
       align-items: center;
       span:nth-of-type(1) {
           font-size: 16px;
           color: #319863;
       }
       span:last-child{
           font-size: 14px;
           color: #999;
       }
       .hint{
           margin-top: 3px;
           margin-left: 3px;
           margin-right: 3px;
       }
       .hint:hover {
           display: inline-block;
           height: 16px;
           width: 16px;
           background-image: url(../../../images/common-icon/allnotes_hover.png);
           background-repeat: no-repeat;
           background-size: 100% 100%;
           position: relative;
           cursor: pointer;
           .hint-mess {
               display: block;
           }
       }
       .hint-mess{
           display: none;
           width: 225px;
           border-radius: 5px;
           background-color: #31c27c;
           padding: 9px 13px;
           color: #fff;
           position: absolute;
           top:-49px;
           left: -17px;
           span{
               display: block;
               width: 0;
               height: 0;
               border: 6px solid #31c27c;
               position: absolute;
               bottom: -12px;
               left: 19px;
               border-right: 6px solid #fff;
               border-bottom: 6px solid #fff;
               border-left: 6px solid #fff;
           }
       }
   }
.edit {
    width: 25px;
    height: 25px;
   }
}
    .teach-section{
        width: 979px;
        .grade-set {
            background-color: #fff;
            min-height: 174px;
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
            .bot{
                display: flex;
                flex-wrap: wrap;
                margin-top: 18px;
                p{
                    width: 33.33%;
                    margin-bottom: 30px;
                    span{
                        position: relative;
                    }
                }
                .in{
                    width:192px ;
                    border-bottom: 1px dashed #999;
                    padding-bottom: 4px;
                }
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
        div{
            width: 183px;
            display: flex;
            height: 46px;
            justify-content: space-between;
            align-items: center;

        }
    }
}
</style>
<template>
    <div class="teach-remark">
        <div class="top">
            <div class="top-l">
                <span>教学点评</span>
                    <i class="hint ico-hint">
                    <div class="hint-mess">
                        <p>这是教师对学生所做点评的设置区域</p>
                        <span></span>
                        </div>
                    </i>
                <span>(每项20条以内)</span>
            </div>
            <i class="edit ico-init ico-edit" @click="canCel = !canCel"></i>
        </div>
        <div class="teach-section">
            <div class="grade-set">
                <div class="sec-top">
                    <span>好评内容设置</span>
                </div>
                <div class="bot">
                    <p v-for="(item,index) in goodReArr"><span>{{item.name}} <i class="ico-camcel-X"  @click="cancelGood(index)" v-if ="canCel"></i></span></p>
                    <p v-if="googBool">
                        <input class="in" type="text" max="12" v-model="goodRe"  placeholder="12字以内" @blur = "goodInput">
                    </p>
                </div>
            </div>
            <div class="grade-set">
                <div class="sec-top">
                    <span>中评内容设置</span>
                </div>
                <div class="bot">
                    <p v-for="(item,index) in mediumReArr"><span>{{item.name}} <i class="ico-camcel-X"  v-if="canCel" @click="cancelMedium(index)"></i></span></p>
                    <p v-if="mediumBool">
                        <input class="in" type="text" max="12" v-model="mediumRe" placeholder="12字以内" @blur = "mediumInput">
                    </p>
                </div>
            </div>
            <div class="grade-set">
                <div class="sec-top">
                    <span>差评内容设置</span>
                </div>
                <div class="bot">
                    <p v-for="(item,index) in badReArr"><span >{{item.name}} <i class="ico-camcel-X" v-if="canCel"  @click="cancelBad(index)"></i></span></p>
                    <p v-if="badBool">
                        <input class="in" type="text" max="12" v-model="badRe" placeholder="12字以内" @blur = "badInput">
                    </p>
                </div>
            </div>
            <div class="grade-set">
                <div class="sec-top">
                    <span>鼓励内容设置</span>
                </div>
                <div class="bot">
                    <p v-for="(item,index) in heartenArr"><span >{{item.name}} <i class="ico-camcel-X"  v-if="canCel" @click="cancelHearten(index)"></i></span></p>
                    <p v-if="heartenBool">
                        <input class="in" type="text" max="12" v-model="heartenRe" placeholder="12字以内" @blur= "heartenInput">
                    </p>
                </div>
            </div>
            <div class="grade-set">
                <div class="sec-top">
                    <span>表扬的内容设置</span>
                </div>
                <div class="bot">
                    <p v-for="(item,index) in praiseReArr"><span >{{item.name}} <i class="ico-camcel-X" v-if="canCel"  @click="cancelPraise(index)"></i></span></p>
                    <p v-if="praiseBool">
                        <input class="in" type="text" max="12" v-model="praiseRe" placeholder="12字以内" @blur="praiseInput">
                    </p>
                </div>
            </div>
            <div class="grade-set">
                <div class="sec-top">
                    <span>建议的内容设置</span>
                </div>
                <div class="bot">
                    <p v-for="(item,index) in adviseReArr"><span >{{item.name}} <i class="ico-camcel-X"  v-if="canCel" @click="cancelAdvise(index)"></i></span></p>
                    <p v-if="adviseBool">
                        <input class="in" type="text" max="12" v-model="adviseRe" placeholder="12字以内" @blur="adviseInput">
                    </p>
                </div>
            </div>
        </div>
        <div class="sub-bt">
            <div>
                <i class ="click-right" @click="last"></i>
                <i class ="sel-circle-ok" @click="save"></i>
                <i class ="click-right" @click="next"></i>
            </div>
        </div>
    </div>
</template>
<script>
    import system  from  '@commonJS/const'
    export default {
        data() {
            return {
                goodRe : "",//好评自定义输入值
                goodReArr : [],//好评自定义数组
                googBool : true,//控制好评输入框显示隐藏
                mediumBool : true,//中评输入框显示隐藏
                mediumReArr : [],//中评自定义数组
                mediumRe : "",//中评自定义输入值
                badBool : true,//中评输入框显示隐藏
                badReArr : [],//中评自定义数组
                badRe : "",//中评自定义输入值
                heartenBool : true,//鼓励输入框显示隐藏
                heartenArr : [],//鼓励自定义数组
                heartenRe : "",//鼓励自定义输入值
                praiseBool : true,//表扬输入框显示隐藏
                praiseReArr : [],//表扬自定义数组
                praiseRe : "",//表扬自定义输入值
                adviseBool : true,//建议输入框显示隐藏
                adviseReArr : [],//建议自定义数组
                adviseRe : "",//建议自定义输入值
                canCel : false,////控制修改的灰色叉显示隐藏
            };
        },
        methods:{
            goodInput(){
                if(this.goodRe.replace(/(^\s*)|(\s*$)/g, "") != ""){
                    if(this.goodRe.replace(/(^\s*)|(\s*$)/g, "").length > 12){
                        this.$message({
                            message: '字符长度不能大于12',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.goodReArr.push({
                            name:this.goodRe,//好评名称
                            is_check : "",//是否选中
                            head_school_id :this.$ls.get("USER_INFO").headSchoolId,//总校id
                            user_id : "",//user_id
                            create_time : "",//新增时间
                            is_delete : "",//是否删除
                            update_user_id : "",//修改人id
                            update_time : ""// 修改时间
                        });
                        this.goodRe = "";
                    }
                    if( this.goodReArr.length == 20){
                      this.googBool = false;
                    }
                }
            },//好评
            cancelGood(i){
                this.goodReArr.splice(i,1);
                this.googBool = true;
            },
            mediumInput(){
                if(this.mediumRe.replace(/(^\s*)|(\s*$)/g, "") != ""){
                    if(this.mediumRe.replace(/(^\s*)|(\s*$)/g, "").length > 12){
                        this.$message({
                            message: '字符长度不能大于12',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.mediumReArr.push({
                            name:this.mediumRe,//中评名称
                            is_check : "",//是否选中
                            head_school_id :this.$ls.get("USER_INFO").headSchoolId,//总校id
                            user_id : "",//user_id
                            create_time : "",//新增时间
                            is_delete : "",//是否删除
                            update_user_id : "",//修改人id
                            update_time : ""// 修改时间
                        });
                        this.mediumRe = "";
                    }
                    if( this.mediumReArr.length == 20){
                        this.mediumBool = false;
                    }
                }
            },//中评
            cancelMedium(i){
                this.mediumReArr.splice(i,1);
                this.mediumBool = true;
            },
            badInput(){
                if(this.badRe.replace(/(^\s*)|(\s*$)/g, "") != ""){
                    if(this.badRe.replace(/(^\s*)|(\s*$)/g, "").length > 12){
                        this.$message({
                            message: '字符长度不能大于12',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.badReArr.push({
                            name:this.badRe,//差评名称
                            is_check : "",//是否选中
                            head_school_id :this.$ls.get("USER_INFO").headSchoolId,//总校id
                            user_id : "",//user_id
                            create_time : "",//新增时间
                            is_delete : "",//是否删除
                            update_user_id : "",//修改人id
                            update_time : ""// 修改时间
                        });
                        this.badRe = "";
                    }
                    if( this.badReArr.length == 20){
                        this.badBool = false;
                    }
                }
            },//差评
            cancelBad(i){
                this.badReArr.splice(i,1);
                this.badBool = true;
            },
            heartenInput(){
                if(this.heartenRe.replace(/(^\s*)|(\s*$)/g, "") != ""){
                    if(this.heartenRe.replace(/(^\s*)|(\s*$)/g, "").length > 12){
                        this.$message({
                            message: '字符长度不能大于12',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.heartenArr.push({
                            name:this.heartenRe,//鼓励名称
                            is_check : "",//是否选中
                            head_school_id :this.$ls.get("USER_INFO").headSchoolId,//总校id
                            user_id : "",//user_id
                            create_time : "",//新增时间
                            is_delete : "",//是否删除
                            update_user_id : "",//修改人id
                            update_time : ""// 修改时间
                        });
                        this.heartenRe = "";
                    }
                    if( this.heartenArr.length == 20){
                        this.heartenBool = false;
                    }
                }
            },//鼓励
            cancelHearten(i){
                this.heartenArr.splice(i,1);
                this.heartenBool = true;
            },
            praiseInput(){
                if(this.praiseRe.replace(/(^\s*)|(\s*$)/g, "") != ""){
                    if(this.praiseRe.replace(/(^\s*)|(\s*$)/g, "").length > 12){
                        this.$message({
                            message: '字符长度不能大于12',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.praiseReArr.push({
                            name:this.praiseRe,//表扬名称
                            is_check : "",//是否选中
                            head_school_id :this.$ls.get("USER_INFO").headSchoolId,//总校id
                            user_id : "",//user_id
                            create_time : "",//新增时间
                            is_delete : "",//是否删除
                            update_user_id : "",//修改人id
                            update_time : ""// 修改时间
                        });
                        this.praiseRe = "";
                    }
                    if( this.praiseReArr.length == 20){
                        this.praiseBool = false;
                    }
                }
            },//表扬
            cancelPraise(i){
                this.praiseReArr.splice(i,1);
                this.praiseBool = true;
            },
            adviseInput(){
                if(this.adviseRe.replace(/(^\s*)|(\s*$)/g, "") != ""){
                    if(this.adviseRe.replace(/(^\s*)|(\s*$)/g, "").length > 12){
                        this.$message({
                            message: '字符长度不能大于12',
                            center: true,
                            duration: 1500,
                        })
                    }else {
                        this.adviseReArr.push({
                            name:this.adviseRe,//建议名称
                            is_check : "",//是否选中
                            head_school_id :this.$ls.get("USER_INFO").headSchoolId,//总校id
                            user_id : "",//user_id
                            create_time : "",//新增时间
                            is_delete : "",//是否删除
                            update_user_id : "",//修改人id
                            update_time : ""// 修改时间
                        });
                        this.adviseRe = "";
                    }
                    if( this.adviseReArr.length == 20){
                        this.adviseBool = false;
                    }
                }
            },//建议
            cancelAdvise(i){
                this.adviseReArr.splice(i,1);
                this.adviseBool = true;
            },
            save(){
                let headTeachingCommentJsonStr = {
                    head_school_id : this.$ls.get("USER_INFO").headSchoolId,
                    high_evaluation_list : this.goodReArr,
                    middle_evaluation_list : this.mediumReArr,
                    poor_evaluation_list : this.badReArr,
                    encourage_comment_list : this.heartenArr,
                    praise_list: this.praiseReArr,
                    advice_comment_list : this.adviseReArr,
                    user_id : "",
                    create_time : "",
                    is_delete : "",
                    update_user_id : "",
                    update_time : "",
                    version : "",
                }
                let data = {
                    headTeachingCommentJsonStr : headTeachingCommentJsonStr,
                    accessToken:"aaa"
                }
                this.axios.post(system.integrated+"v1/integrated/comment/insertOrUpdateHeadTeachingComment",data).then(res => {
                    console.log("111",res)
                }).catch(error => {
                    err(error)
                })
            },
            next(){
                this.$router.push("/systemHead/comprehensive/comprehensive-approve");
            },
            last(){
                this.$router.push("/systemHead/comprehensive/comprehensive-tuition");
            }
        }
    };
</script>
