<template>
    <div>
        <div class="top">
            <div class="top_left" v-if="titleTrue">
                {{bigName}} · {{smallName}} · {{sNum}}人
            </div>
            <div class="top_left" v-if="!titleTrue">
                全部 · {{vague}} · {{sNum}}人
            </div>
            <div class="top_right">
                <input type="text" v-model="vague">
                <img src="../../../images/map/1_03.png" alt="" @click="mirror()">
                <i class="ico-init ico-add" @click="add()"></i>
                <i class="ico-init ico-leave"></i>
            </div>
        </div>
        <div class="right_right">
            <div class="staff" v-for="(itemstaff,indexstaff) in ulsData" :key="indexstaff">
                <div class="photo" @click="tz(itemstaff.id)">
                    <div class="head">
                        <img :src="itemstaff.image" alt="">
                    </div>
                    <div class="name">
                        {{itemstaff.full_name}}
                    </div>
                </div>
                <div class="basic">
                    <div class="basic_top">
                        <div class="tal">手机：{{itemstaff.account}}</div>
                        <div class="age">生日：{{dataInit(itemstaff.brithday)}}</div>
                        <div class="school_age">校龄：{{dataInits(itemstaff.induction_time)}}</div>
                    </div>
                    <div class="basic_bottom">
                        <div class="work">{{role(itemstaff.school_roles)}}</div>
                        <div class="age">{{roles(itemstaff.school_roles)}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { mapState } from 'vuex'
    import contapi from '@commonJS/const'
    export default {
        components: {

        },
        data() {
            return {
                com:"",
                someArr:"",
                num:0,
                frn:"",
                uls:"",
                vague:"",
                objs:{},
                titleTrue:true
            }
        },
        computed: {
            ...mapState({
                ulsData: state => state.perData.ulsData.data,
                bigName:state => state.perData.bigName,
                smallName:state => state.perData.smallName,
                sNum:state => state.perData.ulsData.totalCount
            })
        },
        mounted(){

        },
        methods: {
            //跳转到添加员工档案的路由配置
            add(){
                this.$router.push('/perArchives/add');
            },
            //跳转到个人详细信息的路由配置，传值个人ID号
            tz(id){
                //将ID号储存到vuex
                this.$store.commit("GET_BASIC",id);
                this.$router.push('/perArchives/personal');
            },
            //转换时间格式
            dataInit(res){
                return    new Date(res).toLocaleDateString().split('/').join("-");
            },
            dataInits(res){
                var times = new Date();//今天的时间
                var time = new Date(res);//入职时间
                var years = times.getFullYear();//现在的年份
                var months = times.getMonth()+1;//现在的月份
                var year = time.getFullYear();//入职的年份
                var month = time.getMonth()+1;//入职的月份
                var y = years-year;
                var m = months-month;
                if(y==0){
                    return  m+"月";
                }else{
                    return y+ "年"+ m+"月";
                }
                if(m<0){
                    return y-1;
                    m+12;
                }
            },
            //岗位角色
            role(x){
                if(x[0]!=undefined){
                    return x[0].first_dept_name+" · "+x[0].role_name+" · "+x[0].second_dept_name;
                }else{
                    return ""
                }
            },
            roles(x){
                if(x[1]!=undefined){
                    if(x[2]!=undefined){
                        return x[1].first_dept_name+" · "+x[1].role_name+" · "+x[1].second_dept_name+"...";
                    }else{
                        return x[1].first_dept_name+" · "+x[1].role_name+" · "+x[1].second_dept_name;
                    }
                }else{
                    return ""
                }
            },
            mirror(){
//                var urlsname = contapi.staff+"v1/dossier/staff/getStaffListPage";
                this.objs = {
                    accessToken:this.$ls.get('USER_INFO').accessToken,
                    head_school_id:this.$ls.get("USER_INFO").headSchoolId,
                    search_key:this.vague
                }
                this.$emit("zbData",this.objs);
                this.titleTrue = false;
            }

        },
        $watch: {
        }


    }
</script>

<style lang="less" scoped>
    @mc:#31c27c;
    .top{
        width: 1008px;
        height: 52px;
        background: #ffffff;
        border-radius: 5px;
    }
    .top_left{
        float: left;
        font-size: 16px;
        color: @mc;
        line-height: 52px;
        margin-left: 30px;
    }
    .top_right{
        height: 52px;
        float: right;
        display: flex;
        align-items:center;
        position: relative;
        img{
            position: absolute;
            top: 18px;
            right: 80px;
            cursor:pointer;
        }
    }
    .top_right input{
        width: 148px;
        margin-right: 13px;
        border: none;
        outline: none;
        border-bottom: 1px solid @mc;
        box-sizing: border-box;
        background: ;
    }
    .top_right i{
        margin-right: 13px;
    }
    .right_right{
        width: 1008px;
        height: 620px;
        margin-top: 12px;
        overflow: scroll;
    }
    .right_right::-webkit-scrollbar {display:none}
    .staff{
        width: 1008px;
        height: 146px;
        background: #ffffff;
        border-radius: 5px;
        margin-top: 12px;
    }
    .staff:first-child{
        margin-top: 0;
    }
    .photo{
        width:200px;
        height: 146px;
        float: left;
        cursor:pointer;
    }
    .head{
        width: 200px;
        height: 60px;
        float: right;
        margin-top: 32px;
        text-align: center;
        border-right: 1px solid #ebf4f9;
        img{
            border-radius: 50%;
            width: 60px;
            height: 60px;
        }
    }
    .name{
        width: 200px;
        float: right;
        text-align: center;
        margin-top: 12px;
        color: #7f7f7f;
    }
    .basic{
        width: 747px;
        height: 146px;
        float: right;
        color: #666666;
        font-size: 14px;
    }
    .basic_top{
        width: 747px;
        height: 23px;
        margin-top: 32px;
    }
    .tal{
        width:300px;
        float: left;
        text-indent: 2em;
        background: url("../../../images/map/9.png") no-repeat 2px 0px;
    }
    .work{
        width:300px;
        height: 19px;
        float: left;
        text-indent: 2em;
        background: url("../../../images/map/10.png") no-repeat 2px 0px;
    }
    .age{
        width: 240px;
        height: 19px;
        float: left;
    }
    .school_age{
        float: left;
    }
    .basic_bottom{
        margin-top: 38px;
    }

</style>


