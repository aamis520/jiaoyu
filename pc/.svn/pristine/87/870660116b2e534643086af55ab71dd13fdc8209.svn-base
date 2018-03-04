<template>
    <div class="basic">
        <div class="detailed">
            <span>人事变动</span>
            <div>
                <i class="ico-init ico-pen"></i>
                <i class="ico-init ico-book"></i>
            </div>
        </div>
        <div class="rendering">
            <div class="caption">
                <span class="green">基本信息</span>
                <i class="ico-init ico-notes"></i>
                <span class="blue">+ 新增</span>
            </div>
            <div class="case">
                <div class="case_list">总部 · 人事部 · 人事主管</div>
                <div class="case_depose">
                    免职
                </div>
                <div class="case_post">
                    调岗
                </div>
            </div>
            <div class="case">
                <div class="case_list">总部 · 咨询部 · 咨询师</div>
                <div class="case_depose">
                    免职
                </div>
                <div class="case_post">
                    调岗
                </div>
            </div>
            <div class="caption">
                <span class="green">人事变动</span>
            </div>
            <div class="matters_change">
                <div class="matters_list">
                    <div class="matters_num">
                        <div class="circular">4</div>
                    </div>
                    <div class="matters_case">
                        <div class="matters_time">
                            17-07-07
                        </div>
                        <div class="matters_position">
                            任命为总部 · 人事部 · 人事主管岗位
                        </div>
                        <div class="matters_personal">
                            <img src="../../../images/map/41.png" alt="">
                            <div class="matters_name">
                                顾仁敏
                            </div>
                            <div class="matters_clock">
                                09:00
                            </div>
                        </div>
                    </div>
                </div>
                <div class="matters_list">
                    <div class="matters_num">
                        <div class="circular">3</div>
                    </div>
                    <div class="matters_case">
                        <div class="matters_time">
                            17-07-07
                        </div>
                        <div class="matters_position">
                            任命为总部 · 人事部 · 人事主管岗位
                        </div>
                        <div class="matters_personal">
                            <img src="../../../images/map/41.png" alt="">
                            <div class="matters_name">
                                顾仁敏
                            </div>
                            <div class="matters_clock">
                                09:00
                            </div>
                        </div>
                    </div>
                </div>
                <div class="matters_list">
                    <div class="matters_num">
                        <div class="circular">2</div>
                    </div>
                    <div class="matters_case">
                        <div class="matters_time">
                            17-07-07
                        </div>
                        <div class="matters_position">
                            任命为总部 · 人事部 · 人事主管岗位
                        </div>
                        <div class="matters_personal">
                            <img src="../../../images/map/41.png" alt="">
                            <div class="matters_name">
                                顾仁敏
                            </div>
                            <div class="matters_clock">
                                09:00
                            </div>
                        </div>
                    </div>
                </div>
                <div class="matters_list">
                    <div class="matters_num">
                        <div class="circular">1</div>
                    </div>
                    <div class="matters_case">
                        <div class="matters_time">
                            17-07-07
                        </div>
                        <div class="matters_position">
                            任命为总部 · 人事部 · 人事主管岗位
                        </div>
                        <div class="matters_personal">
                            <img src="../../../images/map/41.png" alt="">
                            <div class="matters_name">
                                顾仁敏
                            </div>
                            <div class="matters_clock">
                                09:00
                            </div>
                        </div>
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
            console.log(this.basicData);
        },
        methods:{

        },
        $watch: {

        }
    }
</script>

<style lang="less" scoped>
    @ma:#31c27c;
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
        .ico-pen{
            margin-right: 40px;
        }
        .ico-book{
            margin-right: 15px;
        }
        span {
            color: #31c27c;
            margin-left: 30px;
            font-size: 16px;
        }
    }
    .rendering{
        width: 1008px;
        height: 1049px;
        background: #ffffff;
        margin-top: 12px;
        border-radius: 5px;
        margin-bottom: 40px;
    }
    .caption{
        width: 933px;
        height: 80px;
        margin: 0 auto;
        box-sizing: border-box;
        border-bottom: dotted 1px #dcdddd;
        position: relative;
        .green{
            line-height: 80px;
            color: @ma;
            font-size: 14px;
            font-weight: bold;
        }
        .blue{
            float: right;
            line-height: 80px;
            color: #25afff;
            font-size: 14px;
        }
        .ico-notes{
            position: absolute;
            top: 31px;
            left: 60px;
        }
    }
    .case{
        width: 933px;
        height: 70px;
        margin: 0 auto;
        box-sizing: border-box;
        border-bottom: dotted 1px #dcdddd;
        div{
            line-height: 70px;
            font-size: 14px;
        }
        .case_list{
            color: #666666;
            float: left;
        }
        .case_depose{
            color: #16b5ff;
            float: right;
        }
        .case_post{
            color: #16b5ff;
            float: right;
            margin-right: 10px;
        }

    }
    .matters_change{
        width: 933px;
        margin: 0 auto;
    }
    .matters_list{
        width: 933px;
        height: 70px;
        .matters_num{
            width: 57px;
            height: 70px;
            position: relative;
            float: left;
            .circular{
                width: 20px;
                height: 20px;
                background: green;
                border-radius: 50%;
                color: #ffffff;
                font-weight: bold;
                text-align: center;
                line-height: 20px;
                position: absolute;
                top:26px;
                left: 12px;
            }
        }
    }
    .matters_case{
        width: 876px;
        height: 70px;
        float: left;
        display: flex;
        border-bottom: dotted 1px #dcdddd;
    }
    .matters_time{
        width: 180px;
        float: left;
        line-height: 70px;
        font-size: 14px;
        color: #666666;
    }
    .matters_position{
        width: 569px;
        line-height: 70px;
        font-size: 14px;
        color: #666666;
    }
    .matters_personal{
        width: 127px;
        height: 70px;
        line-height: 70px;
        img{
            width: 30px;
            height: 30px;
            margin-top: 20px;
            float: left;
        }
    }
    .matters_name{
        line-height: 70px;
        font-size: 14px;
        float: left;
        color: #666666;
        margin-left: 5px;
    }
    .matters_clock{
        line-height: 70px;
        font-size: 14px;
        float: left;
        color: #999999;
        margin-left: 5px;
    }






</style>


