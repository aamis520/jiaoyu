<style lang="scss" scoped>
    .container {
        width: 1300px;
        height: 100%;
        margin: 0 auto;
        li{
            /*height:280px;*/
            border: 1px solid deepskyblue;
            p{
                width: 100%;
                height: 64px;

                line-height: 64px;
                text-align: center;
                font-size: 18px;
            };
            .top{
                color: red;
            }
            input{
                width:50px;
                border-bottom: 1px solid red;
                line-height: 16px;
            }
            .lis{
                width:225px;
                span{
                    color: darkred;
                }
            }
        }
    }




</style>

<template>
    <div class="container">
        <ul class="consultation-list">
            <li v-for="(item,index) in arr">
                <button @click="adds(item.class_course_id,index)" v-if="item.datanums!=100">保存</button>
                <p class="top">{{item.name}}</p>
                <div class="lis">
                   <span>课程期ID：{{item.class_course_id}}</span>
                </div>
                <div class="money">
                    <div>
                        <p>
                            <span>学费：<input type="text" v-model="dataJson.standardFee.feeByPeriod" @blur="data()">元/期&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span><input type="text" v-model="dataJson.standardFee.numberOfPeriod" @blur="data()">次/期&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span><input type="text" v-model="dataJson.standardFee.feeByTime">元/次&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </p>
                        <p>
                            <span>学生续费，优惠&nbsp;&nbsp;<input type="text" v-model="dataJson.preferentialMoney">元&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>续费截止日未开启报名时间段后的第&nbsp;&nbsp;<input type="text" v-model="dataJson.delayDays">天</span>
                        </p>
                        <p>最大班容&nbsp;&nbsp;<input type="text" v-model="dataJson.maxCapacity">人</p>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    import Const from '../../common/const'
    export default {
        data() {
            return {
                arr:[],
                datanums:"",
                dataJson:{
                    //班级期ID
                    "coursePeriodId": "",
                    //标准费用
                    "standardFee": {
                        "feeType": "period",
                        //第一个INPUT
                        "feeByPeriod": 0,
                        //几次
                        "numberOfPeriod": 0,
                        //每次
                        "feeByTime":0,
                    },
                    //续费优惠金额
                    "preferentialMoney": 0,
                    // 报名截止后限制天数
                    "delayDays": 0,
                    //班级容量
                    "maxCapacity": 2
                }
            }
        },
        mounted(){
            var urls = "/api/v1/classes/chain/selectCoursePeriodBySchoolId?headSchoolId=5a0044644828d410b4b07315";
            this.axios.post(urls).then((res) => {
                console.log("接口",res.data.messages);
                this.arr = res.data.messages.data;
            }).catch(function(error) {
                console.log("接口找不到");
            });
        },
        prop: {},
        methods: {
            data(){
                this.dataJson.standardFee.feeByTime=this.dataJson.standardFee.feeByPeriod/this.dataJson.standardFee.numberOfPeriod;
            },
            adds (x,y){
                this.dataJson.coursePeriodId = x;
                console.log(y,"10086");
                var Url = "/api/v1/classes/chain/saveCoursePeriodSetting";
                this.axios.post(Url,this.dataJson).then((res) => {
                    console.log("接收",res.data);
                    this.arr.datanums = 100;
                    $('li').eq(y).css("background","#ffffff");
                }).catch(function(error) {
                    console.log("接收找不到");
                });
            }
        },
        components: {}
    }
</script>
