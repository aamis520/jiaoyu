<template>
    <div class="study">
        <div class="school" v-for="(item,index) in learning_experience" :key="index">
            <div class="shijian">
                <div class="ch">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就读时间
                </div>
                <div class="in">
                    <el-date-picker v-model="item.time" type="daterange" eunlink-panels=fals range-separator=" 至 " start-placeholder="开始日期" end-placeholder="结束日期" @change="time()">
                    </el-date-picker>
                </div>
            </div>
            <div class="sc">
                <div class="ch">
                    &nbsp;就读学校
                </div>
                <div class="in">
                    <input type="text" v-model="item.learning_school">
                </div>
            </div>
            <div class="major">
                <div class="ch">
                    &nbsp;就读专业
                </div>
                <div class="in">
                    <input type="text" v-model="item.learning_major" @blur="emit()">
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
        props:{
            echo:{},//接收到父组件数据
        },
        computed:{

//            newecholearning_school (){
//                if(this.echo){
//                    return this.echo[0].learning_school
//                  }
//            },
//            newecholearning_major (){
//                if(this.echo){
//                    return this.echo[0].learning_major
//                }
//            },
//            newlearning_begin_time (){
//                if(this.echo){
//                    return this.echo[0].learning_school
//                }
//            },
        },
        data(){
            return{
                value3:"",
                //                              求学经历
                learning_experience:[
                    {
                        "learning_school":"",
                        "learning_major":"",
                        'learning_begin_time': '',
                        'learning_end_time': '',
                        "time":""
                    }
                ],
            }
        },
        mounted() {

            this.learning_experience.map((ele,index3)=>{
                if(ele.time!=""){
                    ele.learning_begin_time = this.dataInit(ele.time[0]);
                    ele.learning_end_time = this.dataInit(ele.time[1]);
                }
                if(ele.time==""){
                    ele.learning_begin_time = "";
                    ele.learning_end_time = "";
                }
            });

        },
        updated() {

            //let newArr  = [this.goDay(this.newecho.learning_begin_time) ,this.goDay(this.newecho.learning_end_time)];
            //this.learning_experience.time = newArr;
            //console.log(10086,this.newecho);
        },
        methods:{
            dataInit(res){
            return    new Date(res).toLocaleDateString().split('/').join("-")
            },
            goDay(num) {
                let oldTime = new Date();
                let newTimeToString = oldTime.toString().split(' ') //转成字符串
                return  newTimeToString[0] + ' ' + newTimeToString[1] + ' ' + newTimeToString[2] + ' 00:00:00 CST ' + newTimeToString[3] ///拼接成CST日期格式
            },
            puch (){
                this.learning_experience.push({
                    "learning_school":"",
                    "learning_major":"",
                    'learning_begin_time': '',
                    'learning_end_time': '',
                    "time":""
                });
            },
            time(){
                this.learning_experience.map((ele,index2)=>{
                    if(ele.time!=""){
                        ele.learning_begin_time = this.dataInit(ele.time[0]);
                        ele.learning_end_time = this.dataInit(ele.time[1]);
                    }
                    if(ele.time==""){
                        ele.learning_begin_time = "";
                        ele.learning_end_time = "";
                    }
                });
            },
            emit (){
                this.$emit("studydata",this.learning_experience);
            },
            jian (){
                console.log(10086,this.echo);
            }
        },
        watch:{

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


