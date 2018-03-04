<template>
    <div class="study">
        <div class="school" v-for="(item,index) in job_experience" :key="index">
            <div class="shijian">
                <div class="ch">
                    &nbsp;&nbsp;&nbsp;&nbsp;工作时间
                </div>
                <div class="in">
                    <el-date-picker v-model="item.time" type="daterange" eunlink-panels=fals range-separator=" 至 " start-placeholder="开始日期" end-placeholder="结束日期" @change="time()">
                    </el-date-picker>
                </div>
            </div>
            <div class="sc">
                <div class="ch">
                    &nbsp;工作单位
                </div>
                <div class="in">
                    <input type="text" v-model="item.job_unit">
                </div>
            </div>
            <div class="major">
                <div class="ch">
                    &nbsp;工作职位
                </div>
                <div class="in">
                    <input type="text" v-model="item.job_position" @blur="emit()">
                </div>
            </div>
        </div>
        <div class="img">
            <img src="../../images/map/27.png" @click="puch()"/>
        </div>
    </div>
</template>

<script>
    import Const from '../../base/commonJS/const'
    export default {
//        props:{
//            echoWork:{},//接收到父组件数据
//        },
        data(){
            return{
                value3:"",
                "job_experience":[{

                    "job_unit":"",
                    //                      工作职位
                    "job_position":"",
                    "time":"",
                    'job_begin_time': '',
                    //                      工作结束时间
                    'job_end_time': ''
                }],
            }
        },
        mounted() {
            this.job_experience.map((ele,index2)=>{
                if(ele.time!=""){
                    ele.job_begin_time = this.dataInit(ele.time[0]);
                    ele.job_end_time = this.dataInit(ele.time[1]);
                }
                if(ele.time==""){
                    ele.job_begin_time = "";
                    ele.job_end_time = "";
                }
            });

        },
        methods:{
            dataInit(res){
                return    new Date(res).toLocaleDateString().split('/').join("-")
            },
            puch (){
                this.job_experience.push({
                    "job_unit":"",
                    "job_position":"",
                    "time":"",
                    'job_begin_time': '',
                    'job_end_time': '',
                });
            },
            time(){
                this.job_experience.map((ele,index3)=>{
                    if(ele.time!=""){
                        ele.job_begin_time = this.dataInit(ele.time[0]);
                        ele.job_end_time = this.dataInit(ele.time[1]);
                    }
                    if(ele.time==""){
                        ele.job_begin_time = "";
                        ele.job_end_time = "";
                    }
                });
            },
            emit (){
                this.$emit("workdata",this.job_experience);
            }
        }
    }
</script>

<style lang="less" scoped>
    .study{
        width: 100%;
        position: relative;
        .school{
            width:100%;
            height:77px;
            .ch{
                /*border:1px solid yellowgreen;*/
                height:77px;
                line-height: 77px;
                float: left;
                font-size: 13px;
            }
            .shijian{
                width:300px;
                height: 77px;
                float: left;
                /*border: 1px solid red;*/
                .in{
                    margin-left: 10px;
                    width:214px;
                    height: 77px;
                    /*border: 1px solid black;*/
                    float: left;
                    .el-date-editor{
                        width: 214px;
                        margin-top: 20px;
                    }
                }
            }
            .sc{
                width: 277px;
                height: 77px;
                /*border: 1px solid dimgrey;*/
                float: left;
                margin-left: 24px;
                .in{
                    width:217px;
                    height: 77px;
                    /*border: 1px solid darkred;*/
                    float: left;
                    input{
                        width: 215px;
                        height: 36px;
                        /*border: 1px solid #BFD9CF;*/
                        border-radius: 5px;
                        margin-top: 20px;
                        font-size: 13px;
                        text-indent: 1em;
                        margin-left: 4px;
                    }
                }
            }
            .major{
                width: 280px;
                height: 77px;
                /*border: 1px solid cornflowerblue;*/
                float: left;
                margin-left: 40px;
                .in{
                    width: 220px;
                    height: 77px;
                    /*border: 1px solid darkred;*/
                    float: left;
                    input{
                        width: 215px;
                        height: 36px;
                        /*border: 1px solid #BFD9CF;*/
                        border-radius: 5px;
                        margin-top: 20px;
                        margin-left: 2px;
                        font-size: 13px;
                        text-indent: 1em;
                    }
                }
            }

        }
        .img{
            position: absolute;
            right: 10px;
            bottom: -28px;
            width: 40px;
            height: 77px;
        }
    }





</style>


