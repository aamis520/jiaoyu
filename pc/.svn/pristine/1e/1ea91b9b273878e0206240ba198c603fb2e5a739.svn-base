<template>
    <div class="personal">
        <div class="left">
            <div class="center">
                <div class="green"></div>
                <div class="portrait">
                    <img src="../../../images/map/41.png" alt="" class="por" @click="portraits()">
                </div>
                <div class="name">
                    未设置
                </div>
                <ul class="datas">
                    <li>
                        &nbsp;&nbsp;请设置角色
                    </li>
                    <li>
                        &nbsp;&nbsp;请填写校区
                    </li>
                </ul>
            </div>
            <div class="transfer">
                <div class="transfer_small">
                    <div class="small_top">
                        <div class="top_student">
                          <div class="num">
                                123
                          </div>
                          <div class="chinese">
                                学生
                          </div>
                        </div>
                        <div class="top_owe">
                            <div class="num">
                                7
                            </div>
                            <div class="chinese">
                                催欠
                            </div>
                        </div>
                        <div class="top_continued">
                            <div class="num">
                                3
                            </div>
                            <div class="chinese">
                                催续
                            </div>
                        </div>
                    </div>
                    <div class="small_bottom">
                        <div class="bottom_newborn">
                            <div class="num">
                                37
                            </div>
                            <div class="chinese">
                                月新生
                            </div>
                        </div>
                        <div class="bottom_loss">
                            <div class="num">
                                10
                            </div>
                            <div class="chinese">
                                月流失
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="details">
                <router-link active-class="act2" :to="{path:'/perArchives/personal/basic'}" tag="div">
                    <span>详细信息</span>
                </router-link>
                <router-link active-class="act2" :to="{path:'/perArchives/personal/change'}" tag="div">
                    <span>人事变动</span>
                </router-link>
                <router-link active-class="act2" :to="{path:'/perArchives/personal/evaluate'}" tag="div">
                    <span>工作评定</span>
                </router-link>
                <router-link active-class="act2" :to="{path:'/perArchives/personal/attendance'}" tag="div">
                    <span>个人考勤</span>
                </router-link>
            </div>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import contapi from '@commonJS/const'
    export default {
        components:{

        },
        data(){
            return{

            }
        },
        computed: {
            //获取跟人ID
            basicData(){
               return this.$store.state.perData.basicData;
            }
        },
        mounted() {
            console.log('获取ID',this.basicData);

            var urls = contapi.staff+"/v1/dossier/staff/findStaffById";
            let basicObj={
                accessToken:this.$ls.get('USER_INFO').accessToken,
                account_id:this.basicData
            }
            console.log("好困",basicObj);
            this.axios.post(urls,basicObj).then((res) => {
                console.log("获取员工",res.messages.data)
//                将获取到的员工数据,用于展示的信息储存到vuex中
                    this.$store.commit("GET_DETAILED",res.messages.data);
            }).catch(function(error) {
                console.log(error);
            });
        },
        methods:{

        },
        $watch: {

        }
    }
</script>

<style lang="less" scoped>
    @ma:#31c27c;
    .personal{
        width: 1350px;
        margin: 50px auto;
        position: relative;
        clear:both;
    }
    .left {
        width: 280px;
        float: left;
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
            height: 255px;
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
                text-indent: 3.5em;
                line-height: 32px;
                color: #666;
            }
            li:first-child{
                background: #fff url("../../../images/map/13.png") no-repeat 30px 8px;
            }
            li:last-child{
                background: #fff url("../../../images/map/14.png") no-repeat 30px 5px;
            }
        }
        .details {
            width: 280px;
            height: 528px;
            margin-top: 12px;
            background: #fff;
            border-radius: 5px;
            color: @ma;
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
            div:nth-child(1){
                background: #fff url("../../../images/map/15.png") no-repeat 30px 20px;
            }
            div:nth-child(2){
                background: #fff url("../../../images/map/16.png") no-repeat 30px 20px;
            }
            div:nth-child(3){
                background: #fff url("../../../images/map/17.png") no-repeat 30px 20px;
            }
            div:nth-child(4){
                background: #fff url("../../../images/map/18.png") no-repeat 30px 20px;
            }
        }

    }
    .act2{
        span{
            color: @ma;
        }
        background: #f7f8fc;
    }
    .router-link-active{
        span{
            color: @ma;
        }
        background: #f7f8fc;
    }
    .right{
        width: 1008px;
        height: 30px;
        box-sizing: border-box;
        float: left;
        margin-left: 12px;
    }
    .transfer{
        width: 280px;
        height: 130px;
        background: #ffffff;
        border-radius: 5px;
        margin-top: 12px;
    }
    .transfer_small{
        width: 222px;
        height: 130px;
        box-sizing: border-box;
        margin: 0 auto;
    }
    .small_top{
        width: 222px;
        height: 65px;
        border-bottom: 1px #cccccc dotted;
        display: flex;
        .num{
            margin-top: 3px;
            font-size: 18px;
        }
        .chinese{
            margin-top: 0px;
            font-size: 12px;
            color: #666666;
        }
    }
    .top_student{
        width: 66px;
        height: 44px;
        margin-top: 10px;
        text-align: center;
        border-right: 1px #cccccc dotted;
        .num{
            color: #38bbff;
        }
    }
    .top_owe{
        width: 85px;
        height: 44px;
        margin-top: 10px;
        text-align: center;
        border-right: 1px #cccccc dotted;
        .num{
            color: #ffc924;
        }
    }
    .top_continued{
        width: 70px;
        height: 44px;
        margin-top: 10px;
        text-align: center;
        .num{
            color: #ff7d2f;
        }
    }
    .small_bottom{
        width: 222px;
        height: 44px;
        text-align: center;
        margin-top: 10px;
        display: flex;
        .num{
            margin-top: 3px;
            font-size: 18px;
        }
        .chinese{
            margin-top: 0px;
            font-size: 12px;
            color: #666666;
        }
    }
    .bottom_newborn{
        width: 110px;
        height: 44px;
        border-right: 1px #cccccc dotted;
        .num{
            color: #31c27c;
        }
    }
    .bottom_loss{
        width:110px;
        height: 44px;
        .num{
            color: #ff5959;
        }
    }





</style>


