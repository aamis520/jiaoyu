<template>
    <div id="pre" :style="{backgroundImage:'url('+img+')'}">
        <Head-item></Head-item>
        <div class="main">
            <div class="top">
                <p class="top-l">
                    <img src="./images/3.png" alt="" @click="trans(newday,'0')" class="l">
                    <span class="time" v-model="newday">{{newday}}</span>
                    <img src="./images/2.png" alt="" @click="trans(newday,'1')" class="r">
                </p>
                <p class="top-r">
                    18春
                </p>
            </div>
            <div class="dian">
            </div>
            <div class="center">
                <div class="new">
                    <div class="new-l">
                        新报
                    </div>
                    <ul class="new-r">
                        <li v-for="(item1,index) in Sudata.new" :key="index" >
                            <p class="strip" :class="{'lastColor' :  Sudata.new.length == index+1} ">
                                {{item1.title}}
                            </p>
                            <p class="specific"  @click="showLayer('new')" :class="{'lastColor' :  Sudata.new.length == index+1} ">
                                {{item1.all}}
                            </p>
                            <p class="spring"  @click="showLayer('new')" :class="{'lastColor' :  Sudata.new.length == index+1} ">
                                {{item1.day}}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="new" style="margin-top: 15px">
                    <div class="new-l">
                        续费
                    </div>
                    <ul class="new-r">
                        <li v-for="(item2,index) in Sudata.renew" :key="index">
                            <p class="strip" :class="{'lastColor' :  Sudata.renew.length == index+1} ">
                                {{item2.title}}
                            </p>
                            <p class="specific" @click="showLayer('total')" :class="{'lastColor' :  Sudata.renew.length == index+1} ">
                                {{item2.all}}
                            </p>
                            <p class="spring" @click="showLayer('total')" :class="{'lastColor' :  Sudata.renew.length == index+1} ">
                                {{item2.day}}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="news" style="margin-top: 15px">
                    <div class="new-ls" style="line-height: 60px">
                        物品
                    </div>
                    <ul class="new-r">
                        <li v-for="(item,index) in Sudata.goods" :key="index">
                            <p class="strip">
                                {{item.title}}
                            </p>
                            <p class="specific">
                                {{item.all}}
                            </p>
                            <p class="spring">
                                {{item.day}}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="new-b">
                    <div class="new-lss">
                        总计
                    </div>
                    <ul class="new-r">
                        <li v-for="(item3,index) in Sudata.total" :key="index" >
                            <p class="strip" :class="{'lastColor' :  Sudata.total.length == index+1} ">
                                {{item3.title}}
                            </p>
                            <p class="specific" :class="{'lastColor' :  Sudata.total.length == index+1} ">
                                {{item3.all}}
                            </p>
                            <p class="spring" :class="{'lastColor' :  Sudata.total.length == index+1} ">
                                {{item3.day}}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hide" v-show="ishide">
                <div class="h-top">
                    {{titleData}}
                    <img src="./images/1.png" alt="" class="close" @click="close()">
                </div>
                <div class="h-center" style="border-bottom: 1px solid #eceff4">
                    <p class="h-topl">
                        <img src="./images/3.png" alt="" @click="trans(newday,'0')" class="ll">
                        <span class="h-toplo">{{newday}}</span>
                        <img src="./images/2.png" alt="" @click="trans(newday,'1')" class="rr">
                    </p>
                    <p class="h-topr">
                        18春
                    </p>
                </div>
                <ul class="ranking">
                    <li v-for="(item4,index) in selectSchool" :key="index" style="border-bottom: 1px solid #eceff4">
                        <p class="ran-o">{{index+1}}</p>
                        <p class="ran-t">{{item4.school_name}}</p>
                        <p class="ran-f">{{item4.day_student_num}}人</p>
                        <p class="ran-s">{{item4.label_student_num}}人</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Head from '../../components/head'
    import Const from '../../common/const'

    export default {
        components: {
            "Head-item": Head
        },
        data() {
            return {
                img: require('../../assets/bj.jpg'),
                ishide: false,
                Sudata:"",
                selectSchool:[],
                newday:"",
                hideDate: '',
                titleData:"",
                istrue: true,
//                thisData:"",
                tanceng:"",//弹出层字段
//                newCST:"",
                headSchoolId: '',
//                nowDayReturn:'',//存储当前月当前天
                ma: [['1','3','5','7','8','10'],['4','6','9','11']],

            }
        },
        computed: {},
        mounted() {
            let dd = new Date()
            this.headSchoolId = this.$ls.get('USER_INFO').headSchoolId
            this.newday = dd.toLocaleDateString().replace(/\//g,'-');
            this.goDay();
            let oldtimes = this.hideDate.getFullYear();
            let oldMouth01s = this.hideDate.getMonth() + 1;
            let oldDays = this.hideDate.getDate()
            if(oldDays<10){
                oldDays = '0'+oldDays;
            }
            this.hideDate = oldtimes+'-'+oldMouth01s+'-'+oldDays;

            if(this.hideDate == this.newday){
                this.istrue = false;
            }else{
                this.istrue = true;
            }
        },
        methods: {
            showLayer(tanceng) {
                if(tanceng == "new"){
                    this.titleData = "新报人数排名";
                }else{
                    this.titleData = "续费人数排名";
                }
                this.tanceng = tanceng;
                this.ishide = true;
                this.goDay();
            },
//            判断是几月份
            check(n,a) {
                for(var i = 0,len = a.length;i < len;i++) {
                    if(a[i] == n) {
                        return true;
                    }
                }
                return false;
            },
//            是否闰年
            isLeap(y) {
                return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) ? true : false;
            },
            //实现加减f：'1'加，'0'减
            trans(o,f) {
                var d = o.split('-');
                var l = this.isLeap(d[0]);
                this.hideDate = new Date();
                let oldtimes = this.hideDate.getFullYear();
                let oldMouth01s = this.hideDate.getMonth() + 1;
                let oldDays = this.hideDate.getDate()
                if(oldDays<10){
                    oldDays = '0'+oldDays;
                }
                this.hideDate = oldtimes+'-'+oldMouth01s+'-'+oldDays;
                console.log(this.hideDate);
                console.log(this.newday);
                if(this.hideDate == this.newday){
                    this.istrue = false;
                }else{
                    this.istrue = true;
                }
                if(f == '1'&&this.istrue) {
                    if((this.check(d[1],this.ma[0]) && (d[2] == '31')) || (this.check(d[1],this.ma[1]) && (d[2] == '30')) ||
                        (d[1] == '2' && d[2] == '28' && !l) || (d[1] == '2' && d[2] == '29' && l)) {
                        this.newday =  d[0] + '-' + (d[1] * 1 + 1) + '-' + 1;
                    } else if(d[1] == '12' && d[2] == '31') {
                        this.newday =  (d[0] * 1 + 1) + '-' + '1-1';
                    } else {
                        this.newday =  d[0] + '-' + d[1] + '-' + (d[2] * 1 + 1);
//                        console.log(0);
                    }
                    this.goDay();
                } else if(f == '0') {
                    if(this.check(d[1] - 1,this.ma[0]) && (d[2] == '01')) {
                        this.newday =  d[0] + '-' + (d[1] - 1) + '-' + '31';
                    } else if(this.check(d[1] - 1,this.ma[1]) && (d[2] == '01')) {
                        this.newday =  d[0] + '-' + (d[1] - 1) + '-' + '30';
                    } else if(d[1] == '1' && d[2] == '01') {
                        this.newday =  (d[0] - 1) + '-' + '12-31';
                    } else if(d[1] == '3' && d[2] == '01' && !l) {
                        this.newday =  d[0] + '-' + '2-28';
                    } else if(d[1] == '3' && d[2] == '01' && l) {
                        this.newday =  d[0] + '-' + '2-29';
                    } else {
                        console.log(d[1]);
                        console.log(d[2]);
                        this.newday =  d[0] + '-' + d[1] + '-' + (d[2] - 1);
                    }
                    this.goDay();
                } else {
                    this.newday;
                }
            },


//
            getTancengDate(num){
                var urls = Const.statistics + "v1/app/teacher/statistics/selectSchoolOrderAchievementByTime?accessToken=aaaa&headSchoolId="+this.headSchoolId+"&queryDay="+num+"&registerType="+this.tanceng;
                this.axios.post(urls).then((res) => {
                    this.selectSchool = res.data.messages.data;
//                    console.log("总计弹框找到", res.data.messages.data);
//                    console.log(res)
//                    console.log('keyi')
                }).catch(function (error) {
                    console.log("总计找不到");
                });
            },
            getNoTancengDate(num){
                var urls1 = Const.statistics + "v1/app/teacher/statistics/selectOrderAchievementByTime?accessToken=aaaa&headSchoolId="+this.headSchoolId+"&queryDay="+num;
                this.axios.post(urls1).then((res) => {
//                    console.log(res)
                    if(res.data.messages.data){
                        this.Sudata = res.data.messages.data;
                    }else{
                        this.Sudata="";
                        console.log("没有数据")
                    }
//                    console.log('keyi')
                }).catch(function (error) {
                    console.log("总计找不到");
                });
            },
            goDay(){
                //获取当前表中日期 年月等信息
                let oldTime = new Date(this.newday);
                let oldYear = oldTime.getFullYear()//当前年
                let oldMouth = oldTime.getMonth()//当前月
                let oldMouth01 = oldTime.getMonth() + 1//当前月
                let oldDay = oldTime.getDate()//当前天
                let allDay = new Date(oldYear, oldMouth01, 0)//转成标准时间
                let newDay = oldDay;
                let newTime = new Date(oldYear, oldMouth , newDay);//转成标准时间
                let newTimeToString = newTime.toString().split(' ');//转成字符串
                this.hideDate = new Date();
                this.newday = newTimeToString[3] + '-' + (oldMouth+1) + '-' + newTimeToString[2] ///2017-11-10
                this.newCST = newTimeToString[0] + ' ' + newTimeToString[1] + ' ' + newTimeToString[2] + ' 00:00:00 CST ' + newTimeToString[3] ///拼接成CST日期格式


                this.getNoTancengDate(this.newCST);
                this.getTancengDate(this.newCST);
            },
            close() {
                this.ishide = !this.ishide;
            }
        }
    }
</script>

<style lang="less" scoped>


    #pre {
        font-family: '微软雅黑', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-size: 100% 100%;
        background-position: 0 58px;
    }
    .main {
        width: 1200px;
        padding: 165px 50px 0px;
        min-height: 1022px;
        margin: 44px auto 0;
        border-radius: 5px;
        position: relative;
        background: #fff url(../../assets/hztj/hd_01.gif) no-repeat top center;
    }

    .top {
        width: 1300px;
        height: 60px;
        line-height: 60px;
        position: relative;
        .top-l {
            float: left;
            margin-left: 465px;
            .l{
                position: absolute;
                top: 20px;
                left: 460px;
                cursor:pointer;
            }
            .r{
                position: absolute;
                top: 20px;
                left: 583px;
                cursor:pointer;
            }
            .tomorrow {
                color: #a6abb4;
                margin-left: 33px;
            }
            .time {
                margin-left: 27px;
                color: #666;
                line-height: 60px;
            }
        }
        .top-r {
            float: right;
            margin-right: 410px;
            font-size: 14px;
        }
    }

    .center {
        background: #f3f5f9;
        padding-top: 15px;
        .new {
            height: 305px;
            background: #fff;
        }
        /*.dian{*/
        /*width:305px;*/
        /*height: 15px;*/
        /*background: #f3f5f9;*/
        /*}*/
        .news {
            height: 60px;
            background: #fff;
        }
        .new-b {
            height: 185px;
            background: #fff;
            margin-top: 15px;
        }
    }

    .new-l {
        width: 95px;
        height: 305px;
        float: left;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
    }

    .new-ls {
        width: 95px;
        height: 62px;
        float: left;
        line-height: 62px;
        text-align: center;
        font-size: 16px;
    }

    .new-lss {
        width: 95px;
        height: 185px;
        float: left;
        text-align: center;
        font-size: 16px;
        color: #31c27c;
        line-height: 60px;
    }

    .new-r {
        width: 1105px;
        float: right;
        li {
            line-height: 60px;
            display: flex;
            box-sizing: border-box;
            .strip {
                width: 256px;
                text-align: center;
                color: #666;
                font-size: 16px;
            }
            .specific {
                width: 390px;
                text-align: center;
                color: #11a0f8;
                font-size: 16px;
                cursor:pointer;
            }
            .spring {
                width: 270px;
                text-align: center;
                padding-right: 24px;
                color: #11a0f8;
                font-size: 16px;
                cursor:pointer;
            }

            .lastColor{
                color: #ff4545;

            }


        }
    }

    .hide {
        width: 900px;
        height: 708px;
        position: absolute;
        top: 40px;
        left: 200px;
        /*border: 1px solid red;*/
        border-radius: 5px;
        background: #fff;
        box-shadow:0px 0px 60px 0.05px #c4cacf;
    }

    .h-top {
        width: 900px;
        height: 60px;
        text-align: center;
        color: #333;
        line-height: 60px;
        font-size: 16px;
        background: #eff3f5;
    }

    .close {
        position: absolute;
        top: 0;
        right: 0;
        cursor:pointer;
    }

    .h-center {
        width: 818px;
        height: 60px;
        line-height: 60px;
        margin-left: auto;
        margin-right: auto;
        /*border: 1px solid springgreen;*/
        .h-topl {
            float: left;
            margin-left: 336px;
            color: #b6bac1;
            font-size: 16px;
            position: relative;
            .ll{
                position: absolute;
                top:20px;
                left: -4px;
                cursor:pointer;
            }
            .rr{
                position: absolute;
                top: 20px;
                left: 124px;
                cursor:pointer;
            }
            .h-toplo {
                margin-left: 25px;
                color: #666;
            }
            .h-toplt {
                margin-left: 30px;
            }
        }
        .h-topr {
            float: left;
            margin-left: 265px;
            color: #666;
            font-size: 16px;
        }
    }

    .ranking {
        width: 818px;
        margin-left: auto;
        margin-right: auto;
        li {
            width: 818px;
            height: 60px;
            line-height: 60px;
        }
        .ran-o {
            width: 50px;
            float: left;
            font-size: 16px;
            color: #f58a33;
            font-weight:bold;
        }
        .ran-t {
            width: 280px;
            float: left;
            font-size: 16px;
        }
        .ran-f {
            width: 140px;
            float: left;
            text-align: center;
            font-size: 16px;
            color: #666;
        }
        .ran-s {
            width: 276px;
            float: left;
            text-align: right;
            font-size: 16px;
            color: #666;
        }
    }

</style>


