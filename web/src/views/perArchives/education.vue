<template>
    <div class="subject">
        <div class="sub-lv">
            <div class="sub-t">
                <img src="../../../static/perArchives/2-1_03_03.gif" alt="" class="sub-l">
                <span>学历等级</span>
                <img src="../../../static/perArchives/2-1_03_05.gif" alt="" class="sub-x" @click="close">
            </div>
            <ul>
                <li v-for="(item,index) in studyArrJson" @click="addImg(item.stuId,index)" :class="[item.showImg == true ? portraits: '']">{{item.name}}
                    <img src="../../assets/map/33.png" alt="" v-show="item.showImg">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                index: false,
                studyArrJson:[
                    {'stuId':'doctor','name':'博士研究生','showImg':false},
                    {'stuId':'master','name':'硕士研究生','showImg':false},
                    {'stuId':'undergraduate','name':'本科','showImg':false},
                    {'stuId':'specialty','name':'专科','showImg':false},
                    {'stuId':'highSchool','name':'高中','showImg':false},
                    {'stuId':'doctorReading','name':'博士研究生在读','showImg':false},
                    {'stuId':'masterReading','name':'硕士研究生在读','showImg':false},
                    {'stuId':'postDoctoral','name':'博士后','showImg':false}
                ],
            }
        },
        mounted() {

        },
        methods:{
            close (){
                this.$emit("eduData",false);
            },
            addImg(x,y){
                var vm = this;
                for(let i=0;i<this.studyArrJson.length;i++){
                    vm.studyArrJson[i].showImg = false;
                }
                this.studyArrJson[y].showImg = true;
                var Arr = [this.studyArrJson[y].stuId,this.studyArrJson[y].name];
                this.$emit("studyJ",Arr);
            }
        }
    }
</script>

<style lang="less" scoped>
    .subject{
        width:100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        left:0;
        z-index: 11;
        .sub-lv{
            width: 500px;
            height:370px;
            background: #ffffff;
            position: absolute;
            margin-left: -250px;
            margin-top: -135px;
            top:50%;
            left:50%;
            border-radius: 5px;
            .sub-t{
                width:460px;
                height: 50px;
                margin: 0 auto;
                line-height: 50px;
                color: #666666;
                border-bottom: solid #ececec 1px;
                span{
                    margin-left: 10px;
                }
                .sub-x{
                    float: right;
                    margin-top: 15px;
                }
                .sub-l{
                    float: left;
                    margin-top: 16px;
                }
            }
            ul{
                width:460px;
                margin: 0 auto;
                .portraits{
                    background: #f2f5f8;
                }
                li{
                    width:460px;
                    height:40px;
                    text-align: center;
                    line-height: 40px;
                    position: relative;
                    img{
                        position: absolute;
                        top: 10px;
                        left: 330px;
                    }
                }
            }
        }
    }






</style>


