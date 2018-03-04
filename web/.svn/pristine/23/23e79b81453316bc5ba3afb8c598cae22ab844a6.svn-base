<template>
    <div id="pre" :style="{backgroundImage:'url('+img+')'}">
        <Head-item></Head-item>
        <div class="main">
            <div class="top">
                <span class="sp1">
                    <span class="sps"></span>
                    员工档案
                </span>
                <span class="sp2">
                    <div class="sr">
                        <input type="text" class="query" @focus="query()" @blur="querys()" v-model="fangs">
                        <ul>
                            <!--<li v-for="item in newUsers1">{{item.full_name}}</li>-->
                        </ul>
                        <span class="fang" @click="fang()"></span>
                        <span class="add" @click="jum()"></span>
                        <span class="go"></span>
                    </div>
                </span>
            </div>
            <div class="center">
                <div class="main-l">
                    <ul class="list">
                        <li>
                            <img src="../../assets/map/1-1.png" alt="" class="list-i">
                            <!--<img src="./map/1.png" alt="" class="list-i">-->
                            总部
                            <img src="../../../static/perArchives/1_04_03.gif" alt="" class="list-i1">
                        </li>
                        <!--<li>-->
                            <!--<img src="./map/2-1.png" alt="" class="list-i">-->
                            <!--&lt;!&ndash;<img src="./map/2.png" alt="" class="list-i">&ndash;&gt;-->
                            <!--大区-->
                            <!--<img src="../../../static/perArchives/1_04_03.gif" alt="" class="list-i1">-->
                        <!--</li>-->
                        <li>
                            <img src="../../assets/map/3-1.png" alt="" class="list-i">
                            <!--<img src="./map/3.png" alt="" class="list-i">-->
                            地区
                            <img src="../../../static/perArchives/1_04_03.gif" alt="" class="list-i1">
                        </li>
                        <li>
                            <img src="../../assets/map/4-1.png" alt="" class="list-i">
                            <!--<img src="./map/4.png" alt="" class="list-i">-->
                            校区
                            <img src="../../../static/perArchives/1_04_03.gif" alt="" class="list-i1">
                        </li>
                        <li>
                            <img src="../../assets/map/5-1.png" alt="" class="list-i">
                            <!--<img src="./map/5.png" alt="" class="list-i">-->
                            教师
                            <img src="../../../static/perArchives/1_04_03.gif" alt="" class="list-i1">
                        </li>
                        <li>
                            <img src="../../assets/map/6-1.png" alt="" class="list-i">
                            <!--<img src="./map/6.png" alt="" class="list-i">-->
                            生日
                            <img src="../../../static/perArchives/1_04_03.gif" alt="" class="list-i1">
                        </li>
                        <li>
                            <img src="../../assets/map/7-1.png" alt="" class="list-i">
                            <!--<img src="./map/7.png" alt="" class="list-i">-->
                            校龄
                            <img src="../../../static/perArchives/1_04_03.gif" alt="" class="list-i1">
                        </li>
                    </ul>
                    <div class="listr-s">
                        <!--总校-->
                        <ul class="list-r">
                            <li v-for="item in deptss" @click="fun(item.dept_id)">{{item.dept_name}}</li>
                        </ul>
                        <!--月份-->
                        <ul class="list-r">
                            <li v-for="item1 in month" @click="funy(item1.index)">{{item1.ch_name}}</li>
                        </ul>
                        <!--校龄-->
                        <ul class="list-r">
                            <li v-for="item2 in age" @click="funx(item2.en_name)">{{item2.ch_name}}</li>
                        </ul>
                        <!--校区-->
                        <ul class="list-r">
                            <li v-for="item3 in lists" @click="funxq(item3.school_id)">{{item3.school_name}}</li>
                        </ul>
                        <!--部门-->
                        <ul class="list-r">
                            <li v-for="item4 in area" @click="funb(item4.dept_id)">{{item4.dept_name}}</li>
                        </ul>
                        <!--大区-->
                        <ul class="list-r">
                            <li v-for="item5 in dep">{{item5.dept_name}}</li>
                        </ul>
                        <!--科目-->
                        <ul class="list-r">
                            <li v-for="item6 in coun" @click="funk(item6.subject_id)">{{item6.subject_name}}</li>
                        </ul>
                    </div>
                </div>
                <div class="main-r">
                    <ul class="paging">
                        <li v-for="objs in staff">
                            <!--<a v-link="{ name: 'history', params: { deviceId: deviceId, dataId: dataId }}">history</a>-->
                            <div class="li-left"  @click="Jump(objs.id)">
                                <div class="li-img" :class="[objs.sex== 'Male' ? portraits: '']">
                                    <img :src="objs.image" alt="">
                                </div>

                                <p>{{objs.full_name}}</p>
                            </div>
                            <div class="li-right">
                                <div class="li-rt">
                                    <p>
                                        <span>电话：{{objs.account}}</span>
                                        <span class="birthday">生日：{{myfilter(objs.brithday)}}</span>
                                        <span class="age">校龄：{{myfilter1(objs.induction_time)}}</span>
                                        <img src="../../../static/perArchives/1_34.gif" alt="">
                                    </p>
                                </div>
                                <div class="li-rb">
                                    <p v-for="a in objs.school_roles" class="p">
                                        {{a.first_dept_name}}·{{a.role_name}}·{{a.second_dept_name}}
                                    </p>
                                    <img src="../../../static/perArchives/1_44.gif" alt="">
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="nowPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageAllTotal">
                </el-pagination>
            </div>
        </div>
    </div>

</template>

<script>
    import Head from '../../components/head'
    import Const from '../../common/const'
    export default {
        name: 'ho',
        components:{
            "Head-item":Head
        },
        data(){
            return{
                img:require('../../assets/bj.jpg'),
                portraits:'portraits',
                data:{},
                age:[],
                deptss:[],
                month:[],
                lists:[],
                area:[],
                dep:[],
                coun:[],
                staff:[],
                sex:"",
                ids:"",
                stamp:"",
                postone:{},
                posttwo:{},
                vague:"",
                nowPage: 1,//当前页面
                pageSize:10,//每次请求每页多少条
                pageAllTotal:100,//总的条数
                fangs:"",
                headSchoolId:""
            }
        },
        computed:{


//            前端模糊查询未实现
//            newUsers1:function (){
//                var vague = this.vague;
//                if(vague) {
//                    return this.staff.filter(function (item){
//                        return item.full_name.indexOf(vague) > -1;
//                    })
//                    return this.stall;
//                }
//            }
        },
        mounted() {
            this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId;
            $('.list-i').css('display','none');
            $('.list-i1').css('display','none');
            $('.list-i1').eq(0).css('display','block');
            $('.list-i').eq(0).css('display','block');
            $('.list-r').eq(0).css('display','block').siblings().css('display','none');
            $('.list li').eq(0).css('background','#ffffff').css('color','#58cd95');
            $('.list li').each(function(index){
                $('.list li').eq(index).click(function(){
                    $('.list-i1').css('display','none');
                    $('.list-i').css('display','none');
                    //总部
                    if($(this).index()== 0){
                        $('.list-r').eq(0).css('display','block').siblings().css('display','none');
                    }
                    if($(this).index()== 1){
                        $('.list-r').eq(4).css('display','block').siblings().css('display','none');
                    }
                    if($(this).index()== 2){
                        $('.list-r').eq(3).css('display','block').siblings().css('display','none');
                    }
                    if($(this).index()== 3){
                        $('.list-r').eq(6).css('display','block').siblings().css('display','none');
                    }
                    if($(this).index()== 4){
                        $('.list-r').eq(1).css('display','block').siblings().css('display','none');
                    }

                    if($(this).index()== 5){
                        $('.list-r').eq(2).css('display','block').siblings().css('display','none');
                    }
//                    if($(this).index()== 6){
//                        $('.list-r').eq(2).css('display','block').siblings().css('display','none');
//                    }


                    $(this).css('background','#ffffff').css('color','#58cd95').siblings().css('background','#f7f8fc').css('color','#666666');
                    $('.list-i1').eq($(this).index()).css('display','block');
                    $('.list-i').eq($(this).index()).css('display','block');

                })
            });
            //右边li
            $(".list-r").on("click", "li", function () {
                $(this).css('background','#ffffff').css('color','#58cd95').siblings().css('background','#f7f8fc').css('color','#666666');
            });

            //侧边
            var urls1 = Const.staff+"/v1/dossier/staff/menuInit?accessToken=aaaa&headSchoolId="+this.headSchoolId;
            this.axios.post(urls1).then((res) => {
                this.deptss = res.data.messages.head_school_depts;//总校传 dept-id
                this.month = res.data.messages.every_month;//月份 传en_name
                this.age = res.data.messages.school_age;//校龄传en_name
                this.lists = res.data.messages.school_list;//校区 传school-id
                this.area  = res.data.messages.area_depts;//部门传 dept-id
                this.dep = res.data.messages.region_depts;//大区部门无
                this.coun = res.data.messages.subject_account_count;//科目传？
                console.log(this.headSchoolId);
                console.log("侧边",res.data);
            }).catch(function(error) {
                console.log("侧边栏找不到");
            });
            //获取分页
            this.getStaffListPage();
        },
        methods:{
            getStaffListPage(){
                console.log(1)
                var urls = Const.staff+"v1/dossier/staff/getStaffListPage?accessToken=aaaa&head_school_id="+this.headSchoolId+"&pageNumber="+this.nowPage+"&pageSize="+this.pageSize;
                this.axios.post(urls).then((res) => {
                    this.staff = res.data.messages.data;
                    this.pageAllTotal = res.data.messages.totalCount;
                    console.log("分页",res.data);
                }).catch(function(error) {
                    console.log("分页找不到");
                    console.log(error)
                });
            },
            //elementui 分页
            handleSizeChange(val) {
                this.pageSize = val;
                this.getStaffListPage()
            },
            handleCurrentChange(val) {
                this.nowPage = val
                this.getStaffListPage()
            },
            //总校
            fun(aa){
                this.ids = aa;
                console.log(aa);
                var urlsz = Const.staff+"v1/dossier/staff/getStaffListPage?accessToken=aaaa&head_school_id="+this.headSchoolId+"&pageNumber="+this.nowPage+"&pageSize="+this.pageSize+"&dept_id="+aa+"&dept_type="+"HEADSCHOOL";
                this.axios.post(urlsz).then((res) => {
                    this.staff = res.data.messages.data;
                    this.pageAllTotal = res.data.messages.totalCount;
                    console.log("总校",res.data);
                }).catch(function(error) {
                    console.log("分页找不到");
                    console.log(error)
                });
            },
            //校龄
            funx(aa){
                console.log(aa);
                var urlsx = Const.staff+"v1/dossier/staff/getStaffListPage?accessToken=aaaa&head_school_id="+this.headSchoolId+"&pageNumber="+this.nowPage+"&pageSize="+this.pageSize+"&school_age="+aa;
                this.axios.post(urlsx).then((res) => {
                    this.staff = res.data.messages.data;
                    this.pageAllTotal = res.data.messages.totalCount;
                    console.log("校龄",res.data);
                }).catch(function(error) {
                    console.log("分页找不到");
                    console.log(error)
                });
            },
            //科目
            funk(aa){
                console.log(aa);
                var urlsx = Const.staff+"v1/dossier/staff/getStaffListPage?accessToken=aaaa&head_school_id="+this.headSchoolId+"&pageNumber="+this.nowPage+"&pageSize="+this.pageSize+"&subject_id="+aa;
                this.axios.post(urlsx).then((res) => {
                    this.staff = res.data.messages.data;
                    this.pageAllTotal = res.data.messages.totalCount;
                    console.log("科目",res.data);
                }).catch(function(error) {
                    console.log("分页找不到");
                    console.log(error)
                });
            },
            //校区
            funxq(aa){
              console.log(aa);
                var urlsx = Const.staff+"v1/dossier/staff/getStaffListPage?accessToken=aaaa&head_school_id="+this.headSchoolId+"&pageNumber="+this.nowPage+"&pageSize="+this.pageSize+"&school_id="+aa;
                this.axios.post(urlsx).then((res) => {
                    this.staff = res.data.messages.data;
                    this.pageAllTotal = res.data.messages.totalCount;
                    console.log("校区",res.data);
                }).catch(function(error) {
                    console.log("分页找不到");
                    console.log(error)
                });
            },
            //生日
            funy(aa){
                console.log(aa);
                var urlsx = Const.staff+"v1/dossier/staff/getStaffListPage?accessToken=aaaa&head_school_id="+this.headSchoolId+"&pageNumber="+this.nowPage+"&pageSize="+this.pageSize+"&brith_month="+aa;
                this.axios.post(urlsx).then((res) => {
                    this.staff = res.data.messages.data;
                    this.pageAllTotal = res.data.messages.totalCount;

                    console.log("月份",res.data);
                }).catch(function(error) {
                    console.log("分页找不到");
                    console.log(error)
                });
            },
            funb(aa){
                console.log(aa);
                var urlsb = Const.staff+"v1/dossier/staff/getStaffListPage?accessToken=aaaa&head_school_id="+this.headSchoolId+"&pageNumber="+this.nowPage+"&pageSize="+this.pageSize+"&dept_id="+aa+"&dept_type="+"AREA";
                this.axios.post(urlsb).then((res) => {
                    this.staff = res.data.messages.data;
                    this.pageAllTotal = res.data.messages.totalCount;
                    console.log("部门",res.data);
                }).catch(function(error) {
                    console.log("分页找不到");
                    console.log(error)
                });
            },

            Jump(id){
                this.$router.push('/modify/'+id)
            },
            jum(){
              this.$router.push('/add');
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
            myfilter1(now){
                var times = new Date();//今天的时间
                var time = new Date(now);//入职时间
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
            query(){
                $('.sr>ul'). slideDown(500);
                $('.sr li').eq(0).css('background','#d3ddd5').css('color','#666666').siblings().css('background','#d3ddd5').css('color','#666666');
                $('.sr li').each(function(index){
                   $('.sr li').eq(index).mousemove(function(){
                        $(this).css('background','#ffffff').css('color','#31c27c').siblings().css('background','#d3ddd5').css('color','#666666');
                   })
               })

            },
            querys() {
                $('.sr>ul'). slideUp(500);
            },
            fang(){
                var urlsname = Const.staff+"v1/dossier/staff/getStaffListPage?accessToken=aaaa&head_school_id="+this.headSchoolId+"&pageNumber="+this.nowPage+"&pageSize="+this.pageSize+"&search_key="+this.fangs;
                this.axios.post(urlsname).then((res) => {
                    this.staff = res.data.messages.data;
                    this.pageAllTotal = res.data.messages.totalCount;
                    console.log("姓名",res.data);
                }).catch(function(error) {
                    console.log("姓名找不到");
                    console.log(error)
                });
            }

    },
        watch: {
            // 如果路由有变化，会再次执行该方法
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
        position: relative;
    }
    .li-img{
        height: 75px;
        width: 200px;
        border-right: 1px solid #ebf4f9;
        margin-top: 30px;
        background: url("../../assets/map/38.png") no-repeat 70px 0;
        img{
            width: 60px;
            height: 60px;
            margin-left: 70px;
            border-radius: 50%;
        }
    }
    .main{
        width: 1300px;
        margin: 50px auto;
        position: relative;
        /*border: solid 1px black;*/
        overflow: hidden;
        .screen{
            width: 1300px;
            height: 626px;
            /*border: soldi red 1px;*/
        }
        .main-l{
            width: 280px;
            height: 626px;
            /*border: solid blue 1px;*/
            border-radius: 4px;
            background: #F7F8FC;
            float: left;
            .list{
                float: left;
                li{
                    width:154px;
                    color: #666666;
                    background: #f7f8fc;
                    height:54px;
                    line-height: 54px;
                    text-align: center;
                    position: relative;
                    .list-i{
                        width:18px;
                        height:18px;
                        position: absolute;
                        top:17px;
                        left:26px;
                    }
                    .list-i1{
                        width:19px;
                        height: 19px;
                        position: absolute;
                        top: 17px;
                        right: 0;
                    }
                }
            }
            .listr-s{
                width:124px;
                height:626px;
                float: left;
                .list-r{
                    float: right;
                    width:124px;
                    height:626px;
                    overflow: auto;
                    li{
                        width:124px;
                        color: #666666;
                        background: #ffffff;
                        height:54px;
                        line-height: 54px;
                        text-align: center;
                    }
                    /*li:nth-child(1){*/
                        /*color: #6fd4a4;*/
                        /*background: #ffffff;*/
                    /*}*/
                }
            }
        }
        .list-r::-webkit-scrollbar {/*隐藏滚轮*/
                display: none;
        }
        .main-r::-webkit-scrollbar {/*隐藏滚轮*/
            display: none;
        }
        .main-r{
            width:1008px;
            height:626px;
            /*border: 1px solid green;*/
            float: left;
            margin-left: 8px;
            border-radius: 4px;
            overflow: scroll;
            /*background: #ffffff;*/
        }
    }

    .top{
        margin-bottom: 12px;
        height: 52px;
    }
    .top span{
        float: left;
        line-height: 52px;
        background: #ffffff;
        border-radius: 4px;
        color: #31c27c;
        font-size: 16px;
    }
    .top .sp1{
        position: relative;
        .sps{
            width:17px;
            height: 17px;
            background: url(../../../static/perArchives/1_10.gif) no-repeat 100% 100%;
            position: absolute;
            top:14px;
            left:78px;
        }
        width: 280px;
        text-align: center;
        margin-right: 12px;
    }
    .top .sp2{
        display: inline-block;
        width: 1008px;
        text-indent: 30px;
        .sr{
            width: 227px;
            height: 52px;
            float: right;
            display: flex;
            text-align: center;
            position: relative;
            ul{
                width: 145px;
                position: absolute;
                top: 42px;
                left: 0;
                display: none;
                li{
                    text-align: left;
                    background: #d3ddd5;
                }
            }
            input{
                width:145px;
                height:22px;
                border-bottom: 1px solid #31c27c;
                margin-top: 18px;
            }
            .fang{
                width:18px;
                height:18px;
                position: absolute;
                background: url(../../../static/perArchives/1_03.gif) no-repeat 100% 100%;
                top:17px;
                left:123px;
                cursor:pointer;
            }
            .add{
                width:25px;
                height: 25px;
                background: url(../../assets/map/27.png) no-repeat 100% 100%;
                margin-top: 13px;
                margin-left: 10px;
            }
            .go{
                width:20px;
                height: 20px;
                background: url(../../../static/perArchives/1_07.gif) no-repeat 100% 100%;
                margin-top: 17px;
                margin-left: 12px;
            }
        }
    }
    .p{
        float: left;
        margin-right: 125px;
        font-size: 14px;
    }
    .paging {
        /*overflow: scroll;*/
        li {
            width: 1008px;
            height: 147px;
            background: #fff;
            margin-top: 12px;
            border-radius: 5px;
        }
        .li-left{
            width:200px;
            height:100%;
            float: left;
            /*border-right: 1px dotted red;*/
            /*border: solid 1px palevioletred;*/
            position: relative;
            .portrait{
                width:60px;
                height:60px;
                border-radius: 50%;
                margin-top: 30px;
                margin-left: 72px;
            }
            .portraits{
                /*width:60px;*/
                /*height:60px;*/
                /*border-radius: 50%;*/
                /*margin-top: 30px;*/
                /*margin-left: 72px;*/
                /*border: solid 1px skyblue;*/
                background: url("../../assets/map/37.png") no-repeat 70px 0;
            }
            .sex{
                position: absolute;
                top:105px;
                left:125px;
            }
            p{
                text-align: center;
                /*margin-top: 10px;*/
            }
        }

        .li-right{
            color: #666666;
            font-size: 14px;
            width:744px;
            height:100%;
            float: right;
            /*border: 1px solid palevioletred;*/
            .li-rt{
                /*width:804px;*/
                margin-top: 30px;
                /*margin-left: 50px;*/
                position: relative;
                .birthday{
                    margin-left: 126px;
                }
                .age{
                    margin-left: 155px;
                }
                img{
                    position: absolute;
                    top:3px;
                    left: -30px;
                }
            }
            .li-rb{
                margin-top: 45px;
                position: relative;
                img{
                    position: absolute;
                    top:0px;
                    left: -30px;
                }
            }
        }
        li:nth-child(1){
            margin-top: 0;
        }
    }
    .block{
        width: 1008px;
        height: 60px;
        background: #fff;
        right: 0;
        text-align: center;
        padding-top: 20px;
        margin-top: 12px;
        margin-right: 4px;
        float: right;
        border-radius: 5px;
    }

</style>


